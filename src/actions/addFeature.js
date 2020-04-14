export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = feature => {
    console.log(feature.id)

    return {
        type: ADD_FEATURE,
        payload: {
            additionalPrice: feature.price,
            newFeature: feature
        }
    }
}