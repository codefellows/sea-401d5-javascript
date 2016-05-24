


# Get and Set Model data

## /api GET
http://localhost:3000/api

### model has data
```{"name": "node3"}```

### model has no data
```{"msg": "No model"}```

## /api POST  
### good json
-i give header info
curl localhost:3000/api -X POST -d '{"name":"node3"}' -i
```{"msg":"invalid json"}```

### bad json
curl localhost:3000/api -X POST -d '{"name":"node3}' -i
```{"msg":"invalid json"}```

### no json
curl localhost:3000/api -X POST  -i
```{"msg":"invalid json"}```


# Get static file

## good file
http://localhost:3000/api/files/test.html
# Static Hello

## bad file name or no filename
http://localhost:3000/api/files
http://localhost:3000/api/files/index.html

```{"msg": "Could not locate static file"}```

# Write data to a file

curl localhost:3000/api/files/index.html -X POST -d ```"<p>Hello Index</p"```

```{"msg":"successfully stored"}```
