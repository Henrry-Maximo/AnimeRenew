import database from "../repository/connection.js";

async function insertUser(usuario, email, password) {
  const conn = await database.connect(); //responsavel por abrir a conexão com o banco de dados com a api

  const sql =
    "INSERT INTO tbl_usuario(email, senha, nome_usuario) VALUES(?,?,?);";
  const dataUser = [email, password, usuario];

  await conn.query(sql, dataUser); //Nesta linha utilizamos o comando .query para executar a ação dentro do banco de dados. Neça devemos passar a variável referente ao SQL a ser executado e a variavel referente aos dados que serão substituidos no lugar das "?"

  conn.end();
}

//async function updateUser() {};

async function findUser() {
  // conexão com o banco de dados
  const conn = await database.connect();

  // comando que será aplicado ao banco
  const sql = "SELECT * FROM tbl_usuario";

  // dizendo o banco e o comando que será executado
  // armazenar os dados em rows, e auxiliar na chamada dos dados
  const [rows] = await conn.query(sql);

  conn.end();

  // Quem chamar a função, receberá os dados
  return rows;
}

async function updateUser(email, password, userName, idUser) {
  const conn = await database.connect();
  const sql = "UPDATE tbl_usuario SET email = ?, senha = ?, nome_usuario = ? WHERE id_usuario = ?";

  const dataUser = [email, password, userName, idUser];

  await conn.query(sql, dataUser);

  conn.end();
  return;
}

async function deleteUser(idUser) {
  const conn = await database.connect();
  const sql = 'DELETE FROM tbl_usuario WHERE id_usuario = ?';
  //const dataUser = [idUser];
  await conn.query(sql, idUser);
  conn.end();
  return;
}

export default { insertUser, findUser, updateUser, deleteUser };
