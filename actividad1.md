# Actividad 1

[:arrow_backward: volver al index](./README.md)

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

    [:arrow_double_up: top](#actividad-1)
