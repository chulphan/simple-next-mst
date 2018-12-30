const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'

import { createServer } from 'http';
import { parse } from 'url';

import next from 'next';
const app = next({ dev })
const handle = app.getRequestHandler()

import { useStaticRendering } from 'mobx-react'
useStaticRendering(true)

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    })

    
    .listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
