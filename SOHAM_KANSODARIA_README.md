# Assignment - 3

 For this assignment, I have developed backend for the User Management and in that I done various tasks like signup, signin, edit profile, delete profile, forgot password and also done middleware with authentication with JWT token.

* *Date Created*: 15 JUL 2022
* *Last Modification Date*: 15 JUL 2022
* *Application Frontend URL*: <https://sportify-prd.herokuapp.com/>
* *Application Backend URL*: <https://sportify-backend-prd.herokuapp.com/>

* *Group URLs*
* *Frontend Git URL*: <https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main>
* *Backend Git URL* <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/main>

* *Individual Backend Git URL*: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/soham_kansodaria>

## Authors

* [Soham Kansodaria](sh788512@dal.ca)


# Feature Developed
## User Management
This feature provides users to register, login and edit their profile details, reset password.
## Tasks
* Register user with form validation and also existing user check.
* Login user with form validation and other backend check like password and email check.
* Edit the profile details except email with authentication of jwt token in backend.
* Delete the profile.
* Reset the password with current password match if user enters same password as previous then see them notification

### Admin Credentails
* Email: sportify5709@gmail.com
* Password: asd@1234A

## Built With

* [Mongoose](https://mongoosejs.com/) - This tool helped me most to connect with mongoDB and also it helps to create model which directly connected to collection in mongoDB. It provides many methods to do operation in mongoDB.
* [Express](https://expressjs.com/) - I used this to do routing in api and also provide authentication.
* [NodeJS](https://nodejs.org/en/) - I used this for writing the backend code.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - I used this library to generate the secret token which contents information we provided. So, I used it for to generate token which sending in the frontend and backend.
* [nodemailer](https://www.npmjs.com/package/nodemailer) - This tool I used for sending verification mail to verify account and reset password.

# Folder structure and Files Developed

## Backend folder structure
As I learn from tutorial and class I implemented the backend code with middleware authentication for request: 
* **middleware:** In this part I done authentication for the filtered request which will be check for authorization of user and admin and also they are logged in or not. I used to hidden the id and email in jwt token and decode it later to verify.
* **controllers:** It contains the logic of CRUD operation for user management like create user, update user, delete user.
* **models:** It includes the model which refers to the user collection of mongoDB.
* **routes:** It contains which type of method is there and also add authorization before the request if needed.


### **Backend codebase**
In the backend code I written below mentioned files In all files I comment the code:
* [middleware/authentication.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/middleware/authentication.js)
* [controllers/user.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/controllers/user.js)
* [routes/user.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/routes/user.js)
* [models/user.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/models/user.js)
* [service/mail.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/service/mail.js)


## Sources Used

* https://www.bezkoder.com/node-js-mongodb-auth-jwt/ - This I referred to how to add authentication and middleware for backend requests. Used in middleware/authentication.js
* https://www.geeksforgeeks.org/jwt-authentication-with-node-js/ - This I referred for how to create token and decode it.
* https://expressjs.com/en/guide/routing.html  - This I refered for creation of router and other authentication things.
* https://mongoosejs.com/docs/guide.html - This I used for mongoDB operations.





