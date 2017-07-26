/**
 * Chat web con NodeJS, Express y Socket.io
 * @author Antonio Paya Gonzalez
 */

//LIBRERIAS
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//USAR LOS HTML ESTÁTICOS DE LA CARPETA CLIENT
app.use(express.static('client'));

//MOSTRAR CONTENIDO
app.get('/hola', function(req,res){
	res.status(200).send('Hola mundo desde una ruta');
});

//ESCUCHAR PUERTO 8080
server.listen(8080, function() {
	console.log('El Servidor está funcionando en http://localhost:8080');
});

//MANDAR MENSAJE POR DEFECTO DEL SOCKET AL CLIENTE
var mensajes = [{
	id: 1,
	text: "Bienvenido al chat privado de Antonio Payá",
	nickname: "Bot - antoniopg.esy.es"
}];

//CONEXIÓN AL SOCKET
io.on('connection',function(socket){
	console.log("El nodo con IP: "+socket.handshake.address+" se ha conectado.");
	socket.emit('mensajes',mensajes);
});

