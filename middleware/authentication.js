//Author@Soham Kansodaria(B00865680)
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");
let userType = '';
verifyRequest = async (request, response, next) => {
  try {
    let token = request.headers["access-token"];
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return response.status(401).send({ message: "Unauthorized to do the request!" });
        } else {
          console.log(decoded);
          User.findOne({_id:decoded.id}).exec().then((response) => {
            console.log(response);
            if(response){
              userType = response.profile;
              next();
            }else{
              return response.status(401).send({ message: "Unauthorized to do the request!" });
            }
          });
        }
      });
    } else {
      return response.status(403).send({ message: "No token provided!" });
    }
  } catch (error) {
    console.log(error);
    response.status(404).json({ message: "Invalid access token" });
  }
};
checkAdmin = (req, res, next) => {
  if(userType === 'admin'){
    next();
  }
  else{
    return response.status(401).send({ message: "Unauthorized to do the request you need admin access!" });
  }
};
const authJwt = {
  verifyRequest,
  checkAdmin,
};
module.exports = authJwt;
