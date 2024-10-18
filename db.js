import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGTIMES, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGTIMES,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };