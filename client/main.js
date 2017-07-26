//CON LOCALHOST
//var socket = io.connect('http://localhost:8080',{'forceNew':true});

//CON UNA IP
var socket = io.connect('http://192.168.1.105:8080',{'forceNew':true});

//RECIBIR MENSAJES DEL SOCKET
socket.on('mensajes', function(data) {
	console.log(data);
	render(data);
});

//MOSTRAR LOS MENSAJES EN EL HTML
function render(data) {
	var html = data.map(function(mensaje,i){
		return (`
			<div class="mensaje">
				<strong>${mensaje.nickname}</strong> dice:
				<p>${mensaje.text}</p>
			</div>
		`);
	}).join(' ');

	document.getElementById('mensajes').innerHTML = html;
}