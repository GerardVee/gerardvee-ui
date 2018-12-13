require('dotenv/config');
const express = require('express');
const next = require('next');

const port = process.env.PORT_ADDR;
const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() =>
{
    const server = express();
    server.get('*', (req, res) =>
    {
        handle(req, res);
    });
    server.listen(port);
});