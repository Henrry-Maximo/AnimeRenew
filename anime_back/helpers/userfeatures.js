import jwt from "jsonwebtoken";

function generateToken(email, nome_usuario) {
  return jwt.sign({ infoUser: { email, userName: nome_usuario } }, secret, {
    expiresIn: 60 * 60 * 5,
  });
}

export { generateToken };
