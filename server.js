require('dotenv/config');
const express = require('express');
const next = require('next');
const cors = require('cors');
const path = require('path');
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

    server.set('views', './static');

    server.get('/projects/piclife/user/:id', (req, res) =>
        app.render(req, res, '/projects/piclife/user', { id: req.params.id })
    );

    server.get('/projects/delano-farms', (req, res) =>
        res.render('delano-farms')
    );

    server.get('*', (req, res) =>
    {
        handle(req, res);
    });

    server.listen(port);
});