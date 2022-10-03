import axiosBase from "./axiosBase";

export const getBanner = () => {

    let responce = axiosBase.get('/banner/')
        .then(
            res => {return res.data}
        )
        .catch ( error => {
            return null;
        })

    return responce;
}