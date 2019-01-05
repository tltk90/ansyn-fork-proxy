const express = require('express')
const app = express()
const proxy = require('express-http-proxy')
const { port, proxyPorts, domain } = require('./config')

app.use((req, res) => {
  const { host } = req.headers
  const port = proxyPorts[host]
  if (port) {
    return proxy(`${domain}:${port}`)(req, res)
  }
  res.status(500)
  res.send('Cant find ', host);
})

app.listen(port, () => {
  console.log(`Available on http://localhost:${port}`)
})