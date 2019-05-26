## Request

<code>DELETE</code> /storage/:user_id/:theme_id

## Description

Delete specific theme.

## Data params

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
