import { Client } from 'pg';

export const client = new Client({
    database:process.env.postgresDBname,
    password:process.env.postgresDBpassword,
    port:5432,
    host:'localhost',
    user:'postgres',
})