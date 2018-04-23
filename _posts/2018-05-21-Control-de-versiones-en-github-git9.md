---
layout: post
title:  "Ada Lovelace: La mujer que creo el primer lenguaje de programacion"
subtitle: "Como usar el verdadero poder de Github-gist con su control de versiones"
date:   2018-04-21 08:20:33
categories: github

feature: 'https://i2-prod.mirror.co.uk/incoming/article6988517.ece/ALTERNATES/s615/main-ada.jpg'
---

Hay veces en las cuales tenemos ciertos pedazos de codigo que nos gustaria guardar en [Github](https://www.github.com "Github"), pero no nos gusta la idea de crear un nuevo repositorio.
GithubGist [GithubGist](https://gist.github.com/ "
Github gist") nos permite hacer eso, podemos llevar el control de version de un codigo (o archivo).

## Syntaxis de github
<script src="https://gist.github.com/dantehemerson/a405d340be6becd8696f4a4d49e2fb1f.js"></script>

### Mi sintaxys


```javascript
'use strict';

// No quiero ser un estorbo remix
function holaMundo() {
	console.log("Hola Mundo");
}


const http = require('http'),
	options = {
		host : 'dantecalderon.com',
		port : 80,
		path : '/blog'
	};

let htmlCode = '';

function httpClient(res) {
	console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`);
	res.on('data', data => {
		htmlCode += data;
		console.log( data, data.toString() );
	});
}

function httpError(err) {
	console.log(`El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`);
}

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end(htmlCode);
}

//instancia cliente de HTTP
http
	.get(options, httpClient)
	.on('error', httpError);

//instancia servidor de HTTP
http
	.createServer(webServer)
	.listen( 3000, 'localhost', () => console.log('Servidor %% corriendo en http://localhost:3000/') );
```


