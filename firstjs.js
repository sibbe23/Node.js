// const arr = ['apple', 'orange', '', 'mango', '','','lemon'];


// console.log(arr.map(fruit => fruit === '' ? 'empty_string' : fruit));


const http = require('http');

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
  res.end('Ram');
});

server.listen(port, hostname, () => {
  console.log('Ram');
});