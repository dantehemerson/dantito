---
layout: post
title:  "Conceptos Basicos de Redux"
date:   2018-06-29 03:17:30 -0500
categories: jekyll update	
image:
   feature: 2018/conceptos-basicos-redux.jpg
---

Redux es una pequeña librería de Javascript creada por Facebook que sirve para controlar el estado de una aplicación.
Esta basada en la arquitectura [Flux](https://facebook.github.io/flux/) de Facebook.
Redux es comunmente usado con [React](https://es.wikipedia.org/wiki/React), pero también puede usarse con [Angular](https://es.wikipedia.org/wiki/Angular_(framework)).

### Los tres principios de React

- #### Única fuente de verdad
El **estado** de toda tu aplicación esta almacenado en un único **store**.
- #### El estado de solo lectura
La **única forma** de modificar el estado es emitiendo una **acción**, un objeto describiendo que ocurrió.
Esto se hace a través de la función `dispatch()`.
- #### Los cambios se realizan con funciones puras
Para especificar como el árbol de estado es transformado por las acciones, se utilizan **reducers** puros.
Los reducers son funciones puras que toman el estado anterior y una acción, y devuelven un nuevo estado.

En Redux tenemos 4 conceptos principales:
* `reducers`
* `store`
* `actions`
* `action-creators`


### Acciones
Las acciónes es la información que enviamos al store, se envian a través de la función `dispatch(action)` del store.
De acuerdo a está información los reducers cambiarán el estádo de nuestra aplicación.

Básicamente es un objeto que contiene un **tipo**(`type`) y los **datos**, por ejemplo:
```javascript
let myAction = {
   // La acción, un identificador único(normalmente es una cadena descriptiva)
   type: 'ADD_USER',
   
   // Luego los datos que queremos enviar.
   user: {
      name: 'JK Rowling',
      age: 52,
      ...
   },
   typeUser: 'PREMIUM',
   ...
}
```
Finalmente enviamos la funcióń a través `dispatch(action)`:
```javascript
store.dipatch(myAction)
```
#### Creadores de acciónes
Los **creadores de acciónes** son funciónes que sirven justamente para crear acciónes, nos ayudan a estructurar y escribir menos código.

Siguiendo el ejemplo de arriba, crearemos una función para añadir usuarios.
```javascript
function addUser(name, age, typeUser, ...) {
   return {
      type: 'ADD_USER',
      user: {
         name,
         age
         ...
      },
      typeUser      
   }
}
```

Luego usando esta función podemos añadir usuarios.

```javascript
store.dispatch(addUser('JK Rowling', 52, 'PREMIUM'))
store.dispatch(addUser('Harry Potter', 12, 'PREMIUM'))
store.dispatch(addUser('Draco Malfoy', 12, 'BASIC'))
```
De esta manera nos ahorramos de escribir mucho codigo y nuestro codigo queda mas estructurado.


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




