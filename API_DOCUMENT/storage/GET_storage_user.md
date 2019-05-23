## Request

<code>GET</code> /storage/user

## Description

Load all themes of the user.

## Data params

> \* : required

```JSON
{
  *"user": {
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
     "edited_date": "Date"
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
