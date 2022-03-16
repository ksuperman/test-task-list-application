const http = require('http');

const PORT = process.env.PORT || 3000;

const requestListener = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const name = process.env.NAME || 'Akshatha Hebbar';
  res.end(`{"name": "${name}"}`)
}

const server = http.createServer(requestListener)

server.listen(PORT, () => {
  console.log(`Server is Running on http//:localhost:${PORT}`)
})

