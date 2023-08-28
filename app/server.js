const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {hostname} = require("os");
const {logger, expressLogger} = require("./logger");
const {getHtml} = require("./json-to-html");

const app = new express();

// load middle-wear
app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressLogger);

// env variables
const serviceName = process.env["SERVICE_NAME"] || "N/A";
const port = parseInt(process.env["PORT"] || "8080");

// add a catch all
app.all(/.+/, (req, res) => {
    const response = {
        server: "simple-node-express",
        service: serviceName,
        time: new Date().toISOString(),
        hostname: hostname(),
        method: req.method,
        path: req.path,
    };
    if (req.body && Object.keys(req.body).length !== 0) {
        response.body = req.body;
    }
    if (req.query && Object.keys(req.query).length !== 0) {
        response.query = req.query;
    }
    if (req.headers['content-type'] === 'application/json') {
        res.send(response);

    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(getHtml(response));
        res.end();
    }
});

// start service
app.listen(port, (err) => {
    if (err) {
        logger.error(`Failed to start service \`${serviceName}\` on ${port} ⚡: ${err}`);
        return;
    }
    logger.info(`Listening for service \`${serviceName}\` on ${port} ⚡`);
});
