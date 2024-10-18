import { sql } from './db.js';

export class DatabaseTime {
    async createTime(time) {
        const id = time.id();
        const nome = time.nome;
        const ano = time.ano;
        const cor = time.cor;

        await sql`insert into time (id, nome, ano, cor)
        values (${id}, ${nome}, ${ano}, ${cor}`
    }

    async listTime() {

    }
  
    async updateTime(id, time) {
       
    }
  
    async deleteTime(id) {
       
    }
}