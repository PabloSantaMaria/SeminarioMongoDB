# Seminario MongoDB

Pablo Santa María
TUDAI - UNICEN - 2020

## Actividad 1

1. Instalar MongoDB en ambiente local.
2. Conectarse a MongoDB vía CLI.

    ```js
    mongo
    ```

3. Crear una nueva base de datos.

    ```js
    use lists
    ```

4. Crear una nueva collection.

    ```js
    db.createCollection("grocerys")
    ```

5. Insertar 5 documentos en la collection con datos básicos.

    ```js
    db.grocery.insert({name: "milk", qty: 5, unit: "L", createdAt: new Date()})
    db.grocery.insert({name: "apples", qty: 1, unit: "kg", createdAt: new Date()})
    db.grocery.insert({name: "sugar", qty: 1, unit: "kg", createdAt: new Date()})
    db.grocery.insert({name: "eggs", qty: 12, unit: "u", createdAt: new Date()})
    db.grocery.insert({name: "coffee", qty: 250, unit: "g", createdAt: new Date()})
    ```

6. Listar todos los documentos de la collection.

    ```js
    db.grocery.find()
    ```

7. Crear otras collections con documentos.

    ```js
    db.createCollection("toDos")
    db.todo.insert({desc: "go to grocery store", priority: 3, createdAt: new Date()})
    db.todo.insert({desc: "pay bills", priority: 1, createdAt: new Date()})
    db.todo.insert({desc: "call dentist", priority: 2, createdAt: new Date()})
    ```

## Actividad 2

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

    ```js
    use Netflix
    db.createCollection("movies")
    ```

2. Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array\<String\>), country (String), income (Number), duration (Number).
3. Agregar películas usando insert(), insertOne() & insertMany().

    ```js
    db.movies.insert([
        {
            "titulo": "Forrest Gump",
            "year": 1994,
            "rating": 5.0,
            "genre": "Drama",
            "description": "The presidencies of Kennedy and Johnson...",
            "actors": ["Tom Hanks", "Sally Field"],
            "country": "USA",
            "income": 50456123,
            "duration": 142
        },
        {
            "titulo": "Hell or High Water",
            "year": 2016,
            "rating": 4.5,
            "genre": "Action",
            "description": "A divorced father and his ex-con older brother...",
            "actors": ["Ben Foster", "Chris Pine"],
            "country": "USA",
            "income": 16456123,
            "duration": 102
        }
    ])

    db.movies.insertOne({
        "titulo": "Lost in Translation",
        "year": 2003,
        "rating": 4.8,
        "genre": "Comedy",
        "description": "A faded movie star and a neglected young woman...",
        "actors": ["Scarlett Johansson", "Bill Murray"],
        "country": "USA",
        "income": 9456123,
        "duration": 102
    })

    db.movies.insertMany([
        {
            "titulo": "Goodfellas",
            "year": 1990,
            "rating": 4.8,
            "genre": "Crime",
            "description": "The story of Henry Hill and his life in the mob...",
            "actors": ["Ray Liotta", "Robert De Niro", "Joe Pesci"],
            "country": "USA",
            "income": 20456123,
            "duration": 146
        },
        {
            "titulo": "Close Encounters of the Third Kind",
            "year": 1977,
            "rating": 4.2,
            "genre": "Sci-Fi",
            "description": "Roy Neary, an electric lineman, watches how...",
            "actors": ["Richard Dreyfuss", "Teri Garr"],
            "country": "USA",
            "income": 18456123,
            "duration": 138
        }
    ])
    ```

4. Actualizar películas agregando el field highlighted = true a aquellas con rating > 4.5.

    ```js
    db.movies.updateMany(
        {rating: {$gt: 4.5}},
        {$set: {highlighted: true}}
    )
    ```

5. Actualizar películas cambiando el genre “drama” por “bored”.

    ```js
    db.movies.updateMany(
        { genre: "Drama" },
        { $set: { genre: "Bored"}}
    )
    ```

6. Borrar todas las películas que tengan más de 30 años.

    ```js
    db.movies.deleteMany({year: {$lt: 1990}})
    ```

7. Buscar todas las películas argentinas.

    ```js
    db.movies.find({country: "Argentina"})
    ```

8. Buscar todas las películas de acción con un buen rating (ej. > 4.0)
que hayan salido los últimos 2 años.

    ```js
    db.movies.find({
        genre: "Action",
        rating: {$gt: 4.0},
        year: {$gt: 2018}
    })
    ```

## Actividad 3

1. Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.
2. Listar todas las películas del año 2018.

    ```js
    db.movies.find({year: 2018})
    ```

3. Listar las 10 primeras películas de Hollywood.

    ```js
    db.movies.find({country: "USA"}).limit(10).sort({year: 1})
    ```

4. Listar las 5 películas más taquilleras.

    ```js
    db.movies.find().limit(5).sort({income: -1})
    ```

5. Listar el 2do conjunto de 5 películas más taquilleras.

    ```js
    db.movies.find()
    .skip(5)
    .limit(5)
    .sort({income: -1})
    ```

6. Repetir query 3 y 4 pero retornando sólo el título y genre.

    ```js
    db.movies.find({}, {titulo: 1, genre: 1, _id: 0})
    .skip(5)
    .limit(5)
    .sort({income: -1})

    db.movies.find({}, {titulo: 1, genre: 1, _id: 0})
    .limit(5)
    .sort({income: -1})
    ```

7. Mostrar los distintos países que existen en la base de datos.

    ```js
    db.movies.distinct("country")
    ```
