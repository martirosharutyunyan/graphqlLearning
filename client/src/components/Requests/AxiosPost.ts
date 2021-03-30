import axios, { AxiosResponse } from 'axios';
import { queryForGetFilm } from '../Graphql/queries';
import { request } from 'graphql-request'
export const post =async (data:any,string:string):Promise<any> => {
    let postToBack =await axios.post(`http://localhost:5001/graphql`,{query:data})
    return postToBack.data.data[`${string}`]
}

export const getFilm =async (id:number):Promise<any> =>{
    let postToBack = await post(queryForGetFilm(id),'movie')
    return postToBack
}

export const graphqlRequest = async (id:string|number):Promise<any> =>{
    let data = await request('http://localhost:5001/graphql',queryForGetFilm(id))
    return data
}