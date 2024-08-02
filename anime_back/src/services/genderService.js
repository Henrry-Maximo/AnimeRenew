import database from "../repository/connection.js";

async function insertGender(gender) {
  const conn = await database.connect();
  const sql = "INSERT INTO tbl_genero(genero) VALUES(?);";
  const dataGender = [gender];

  await conn.query(sql, dataGender);

  conn.end();
}

async function findGender() {
  const conn = await database.connect();
  const sql = 'SELECT * FROM tbl_genero';
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

async function updataGender(id_genero, genero) {
  const conn = await database.connect();
  const sql = 'UPDATE tbl_genero SET genero = ? WHERE id_genero = ?';
  const dataGender = [id_genero, genero];
  await conn.query(sql, dataGender);
  conn.end();
  return;
}

async function deleteGender(idGender) {
  const conn = await database.connect();
  const sql = 'DELETE FROM tbl_genero WHERE id_genero = ?';
  //const dataUser = [idUser];
  await conn.query(sql, idGender);
  conn.end();
  return;
}

export default { insertGender, findGender, updataGender, deleteGender };
