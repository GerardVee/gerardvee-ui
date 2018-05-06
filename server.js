require('dotenv/config');
const express = require('express');
const next = require('next');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');

const secret = process.env.COOKIE_SECRET;
const port = process.env.PORT_ADDR;
const base = process.env.HOST;
const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() =>
{
    const server = express();
    server.use(cookie(secret));
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(session(
        {
            resave: false,
            saveUninitialized: false,
            secret: secret
        }
    ));

    server.get('*', (req, res) =>
    {
        handle(req, res);
    });

    server.listen(port);
});