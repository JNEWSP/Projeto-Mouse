const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const puppeteer = require('./puppeteer');

app.use(express.static('public'));
app.use(express.static(__dirname + '/../mobile'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/mobile', (req, res) => {
  res.sendFile(__dirname + '/../mobile/index.html');
});

io.on('connection', (socket) => {
  console.log('Conectado ao cliente');

  socket.on('mouse_move', (data) => {
    console.log(`Movendo o mouse para a posição (${data.x}, ${data.y})`);
    puppeteer.moveMouse(data.x, data.y);
  });

  socket.on('mouse_click', (data) => {
    console.log(`Clicando no mouse`);
    puppeteer.clickMouse();
  });

  socket.on('mouse_scroll', (data) => {
    console.log(`Rolando o mouse`);
    puppeteer.scrollMouse(data.direction);
  });
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});