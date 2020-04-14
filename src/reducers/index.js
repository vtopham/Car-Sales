import React from 'react'
import { ADD_FEATURE } from '../actions/addFeature'
import { REMOVE_FEATURE } from '../actions/removeFeature'

const defaultState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }
export const reducer = (state = defaultState, action) => {
    
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload.newFeature
                    ]
                },
                additionalPrice: state.additionalPrice + action.payload.additionalPrice
            }
        case REMOVE_FEATURE:
            const featuresAfterRemoval = state.car.features.filter(item => {
                return item.id != action.payload.id
            })
            return {
                ...state,
                car: {
                    ...state.car,
                    features: featuresAfterRemoval
                },
                additionalPrice: state.additionalPrice - action.payload.price
            }
        default: 
            return state
    }
        
   
}

