
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseTimes } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabaseTimes;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/times', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createTime(body);
    return reply.status(201).send();
})


// REATE
server.get('/times', async () => {
    const times = await databasePostgres.listTimes();
    return times;
});

// UPDATE
server.put('/times/:id', async (request, reply) => {
    const timeID = request.params.id;
    const body = request.body;
    await databasePostgres.updateTime(timeID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/times/:id', async (request, reply) => {
    const timeID = request.params.id;
    await databasePostgres.deleteTime(timeID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
