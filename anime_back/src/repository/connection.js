// importando a funcionalidade do MYSQL, trabalhar com as promises
import mysql from 'mysql2/promise';

async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
  });

  return connection;
};

export default { connect };