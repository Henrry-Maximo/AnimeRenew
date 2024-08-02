import jwt from "jsonwebtoken";

function verifyJWT(req, res, next) {
  const secret = "ryotinholindo123@";

  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ message: "Token não informado." });

  const parts = authHeader.split("");
  if (parts.lenght !== 2)
    return res.status(401).send({ message: "Toke inválido!" });

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Token inválido!" });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Usuário não autenticado!" });
    }
    req.inforUser = decoded.inforUser;
    return next();
  });
}

export { verifyJWT };
