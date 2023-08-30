## Purpose

Use this simple image in your quick projects to create containers that respond to any path/url/method with some simple output.
You can find this at [https://hub.docker.com/r/ralphv/simple-node-express](https://hub.docker.com/r/ralphv/simple-node-express)

To pull built image:
```shell
docker pull ralphv/simple-node-express
```

### To build locally

```shell
docker build --no-cache . -t ralphv/simple-node-express:latest`
```

### Environment variables:

* `SERVICE_NAME`: Just a service name, an identity to give to the particular instance of this container, defaults to `N/A`
* `PORT`: The port to listen to, defaults to `8080`

### To run

```shell
docker run -it --init --rm \
-p 8080:8080 \
-e PORT='8080' \
-e SERVICE_NAME='from-docker-run' \
--name simple-node-express \
ralphv/simple-node-express:latest
```

### To build with buildx for multiple platforms using Windows/Raspberry pi 4 

* Make sure raspberry pi doesn't need sudo [https://github.com/sindresorhus/guides/blob/main/docker-without-sudo.md](https://github.com/sindresorhus/guides/blob/main/docker-without-sudo.md)
* Setup root access through ssh if the above doesn't work, either way the next command should work
* This command should work `docker -H ssh://USER@HOST ps`
* Run this command `docker buildx create --name localremote_builder --node localremote_builder0 --platform linux/arm64/v8,linux/amd64,linux/s390x --driver-opt env.BUILDKIT_STEP_LOG_MAX_SIZE=10000000 --driver-opt env.BUILDKIT_STEP_LOG_MAX_SPEED=10000000`
* Run this command `docker buildx create --name localremote_builder --append --node pi --platform linux/arm/v7,linux/arm/v8 ssh://USER@HOST --driver-opt env.BUILDKIT_STEP_LOG_MAX_SIZE=10000000 --driver-opt env.BUILDKIT_STEP_LOG_MAX_SPEED=10000000`
* Confirm with `docker buildx ls`
* Use the context `docker buildx use localremote_builder`

To build
```shell
docker buildx build --push --platform linux/arm64/v8,linux/amd64,linux/s390x,linux/arm/v7,linux/arm/v8 --tag ralphv/simple-node-express:latest .
```

To fix raspberry pi 4 problems building
https://blog.samcater.com/fix-workaround-rpi4-docker-libseccomp2-docker-20/