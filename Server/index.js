const http = require('http');

const PORT = process.env.PORT || 3000;

const requestListener = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  const name = process.env.NAME || 'Akshatha Hebbar';
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>A simple HTML document</title>
  	<style>
      .text {
        color: red;
      }
  </style>
</head>
<body>
    <p class="text">Hello ${name}!<p>
</body>
</html>`)
}

const server = http.createServer(requestListener)

server.listen(PORT, () => {
  console.log(`Server is Running on http//:localhost:${PORT}`)
})

