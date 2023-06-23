# Contact API Spec

## Create Contact API

Endpoint :  POST /api/contacts 

Headers : 
- Authorization : token

Request Body : 
```json
    {
        "first_name" : "rick",
        "last_name" : "tahasia",
        "email" : "rick pzn",
        "phone" : "12345677"
    }

```

Response Body Success :

```json

    {
        "data" :  {
                "id" : 1,
                "first_name" : "rick",
                "last_name" : "tahasia",
                "email" : "rick pzn",
                "phone" : "12345677"
            },

    }
```

Response Body Error :

```json

    {
        "errors" : "email is not valid format"

    }
```

 
## Update Contact API

Endpoint :  PUT /api/contacts/:id 

Headers : 
- Authorization : token

Request Body : 
```json
    {
        "first_name" : "rick",
        "last_name" : "tahasia",
        "email" : "rick pzn",
        "phone" : "12345677"
    }

```

Response Body Success :

```json

    {
        "data" :  {
                "id" : 1,
                "first_name" : "rick",
                "last_name" : "tahasia",
                "email" : "rick pzn",
                "phone" : "12345677"
            },

    }
```

Response Body Error :

```json

    {
        "errors" : "email is not valid format"

    }
```


## Search Contact API

Endpoint :  GET /api/contacts

Headers : 
- Authorization : token

Query params : 
- name : Search by first_name or last_name, using like ,optional 
- email : Search by email using like. optional
- phone : Search by phone using like. optional
- page : number of page, default 1,
- size : number of size, default 10


Response Body Success :

```json

    {
        "data" :  [
            {
                "id" : 1,
                "first_name" : "rick",
                "last_name" : "tahasia",
                "email" : "rick pzn",
                "phone" : "12345677"
            },
            {
                "id" : 2,
                "first_name" : "rick",
                "last_name" : "tahasia",
                "email" : "rick pzn",
                "phone" : "12345677"
            },
        ],
        "paging" : {
            "page" : 1,
            "total_page" : 3,
            "total_item" : 30
        }

    }
```

Response Body Error :

```json

    {
        "errors" : "contact is not found"

    }
```

## Remove Contact API

Endpoint :  DELETE /api/contacts/:contactId

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
        "errors" : "contact is not found"

    }
```