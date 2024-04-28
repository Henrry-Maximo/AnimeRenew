// comunicação entre a Service e o BD (Connection)
import database from "../repository/connection.js";

async function login(email, senha) {
  const conn = await database.connect();

  const sql =
    "SELECT email, senha FROM tbl_usuario WHERE email = ? AND senha = ?;";

  const dataLogin = [email, senha];

  const [rows] = await conn.query(sql, dataLogin);

  conn.end();

  return rows;
}

export default { login };
