require("dotenv").config()
const serviceUser = require("../service/user")
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

function authMiddleware(role){
  return(req, res, next) => {
    const token = req.headers["authorization"]

    if(!token){
      res.status(400).send({ msg: "Token inválido ou não fornecido" })
      return
    }

    jwt.verify(token, secretKey, async (err, decoded) => {
      if(err){
        res.status(400).send({ msg: "Token inválido ou não fornecido" })
        return
      }
        const verify = await serviceUser.Verify(decoded.id, decoded.role)

        if(!verify || (role && !role.includes(decoded.role) )){
          res.status(401).send({ msg: "Permissão negada - Sem permissão" })
          return
        }

        req.session = decoded;
        next()
    })

  }
}

module.exports = authMiddleware;