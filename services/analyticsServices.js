import fetchTimeout from "fetch-timeout";
import axios from "axios";

const iothub = "https://user-car-service.azurewebsites.net";
const USER_CAR_SERVICE_HOST = "https://user-car-service.azurewebsites.net/";

const simulateTripUrl = iothub + "/senddata/trip";
const simulateDiagnisticUrl = iothub + "/senddata/vcondition";
const simulateEmissionUrl = iothub + "/senddata/econdition";
const tripDataURL = iothub + "viewtrip/1";

// user url
// user car url
axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `8d5355e4a23a8b0baea5b58f79ba3ce1bd285c5c62e8c39645bd4fce30a935a0`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export function getTrips() {
    console.log("getTrips Called...");
    return fetch("http://192.168.0.103:30000/connect/obddata");
}

export function simulateTrip() {
    console.log("simulateTrip Called...");
    return fetchTimeout(simulateTripUrl, {}, 10000, "Timeout occured");
}

export function simulateDiagnistic() {
    console.log("simulateDiagnistic Called...");
    return fetchTimeout(simulateDiagnisticUrl, {}, 10000, "Timeout occured");
}

export function simulateEmission() {
    console.log("simulateEmission Called...");
    return fetchTimeout(simulateEmissionUrl, {}, 10000, "Timeout occured");
}

export function simulatetripData() {
    return fetchTimeout(tripDataURL, {}, 10000, "timeout occured");
}

// user car service

export function authenticateUser(userName, password) { }

export function getCarDetails(carId) {
    return axios.get(USER_CAR_SERVICE_HOST + "/viewcar/" + carId);        
}
