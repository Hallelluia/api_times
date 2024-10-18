import { sql } from './db.js'

sql`
  CREATE TABLE times (
      id text PRIMARY KEY,
      nome character varying(255),
      ano INT,
      cor character varying(255)
  );
`.then(() => {
  console.log('Tabela funcionando.');
})