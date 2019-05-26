## Request

<code>PUT</code> /storage/:user_id/:theme_id

## Description

Update specific theme.

## Data params

> \* : required

```JSON
{
  *"auth": {
    *"id": "String",
    *"email": "String"
  },
  *"theme": {
    "url": "String",
    "style_data": "Nested JSON",
    "title": "String"
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
