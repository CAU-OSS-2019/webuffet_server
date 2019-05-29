## Request

<code>PUT</code> /storage/user/theme

## Description

Update specific theme.

## Request body

> \* : required

```JSON
{
  *"auth": {
    *"id": "String",
    *"email": "String"
  },
  *"theme": {
    *"id": "String",
    "url": "String",
    "style_data": "Nested JSON",
    "title": "String",
    "thumbnail": "String"
  }
}
```

## Success response

```JSON
{
  "err": false
}
```

## Error response

```JSON
{
  "err": true,
  "msg": "String"
}
```
