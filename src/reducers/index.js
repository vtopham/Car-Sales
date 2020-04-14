import React from 'react'
import { ADD_FEATURE } from '../actions/addFeature'

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

        default: 
            return state
    }
        
   
}

