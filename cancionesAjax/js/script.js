// Interfaz requerida para realizar peticiones Ajax al servidor.
let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('destino');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			capa.innerHTML = ajax.responseText;
		}
		else {
			capa.innerHTML = "Error AJAX";
		}
	}
}

function peticionAjax(rutaUrl) {
	ajax.open("GET", rutaUrl);
    ajax.send();
}