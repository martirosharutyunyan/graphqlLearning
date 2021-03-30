import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import { buildSchema } from 'graphql';
import cors from 'cors';
import { client } from './schema/postgres';
import  { graphqlHTTP, } from 'express-graphql';
const port = process.env.port;
import { schema } from './schema/schema';
// import { schema } from './schema/shcema2';

const app = express();

client.connect((err:Error):void=>{
    if(err) throw err
    console.log('postgresDB connected')
})

app.use(cors())
app.use(morgan(`dev`));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true,
}))


app.listen(port,()=> console.log(`server running on http://localhost:${port}`))
console.log(`http://localhost:${port}/graphql`)





























