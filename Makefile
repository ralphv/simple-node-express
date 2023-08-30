.PHONE: build
build:
    docker buildx create --name localremote_builder --node localremote_builder0 --platform linux/amd64,linux/arm64/v8,linux/ppc64le,linux/s390x --driver-opt env.BUILDKIT_STEP_LOG_MAX_SIZE=10000000 --driver-opt env.BUILDKIT_STEP_LOG_MAX_SPEED=10000000
    docker buildx create --name localremote_builder --append --node pi --platform linux/arm/v6,linux/arm/v7,linux/arm/v8 ssh://root@pi4.urlip.com --driver-opt env.BUILDKIT_STEP_LOG_MAX_SIZE=10000000 --driver-opt env.BUILDKIT_STEP_LOG_MAX_SPEED=10000000
    docker buildx use localremote_builder
    docker buildx build --push --platform linux/amd64,linux/arm64/v8,linux/ppc64le,linux/s390x,linux/arm/v6,linux/arm/v7,linux/arm/v8 --tag ralphv/simple-node-express:latest .