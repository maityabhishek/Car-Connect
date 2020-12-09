export function getTrips() {
    console.log('getTrips Called...')
    return fetch('http://192.168.0.103:30000/connect/obddata');
        // .then(response => {
        //     console.log('Received the response - '+response)
        //     return response;
        // })
        // .catch(err => console.log(err))

}

export function authenticateUser(userName, password) {

}
