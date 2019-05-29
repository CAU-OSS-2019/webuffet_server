## Request

<code>DELETE</code> /storage/user/theme

## Description

Delete specific theme.

## Request body

> \* : required

```JSON
{
  *"auth": {
    *"id": "String",
    *"email": "String"
  },
  *"theme_id": "String"
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
