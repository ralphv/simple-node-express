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

### To push
```shell
docker push ralphv/simple-node-express:latest
```

To build on Windows
```shell
docker buildx build \
--push \
--platform linux/arm64/v8,linux/amd64,linux/s390x \
--tag ralphv/simple-node-express:latest .
```

To build on raspberry pi 4
```shell
sudo docker buildx build --push --platform linux/arm/v7,linux/arm/v8 --tag ralphv/simple-node-express:latest .
```

To fix raspberry pi 4 problems building
https://blog.samcater.com/fix-workaround-rpi4-docker-libseccomp2-docker-20/