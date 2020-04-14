export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = id => {
    
    return {
        type: ADD_FEATURE,
        payload: {
            additionalPrice: 1,
            newFeature: { id: 1, name: 'V-6 engine', price: 1500 }
        }
    }
}