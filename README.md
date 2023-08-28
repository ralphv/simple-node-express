## Purpose

Use this simple image in your quick projects to create containers that respond to any path/url/method with some simple output.

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
docker push ralphv/simple-node-express:latest