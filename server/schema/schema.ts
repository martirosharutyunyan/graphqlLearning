import { GraphQLString, GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList, GraphQLBoolean  } from 'graphql'

const movies = [
    {id:1,name:'film1',genre:'cinema1',directorId:1},
    {id:2,name:'film2',genre:'cinema2',directorId:2},
    {id:3,name:'film3',genre:'cinema3',directorId:3},
    {id:4,name:'film4',genre:'cinema4',directorId:4},
    {id:5,name:'film5',genre:'cinema5',directorId:4},
    {id:6,name:'film6',genre:'cinema6',directorId:2},
]

let directors:any = [
    {id:1,name:'director1',age:40},
    {id:2,name:'director2',age:56},
    {id:3,name:'director3',age:70},
    {id:4,name:'director4',age:80},
]

const MovieType = new GraphQLObjectType({
    name:'Movie',
    fields:()=> ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        director:{
            type:DirectorType,
            resolve(parents,args){
                return directors.find(director=>director.id == parents.id)
            }
        }
    }),
});



const DirectorType = new GraphQLObjectType({
    name:'Director',
    fields:()=> ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        movie:{
            type:MovieType,
            resolve(parents,args){
                return movies.find(elem => elem.id == parents.id)
            }
        }
    }),
});


const Query = new GraphQLObjectType({
    name:'Query',
    fields:()=>({
        movie:{
            type:MovieType,
            args:{id:{type:GraphQLID}},
            resolve(parents,args){
                return movies.find((elem:any)=>elem.id == args.id)
            }
        },
        director:{
            type:DirectorType,
            args:{id:{type:GraphQLID}},
            resolve(parents,args){
                return directors.find((elem:any)=>elem.id == args.id)
            }
        },
        movies:{
            type:new GraphQLList(MovieType),
            resolve(parents,args){
                return movies
            }
        },
        directors:{
            type:new GraphQLList(DirectorType),
            resolve(parents,args){
                return directors
            }
        },
    })
})

const Mutation = new GraphQLObjectType({
    name:'Mutations',
    fields:()=>({
        AddDirector:{
            type:GraphQLString,
            // type:DirectorType,
            args:{
                id:{type:GraphQLID},
                name:{type:GraphQLString},
                age:{type:GraphQLInt},
            },
            resolve(parents,args,){
                directors = [...directors,{id:args.id,name:args.name,age:args.age}]
                return 'ok'
            }
        }
    })
})

export const schema = new GraphQLSchema({
    query:Query,
    mutation:Mutation, 
});