## Request

<code>PUT</code> /storage/user/theme

## Description

Update specific theme.

## Data params

> \* : required

```JSON
{
  *"user": {
    *"id": "String",
    *"email": "String"
  },
  *"theme": {
    *"id": "String",
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
