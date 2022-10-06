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

export const getSpacecraft = () => {
    
    let responce = axiosBase.get('/spacecraft/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}

export const getGallery = () => {
    
    let responce = axiosBase.get('/gallery/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}

export const getSafety = () => {
    
    let responce = axiosBase.get('/safety/')
    .then(
        res => {return res.data}
    )
    .catch ( error => {
        return null;
    })

    return responce;
}