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

export const getFooter = () => {
    
    let responce = axiosBase.get('/footer/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}

export const getAbout = () => {
    
    let responce = axiosBase.get('/about/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}

export const getTeam = () => {
    
    let responce = axiosBase.get('/team/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}

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