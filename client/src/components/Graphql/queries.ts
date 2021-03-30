import { gql } from 'graphql-request';
export const queryForGetFilm = (data:string | number,string?:string):string => {
    return gql`
        query {
            movie(id:${data}){
                id
                name
                genre
            }
        }
    `
}
