export const post =async (objects:any):Promise<void> => {
    let data =await fetch("http://localhost:5000/graphql",objects)
    let response =await data.json()
    return response
}