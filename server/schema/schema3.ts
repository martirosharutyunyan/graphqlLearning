import {
    GraphQLInt as gInt,
    GraphQLString as gString,
    GraphQLID as gID,
    GraphQLBoolean as gBoolean,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} from "graphql";

// const userType = new gqlObjectType({
//     name:'',
//     fields:()=>({
//         id:{type:GraphQLID},
//     })
// })

// const Query = new gqlObjectType({
//     name:'Query',
//     fields:()=>({
//         user:{
//             type:userType,
//             // args:{}
//             async resolve(parents,args){
//                 return 
//             }
//         }
//     })
// })

// const Mutation = new gqlObjectType({
//     name:'Mutation',
//     fields:()=>({
//         AddUser:{
//             // args:{}
//             ...gString(),
//             async resolve(parents,args){
//                 return 'ok'
//             }
//         }
//     })
// })

// export const schema = new gqlSchema({
//     query:Query,
//     mutation:Mutation
// })
