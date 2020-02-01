const express = require('express');
const bodyparser = require('body-parser');
const log = require('./common/logger');

const DB = require('./db/db_conn');

async function main() {
    const app = express();
    app.use(bodyparser.json());
    let apiRouter = express.Router();

    let dbConn = await DB.getDBConn();

    app.use('/app', express.static('build/static'));
    app.use('/api', apiRouter);
    
    log.info("starting server");
    app.listen(8080);
}

main();
