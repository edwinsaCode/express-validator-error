import dotenv from "dotenv";
import { Sequelize } from "sequelize";
// import mysql from "mysql2";

dotenv.config();
const db = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    dialect: "mysql",
    define: {
      freezeTableName: true,
    },
    logging: false,
  }
);

// const db = mysql.createConnection({
//   host: process.env.DB_HOST!,
//   user: process.env.DB_USER!,
//   password: process.env.DB_PASSWORD!,
//   database: process.env.DB_NAME!,
//   port: parseInt(process.env.DB_PORT!),
// });

export default db;
