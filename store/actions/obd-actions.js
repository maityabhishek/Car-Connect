export const GET_CAR_DETAIL = 'GET_CAR_DETAIL';

export const loadCarDetails = (carId) => {
    return { 
        type: GET_CAR_DETAIL, 
        carId: carId,
        auth: authorization
    };
}