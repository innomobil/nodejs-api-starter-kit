import jwt from 'jsonwebtoken';
import config from '../config/auth.config';
import roles from './roles';


verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }

    req.UserID = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  let token = req.headers["x-access-token"];

  jwt.verify(token, config.secret, (err, decoded) => {
    console.log(decoded)
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    
    // User.findByPk(decoded.id).then(user => {
    //   if (user.dataValues.UserType === 0) {
    //     next();
    //     return;
    //   }
    //   res.status(403)
    //     .send({
    //       message: "Require Admin Role!"
    //     });
    // });
  });
};


const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

module.exports = authJwt;
