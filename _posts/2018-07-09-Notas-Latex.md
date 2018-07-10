---
layout: post
title:  "Notas sobre LATEX"
date:   2018-07-09 03:17:30 -0500
categories: jekyll update	
image:
   feature: 2018/conceptos-basicos-redux.jpg
---
## ¿Qué es LaTeX?


## 0.- Comandos
Un comando en **LaTeX** inicia con el caracter `\` seguido por su nombre, por ejemplo `\document`. 
  - Tipos de comandos
    * **Sin argumento** - Por ejemplo: `\par`, `\bf`, `\alpha`, etc.       
    * **Con argumento** - 

LATEX tiene dos partes principales el **preámbulo**(ó **encabezado**) y el **cuerpo** del documento:

```tex
% 1. Preámbulo 
\document[<opciones>]{<clase>}

% Configuración y paquetes
\usepackage[<opciones>]{<paquete1>}
\usepackage[<opciones>]{<paquete2>}
...


% 2. Cuerpo
\begin{document}
% acá va el cuerpo
\end{document}
```
## 1. Preámbulo
Acá se encuentra toda la configuración y la inclusión de paquetes para el documento.

Todo documento **LATEX** debe tener la siguiente linea al principio:
```tex
\document[<opciones>]{<clase>}
```
donde `opciones` son parametros que nos permiten modificar el aspecto del texo y `clase` se refiere al estilo de documento que se quiere usar.

*(Opcional)* También se pueden incluir paquetes adicionales con la siguiente sentencia:
```tex
\usepackage[<opciones>]{<paquete>}
```







