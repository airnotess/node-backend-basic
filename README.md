``` 
    npm init -y
```

to initialize an empty nodejs project
## different method types
app.use will parse a function as a middleware
/**
 * get - read data 
 * post - to create something 
 * update - put,patch , 
 * delete- deleting the data
 */

## different status codes

status codes are different values which client understand as different types of responses 


2XX good
3XX creating updating
4XX errors
5XX error internally


# Assignment

what is status code and what are different status code means??

status codes indicates whether a specific  HTTP request has been successfully completed or not
100 -> information responses
200 -> successful responses
300 -> redirection responses
400 -> client error 
500 -> server error


## Users Routes

/signup 
/signin 
/delete
/changeName


## Syllabus for next class

1. using real database 
2. middlewares , cors, jsonwebtoken
3. authentication 
4. todo application


##  things to teach 

1. what is mongodb 
2. how to connect to mongodb

```js
    npm install mongoose
```

3. what is schema
4. creating normal user schema
5. changing the routes to save the data on databases
6. adding password hashing
### authentication using jwt + localstorage 
7. explain about tokens
8. explain about middlewares
9. what is cors , how to set cors 