export const CAR_DETAILS = {
    "car": {
        "carno": "OD02F7497",
        "vinno": "100",
        "ownerno": "OD001",
        "maker": "A",
        "model": "M",
        "color": "Black",
        "rcexp": "2020-12-21T14:28:34.042+00:00",
        "totalkms": 3000,
        "fuel": 56.9,
        "enginestatus": 0,
        "coolentstatus": 0
    },
    "triplist": [
        {
            "tripid": 1,
            "carno": "OD02F7497",
            "distance": 658.3,
            "fuel": 30.2,
            "avgspeed": 45.3,
            "triptime": 3.1,
            "startpoint": "Mumbai",
            "endpoint": "Pune",
            "tripdate": "2020-12-21T14:28:35.935+00:00",
            "splits": [
                {
                    "fromKms": 1,
                    "toKms": 10,
                    "time": 10.2,
                    "avgSpeed": 15,
                    "fuelconsumed": 1.0
                },
                {
                    "fromKms": 11,
                    "toKms": 20,
                    "time": 10.2,
                    "avgSpeed": 15,
                    "fuelconsumed": 1.0
                }
            ],
            "tripsplitkms": 10
        },
        {
            "tripid": 2,
            "carno": "OD02F7497",
            "distance": 1658.3,
            "fuel": 60.2,
            "avgspeed": 93.3,
            "triptime": 7.1,
            "startpoint": "Delhi",
            "endpoint": "Pune",
            "tripdate": "2020-12-21T14:28:36.037+00:00",
            "splits": [
                {
                    "fromKms": 1,
                    "toKms": 10,
                    "time": 10.2,
                    "avgSpeed": 15,
                    "fuelconsumed": 1.0
                },
                {
                    "fromKms": 11,
                    "toKms": 20,
                    "time": 10.2,
                    "avgSpeed": 15,
                    "fuelconsumed": 1.0
                },
                {
                    "fromKms": 21,
                    "toKms": 31,
                    "time": 10.2,
                    "avgSpeed": 15,
                    "fuelconsumed": 1.0
                }
            ],
            "tripsplitkms": 10
        }
    ],
    "puclist": [
        {
            "carno": "OD02F7497",
            "issuedt": "2020-12-21T14:28:35.836+00:00",
            "expdt": "2020-12-21T14:28:35.836+00:00",
            "place": "Bhubaneswar",
            "status": "Active"
        }
    ],
    "carserv": [
        {
            "carno": "OD02F7497",
            "garagename": "PLG H",
            "dateofvisit": "2020-12-21T14:28:35.706+00:00",
            "remarks": "All Ok "
        }
    ]
}

export const CAR_NOTIFICATION_DATA = [{
    "id": "1",
    "vin": 1,
    "eventname": "Fuel Alert",
    "eventval": "",
    "eventtype": "alert",
    "eventdesc": "Low Fuel Level",
    "eventdate": "2020-12-01T10:00:00"
}]