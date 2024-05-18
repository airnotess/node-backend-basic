``` 
    npm init -y
```

```js
    npm install mongoose dotenv
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

status codes indicates whether a specific  HTTP request has been successfully completed or not
100 -> information responses
200 -> successful responses
300 -> redirection responses
400 -> client error 
500 -> server error


## Users Routes
create all the routes using database changes 
if not able to do please google it 

/signup 
/signin 
/delete
/changeName



## Syllabus for next class

2. middlewares,jsonwebtoken
3. authentication 
4. todo application


##  things to teach 

### authentication using jwt + localstorage 
7. explain about tokens 
8. explain about middlewares
9. what is cors , how to set cors 


## assignment
1. read about more stuff above
2. create a route that change users password ,
3. how you will create different types of users within same userschema
4. what is authentication / authorization
5. update user model add more details about user when signup , like address, phone number , country,state,etc

## frontend assignment

1. go through the codebase 
2. make changes to signup page as user details have changes
2. create profile page where user can see his details by getting his details from backend 
3. in profile page create a button which will help user to update his details ('http://localhost:5173/profile')
    - button will open up modal or redirect the user to update user form(same as signup for but will contain less input options)
    - create a button to change password
4. create a admin page where list of all users is seen ('http://localhost:5173/users')


