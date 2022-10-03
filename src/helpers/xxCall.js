import axiosBase from "./axiosBase";

// Giv const et navn der passer til den get du gerne vil lave, som f.eks About og derefter stien som du
// skal bruge for at hente det korrekte data

export const XX = () => {

    let responce = axiosBase.get('/stien/')
        .then(
            res => {return res.data}
        )
        .catch ( error => {
            return null;
        })

    return responce;
}