export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"


export const addFeature = (feautureObject) =>{
    return({
        type: ADD_FEATURE,
        payload: feautureObject,
    })
}

export const removeFeature = (featureObject) => {
    return({
        type: REMOVE_FEATURE,
        payload: featureObject
    })
}

