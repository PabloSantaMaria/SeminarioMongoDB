# Seminario MongoDB

Pablo Santa María
TUDAI - UNICEN - 2020

## Actividad 1

1. Instalar MongoDB en ambiente local.
2. Conectarse a MongoDB vía CLI.

        mongo

3. Crear una nueva base de datos.

        use lists

4. Crear una nueva collection.

        db.createCollection("grocery")

5. Insertar 5 documentos en la collection con datos básicos.

        db.grocery.insert({name: "milk", qty: 5, unit: "L", createdAt: new Date()})
        db.grocery.insert({name: "apples", qty: 1, unit: "kg", createdAt: new Date()})
        db.grocery.insert({name: "sugar", qty: 1, unit: "kg", createdAt: new Date()})
        db.grocery.insert({name: "eggs", qty: 12, unit: "u", createdAt: new Date()})
        db.grocery.insert({name: "coffee", qty: 250, unit: "g", createdAt: new Date()})

6. Listar todos los documentos de la collection.

        db.grocery.find()

7. Crear otras collections con documentos.

        db.createCollection("todo")
        db.todo.insert({desc: "go to grocery store", priority: 3, createdAt: new Date()})
        db.todo.insert({desc: "pay bills", priority: 1, createdAt: new Date()})
        db.todo.insert({desc: "call dentist", priority: 2, createdAt: new Date()})

## Actividad 2

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

        use Netflix
        db.createCollection("movies")

2. Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).
3. Agregar películas usando insert(), insertOne() & insertMany().

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

4. Actualizar películas agregando el field highlighted = true a aquellas con rating > 4.5.

        db.movies.updateMany(
            {rating: {$gt: 4.5}},
            {$set: {highlighted: true}}
        )
