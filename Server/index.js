const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST_NAME = '127.0.0.1'

const requestListener = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const name = process.env.NAME || 'Akshatha Hebbar';
  res.end(`{"name": "${name}"}`)
}

const server = http.createServer(requestListener)

server.listen(PORT, HOST_NAME, () => {
  console.log(`Server is Running on http//:${HOST_NAME}:${PORT}`)
})

