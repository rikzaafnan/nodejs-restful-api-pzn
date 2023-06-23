# User API Spec

## Register User API

Endpoint :  POST /api/users 

Request Body : 
```json
    {
        "username" : "rick",
        "password" : "tahasia",
        "name" : "rick pzn"
    }

```

Response Body Success :

```json

    {
        "data" : {
            "username" : "rick",
            "name" : "rick pzn"
        },

    }
```

Response Body Error :

```json

    {
        "errors" : "username already registered"

    }
```

 
## Login User API

Endpoint :  POST /api/users/login 

Request Body : 
```json
    {
        "username" : "rick",
        "password" : "tahasia",
    }

```

Response Body Success :

```json

    {
        "data" : {
            "token" : "unique-token"
        },

    }
```

Response Body Error :

```json

    {
        "errors" : "username or password wrong"

    }
```

## Update User API

Endpoint :  PATCH /api/users/current

Headers :
- Authorization token

Request Body : 
```json
    {
        "name" : "rick edit", //optional
        "password" : "new_password", //optional
    }

```

Response Body Success :

```json

    {
       "data" : {
            "username" : "rick",
            "name" : "rick pzn"
        },

    }
```

Response Body Error :

```json

    {
        "errors" : "name length max 100"

    }
```

## Get User API

Endpoint :  GET /api/users/current

Headers :
- Authorization token


Response Body Success :

```json

    {
       "data" : {
            "username" : "rick",
            "name" : "rick pzn"
        },

    }
```

Response Body Error :

```json

    {
        "errors" : "unauthorize"

    }
```

## Logout User API

Endpoint :  DELETE /api/users/current

Headers :
- Authorization token


Response Body Success :

```json

    {
       "data" : "oke"
    }
```

Response Body Error :

```json

    {
        "errors" : "unauthorize"

    }
```