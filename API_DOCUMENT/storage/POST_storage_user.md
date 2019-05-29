## Request

<code>POST</code> /storage/user

## Description

Save new theme of the user.

## Request body

> \* : required

```JSON
{
  *"auth": {
    *"id": "String",
    *"email": "String"
  },
  *"theme_url": "String"
}
```

## Success response

Created theme id

```JSON
{
  "err": false,
  "theme_id": "String"
}
```

## Error response

```JSON
{
  "err": true,
  "msg": "String"
}
```
