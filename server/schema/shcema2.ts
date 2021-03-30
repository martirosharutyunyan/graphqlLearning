import { query } from 'express';
import { buildSchema, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { client } from './postgres';


const users =async ():Promise<any> => {
    let promise = new Promise((res,rej)=>{
        client.query('SELECT * FROM users',(err:Error,data):void=>{
            if(err) throw err
            res(data.rows) 
        })
    })
    return await promise
}
users()


const userType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLID},
        email:{type:GraphQLString},
        name:{type:GraphQLString},
        surname:{type:GraphQLString},
        password:{type:GraphQLString},
    })
})

const Query = new GraphQLObjectType({
    name:'Query',
    fields:()=>({
        user:{
            type:userType,
            args:{email:{type:GraphQLString}},
            async resolve(parents,args){
                let data = await users()
                return data.find((elem:any)=>elem.email == args.email) 
            }
        },
        users:{
            type:new GraphQLList(userType),
            async resolve(parent,args){
                let data = await users()
                return data
            }
        }
    })
})

export const schema = new GraphQLSchema({
    query:Query,
})
