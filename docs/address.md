# Address API Spec

## Create Address API

Endpoint :  POST /api/contacts/:contactId/addresses 

Headers : 
- Authorization : token

Request Body : 
```json
    {
        "Street" : "jalan apa",
        "city" : "kota apa",
        "province" : "provinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos",
    }

```

Response Body Success :

```json

    {
        "data" :  {
                "id" : 1,
                "Street" : "jalan apa",
                "city" : "kota apa",
                "province" : "provinsi apa",
                "country" : "negara apa",
                "postal_code" : "kode pos",
            },

    }
```

Response Body Error :

```json

    {
        "errors" : "country is required"

    }
```

 
## Update Address API

Endpoint :  PUT /api/contacts/:contactId/addresses/:addressId

Headers : 
- Authorization : token

Request Body : 
```json
    {
        "Street" : "jalan apa",
        "city" : "kota apa",
        "province" : "provinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos",
    }


```

Response Body Success :

```json

    {
        "data" :  {
                "id" : 1,
                "Street" : "jalan apa",
                "city" : "kota apa",
                "province" : "provinsi apa",
                "country" : "negara apa",
                "postal_code" : "kode pos",
            },

    }
```

Response Body Error :

```json

    {
        "errors" : "email is not valid format"

    }
```

## GET Address API
Endpoint :  GET /api/contacts/:contactId/addresses/:addressId 

Headers : 
- Authorization : token


Response Body Success :

```json

    {
        "data" :  {
                "id" : 1,
                "Street" : "jalan apa",
                "city" : "kota apa",
                "province" : "provinsi apa",
                "country" : "negara apa",
                "postal_code" : "kode pos",
            },

    }
```

Response Body Error :

```json

    {
        "errors" : "contact is not found"

    }
```



## List Address API

Endpoint :  GET /api/contacts/:contactId/addresses

Headers : 
- Authorization : token



Response Body Success :

```json

    {
        "data" :  [
            {
                "id" : 1,
                "Street" : "jalan apa",
                "city" : "kota apa",
                "province" : "provinsi apa",
                "country" : "negara apa",
                "postal_code" : "kode pos",
            },
            {
                "id" : 2,
                "Street" : "jalan apa",
                "city" : "kota apa",
                "province" : "provinsi apa",
                "country" : "negara apa",
                "postal_code" : "kode pos",
            },
        ],

    }
```

Response Body Error :

```json

    {
        "errors" : "address is not found"

    }
```

## Remove Address API

Endpoint :  DELETE /api/contacts/:contactId/adressess/:addressId

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
        "errors" : "address is not found"

    }
```