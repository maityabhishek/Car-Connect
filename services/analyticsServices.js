import fetchTimeout from "fetch-timeout";
const iothub = "http://192.168.0.103:30000";
const simulateTripUrl = iothub + '/senddata/trip';
const simulateDiagnisticUrl = iothub + '/senddata/vcondition';
const simulateEmissionUrl = iothub + '/senddata/econdition';

// user url

// user car url



export function getTrips() {
    console.log('getTrips Called...')
    return fetch('http://192.168.0.103:30000/connect/obddata');
}

export function simulateTrip() {
    console.log('simulateTrip Called...')
    return fetchTimeout(simulateTripUrl, {        
    }, 10000, 'Timeout occured');
}

export function simulateDiagnistic() {
    console.log('simulateDiagnistic Called...')
    return fetchTimeout(simulateDiagnisticUrl,{        
    }, 10000, 'Timeout occured');
}

export function simulateEmission() {
    console.log('simulateEmission Called...')
    return fetchTimeout(simulateEmissionUrl,{        
    }, 10000, 'Timeout occured');
}

// user service 

// user car service

export function authenticateUser(userName, password) {

}
