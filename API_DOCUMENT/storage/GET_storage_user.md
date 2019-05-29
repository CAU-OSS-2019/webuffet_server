## Request

<code>GET</code> /storage/user

## Description

Load all themes of the user.

## Request body

> \* : required

```JSON
{
  *"auth": {
    *"id": "String",
    *"email": "String"
  }
}
```

## Success response

All theme list

```JSON
{
  "err": false,
  "themes": [
   {
     "id": "String",
     "url": "String",
     "style_data": "Nested JSON",
     "title": "String",
     "edited_date": "Date",
     "thumbnail": "String"
   },
   .
   .
   .
  ]
}
```

## Error response

```JSON
{
  "err": true,
  "msg": "String"
}
```
