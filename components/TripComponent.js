import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from "moment";


const Trip = props => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDateString = () => {
        if(props.trip.tripdate){
            const tripDate = new Date(props.trip.tripdate);
            const strinDate = tripDate.getDate() + '-' + monthNames[tripDate.getMonth()] + '-' + tripDate.getFullYear();
            return strinDate;
        } else {
            return '';
        }    
    }
    
    return (
        <TouchableOpacity {...props}>
            <View style={styles.tripPanel}>
                <View>
                    <Text style={styles.tripEndpointsText}>{props.trip.startpoint} - {props.trip.endpoint}</Text>
                </View>
                <View style={styles.tripDateContainer}>
                    <Text style={styles.tripDate}>{getDateString()}</Text>
                </View>
                <View>
                    <View style={styles.tripDetailRow}>
                        <Text style={styles.tripDetailText}>Dist - {props.trip.distance} Kms</Text>
                        <Text style={styles.tripDetailText}>Avg Speed - {props.trip.avgspeed} Kms</Text>
                    </View>
                    <View style={styles.tripDetailRow}>
                        <Text style={styles.tripDetailText}>Fuel - {props.trip.fuel} Ltrs</Text>
                        <Text style={styles.tripDetailText}>Total Time -  {props.trip.triptime} Hrs</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tripPanel: {
        backgroundColor: '#f1f2f2',
        borderRadius: 10,
        padding: 10,
        marginVertical: 3
    },
    tripDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    tripDateContainer: {
        alignItems: "flex-end"
    },
    tripDate: {
        fontSize: 16,
        color: 'red'
    },
    tripEndpointsText: {
        fontSize: 20,
        color: 'green'
    },
    tripDetailText: {
        fontSize: 16
    },
    unitText: {
        fontSize: 10,
        fontStyle: 'italic'
    }
});

export default Trip;

