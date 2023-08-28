const log4js = require("log4js");

const getLogger = (name) => {
    const l = log4js.getLogger(name);
    l.level = 'info';
    return l;
};

module.exports = {
    logger: getLogger("default"),
    expressLogger: log4js.connectLogger(getLogger("express"), {
        level: 'auto',
        format: (req, res, format) => format(`:method :url`),
    })
};