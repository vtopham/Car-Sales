export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = feature => {

    return {
        type: ADD_FEATURE,
        payload: {
            additionalPrice: feature.price,
            newFeature: feature
        }
    }
}