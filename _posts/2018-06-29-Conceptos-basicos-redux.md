---
layout: post
title:  "Conceptos Basicos de Redux"
date:   2018-06-29 03:17:30 -0500
categories: jekyll update	
image:
   feature: 2018/conceptos-basicos-redux.jpg
---

Redux se basa en el concepto de **estado**, en Redux existe solo un estado para toda la aplicaci


[Section 1](#section-1)

En Redux tenemos 4 conceptos principales:
* `reducers`
* `store`
* `actions`
* `action-creators`


### Acciones
Las acciónes es la información que enviamos al store, se envian a travéz de la función `dispatch(action)` del store.
De acuerdo a está información los reducers cambiarán el estádo de nuestra aplicación.
Básicamente es un objeto que contiene un tipo(`type`) y los **datos**, por ejemplo:
```javascript
{
   // La acción, un identificador único(normalmente es una cadena descriptiva)
   type: 'ADD_USER',
   
   // Luego los datos que queremos enviar.
   user: {
      name: 'JK Rowling',
      age: 52,
      ...
   },
   userType: 'PREMIUM',
   ...
}
```


### Store
El **Store** donde se almacena todos los datos de nuestra aplicación y tiene las siguientes responsabilidades:
* Contiene el estado(`state`) de la aplicación, el estado es el `this.state` de un componente de React, acá se almacenará todos los datos de la aplicación y será único.
* Permite el acceso al estado via `getState()`.
* Permite que el estado sea actualizado via `dispatch(action)`.
* Registra los listeners via `subscribe(listener)`.
* Maneja la anulación del registro de los **listeners** via el retorno de la función de `subscribe(listener)`.

Para crear un **Store**, necesitamos la función `createStore` de redux y necesitamos almenos un `reducer` que se pasará como parámetro.
```javascript
import { createStore } from 'redux'
...
let store = createStore(reducers, initialState)
```
Como vemos, `createStore` recibe 2 parámetros:
   - **reducers**: El reducer(s) que se llamará cuando se quiera actualizar el estado.
   - **initialState** *(opcional)*: El estado inicial para el estado.

   


### Reducer
Un reducer es una [función pura](http://www.etnassoft.com/2016/06/21/las-funciones-puras-en-javascript-concepto-ejemplos-y-beneficios/) que se encarga de transformar el estado actual a un nuevo estado.
El prototipo de la función es el siguiente:
```javascript
function myReducer(state, action) {
   ...
   // Acá se modifica el estado de acuerdo a la accion(action) que recibamos
   ...
   return newState
}
```




