const serviceUser = require("../service/user")
const jwt = require("jsonwebtoken");
const secretKey = "meuSegredoForte"

function authMiddleware(role){
  return(req, res, next) => {
    const token = req.headers["authorization"]
    console.log(token, role);

    if(!token){
      res.status(400).send({ msg: "Token inválido ou não fornecido" })
      console.log(token)
      return
    }

    jwt.verify(token, secretKey, async (err, decoded) => {
      if(err){
        console.error(err)
        res.status(400).send({ msg: "Token inválido ou não fornecido" })
        return
      }
        const verify = await serviceUser.Verify(decoded.id, decoded.role)

        if(!verify || (role && !role.includes(decoded.role) )){
          res.status(401).send({ msg: "Permissão negada - Sem permissão" })
          return
        }

        req.session = decoded;
        console.log(decoded);
        next()
    })

  }
}

module.exports = authMiddleware;