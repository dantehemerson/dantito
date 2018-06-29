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

### Reducer
Un reducer es una función que se encarga de transformar el estado(`store`) actual a un nuevo estado.
El prototipo de la función es el siguiente:
```javascript
function myReducer(state, action) {
   ...
   // Acá se modifica el estado de acuerdo a la accion(`action`) que recibamos
   ...
   return newState
}
```



