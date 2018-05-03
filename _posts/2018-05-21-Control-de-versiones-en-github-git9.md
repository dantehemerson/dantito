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


## Añdiendo gits con la gema jekyll-gist :+1: 
:smile: hola mundo :smile:
ahora quiesiera estar rn :pe: pero aora que tod termino no quiersie  aslfj slore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
:bowtie: quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure:sunglasses: dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


{% gist 29b80b217f269f6ad43a712d52fd595e %}