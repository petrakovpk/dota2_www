import { parse } from 'url'
import http from 'http'
import https from 'https';
import fs from 'fs';
import next from 'next'

const httpPort = parseInt(process.env.HTTP_PORT || '3000', 10);

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  http.createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(httpPort, () => {
    console.log(`> HTTP server listening on https://localhost:${httpPort}`);
  });
});