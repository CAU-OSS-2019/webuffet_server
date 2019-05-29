## Request

<code>POST</code> /storage/user/thumbnail

## Description

Upload theme thumbnail image using imgur API and return image url.

## Request headers

> \* : required

```JSON
{
  *"Content-Type": "multipart/form-data; boundary=<yourboundary>"
}
```

## Request body

> \* : required

```JSON
{
  *"thumbnail": "image file"
}
```

## Success response

Uploaded image url

```JSON
{
  "err": false,
  "url": "String"
}
```

## Error response

```JSON
{
  "err": true,
  "msg": "String"
}
```
