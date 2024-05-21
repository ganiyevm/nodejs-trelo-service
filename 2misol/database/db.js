import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "1",
  host: "localhost",
  port: "5432",
  database: "lesson33",
});

const query = (text, params) => pool.query(text, params);

export default query;