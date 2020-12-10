const { GET_CAR_DETAIL } = require("../actions/obd-actions")

const initialState = {
    carDetails: {},
    trips: []
}

const obdReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAR_DETAIL: 
            action.carId;
    }
}