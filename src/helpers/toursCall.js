import axiosBase from "./axiosBase";

// GET TOURS
export const getTours = () => {

    let responce = axiosBase.get('/tours/')
        .then(
            res => {return res.data}
        )
        .catch ( error => {
           throw new Error("Der er desværre opstået en fejl!")
        })

    return responce;
}

// GET TOUR BY ID
export const getTourById = (id) => {

    let responce = axiosBase.get('/tours/' + id)
        .then(
            res => {return res.data}
        )
        .catch ( error => {
           throw new Error("Der er desværre opstået en fejl!")
        })

    return responce;
}

// POST / TILFØJ
export const createTour = ( newTour ) => {

    let responce = axiosBase.post('/tours/admin', newTour)
        .then(
            res => {return res.data}
        )
        .catch ( error => {
           throw new Error("Der er desværre opstået en fejl!")
        })

    return responce;
}

// PUT / RET
export const editTour = ( updatedTour, id ) => {

    let responce = axiosBase.put('/tours/admin/' + id , updatedTour)
        .then(
            res => {return res.data}
        )
        .catch ( error => {
           throw new Error("Der er desværre opstået en fejl!")
        })

    return responce;
}

// DELETE (ud fra ID)
export const deleteTour = (id) => {

    let responce = axiosBase.delete('/tours/admin/' + id)
        .then(
            res => {return res.data}
        )
        .catch ( error => {
           throw new Error("Der er desværre opstået en fejl!")
        })

    return responce;
}