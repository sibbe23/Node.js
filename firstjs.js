// const arr = ['apple', 'orange', '', 'mango', '','','lemon'];


// console.log(arr.map(fruit => fruit === '' ? 'empty_string' : fruit));


// const http = require('http');

// const hostname = 'localhost';
// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.end('Ram');
// });

// server.listen(port, hostname, () => {
//   console.log('Ram');
// });

const http = require('http');
const server = http.createServer((req,res)=>{
const url = req.url;
if(url==='/')
{
  res.write('<html>')
res.write('<head><title>Enter Message</title></head>')
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
res.write('</html>')
return res.end();
}
else if(url==='/home')
{
  res.write('<html>')
res.write('<head><title>Home</title></head>')
res.write('<body>Welcome Home</body>')
res.write('</html>')
return res.end();
}
else if(url==='/about')
{
  res.write('<html>')
res.write('<head><title>About</title></head>')
res.write('<body>Welcome to About Us page</body>')
res.write('</html>')
return res.end();
}
else if(url==='/node')
// console.log(req.url, req.method,req.headers)
{
res.setHeader('Content-Type', 'text/html')
res.write('<html>')
res.write('<head><title>My First Project</title></head>')
res.write(`<body><h1>Welcome to my Node Js project</h1></body>`)
res.write('</html>')
res.end();
}

  res.write('<html>')
res.write('<head><title>Error</title></head>')
res.write(`<body><h1>Page not Found</h1></body>`)
res.write('</html>')
res.end();

})


server.listen(4000)