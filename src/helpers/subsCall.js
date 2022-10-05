import axiosBase from "./axiosBase";

export const getSubs = () => {
    
    let responce = axiosBase.get('/newssubscription/admin/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}

//Post email subscription
export const subNews = (subdata) => {

    let responce = axiosBase.post ( "newssubscription" , subdata)
    .then ( res => { return res.data })
    .catch ( err => { throw new Error( "Der er opstået en fejl. Prøv igen" )})

    return responce;
}