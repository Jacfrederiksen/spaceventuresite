import axiosBase from "./axiosBase";

export const sendContact = (formdata) => {

    let responce = axiosBase.post ( "contact" , formdata)
    .then ( res => { return res.data })
    .catch ( err => { throw new Error( "Der er opstået en fejl. Prøv igen" )})

    return responce;
}