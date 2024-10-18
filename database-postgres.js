import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabaseTimes {
  async listTimes() {
    const times = await sql`select * from times`;
    return times;
  }

  async createTime(times) {
    const id = randomUUID();
    console.log('id', id);
    const nome = times.nome;
    const ano = times.ano;
    const cor = times.cor;

    await sql`insert into times (id, nome, ano, cor)
    values (${id}, ${nome}, ${ano}, ${cor})`
  }

  async updateTime(id, times) {
    const nome = times.nome;
    const ano = times.ano;
    const cor = times.cor;

    await sql`update times set 
        nome = ${nome},
        ano = ${ano},
        cor = ${cor}
        where id = ${id}
    `;
  }

  async deleteTime(id) {
    await sql`delete from times where id = ${id}`
  }
}
