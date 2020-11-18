# Trabajo Final

Se desarrolló una Rest API utilizando Node.js y MongoDB, además de una interfaz cliente para acceder a la misma con React.js.
La base de datos se hostea en [MongoDB Atlas (Cloud)](https://www.mongodb.com/cloud/atlas) y la api y app en [Heroku](https://www.heroku.com).

Se usaron los siguientes frameworks/librerías:

- [Express.js](https://expressjs.com/) 4.17.1
- [Mongoose](https://mongoosejs.com/) 5.10.15
- [ReactAdmin](https://marmelab.com/react-admin/) 3.10.0

Se modeló una base de datos llamada *Concesionaria*, con dos colecciones de documentos: *modelos* y *marcas*. Cada *modelo* posee las propiedades de un auto a la venta, como año, precio, *marca*, etc.

**Endpoints RESTful API:**

- GET todos los modelos https://api-concesionaria.herokuapp.com/modelos
- GET un modelo específico https://api-concesionaria.herokuapp.com/modelos/123
- POST nuevo modelo https://api-concesionaria.herokuapp.com/modelos
- PUT actualizar un modelo https://api-concesionaria.herokuapp.com/modelos/123
- DELETE un modelo https://api-concesionaria.herokuapp.com/modelos/123
- GET todas las marcas https://api-concesionaria.herokuapp.com/marcas
- GET una marca específica https://api-concesionaria.herokuapp.com/marcas/123
- POST nueva marca https://api-concesionaria.herokuapp.com/marcas
- PUT actualizar una marca https://api-concesionaria.herokuapp.com/marcas/123
- DELETE una marca https://api-concesionaria.herokuapp.com/marcas/123

**Cliente:**

https://client-concesionaria.herokuapp.com/

**Código fuente:**
- [API](concesionaria-api)
- [Cliente](concesionaria-client)