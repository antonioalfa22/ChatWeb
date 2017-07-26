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

	var div_mensajes = document.getElementById('mensajes');
	div_mensajes.innerHTML = html;
	div_mensajes.scrollTop = div_mensajes.scrollHeigth;
}

//MONSTRAR MENSAJES QUE MANDA EL CLIENTE EN EL CHAT
function addMensaje(e) {
	var mensaje = {
		nickname: document.getElementById('nickname').value,
		text: document.getElementById('texto').value
	}
	nickname: document.getElementById('nickname').style.display = 'none'; //Para no cambiar el nombre de usuario despues
	socket.emit('add-mensaje',mensaje);
	return false;
}