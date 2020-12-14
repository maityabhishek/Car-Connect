import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from "moment";

const Trip = props => {
    console.log(props)
    return (
        <TouchableOpacity {...props}>
            <View style={styles.tripPanel}>
                <View>
                    <Text style={styles.tripEndpointsText}>{props.trip.startpoint} - {props.trip.endpoint}</Text>
                </View>
                <View style={styles.tripDateContainer}>
                    <Text style={styles.tripDate}>{moment(props.trip.tripdate).format('d MMM yyyy HH:mm')}</Text>
                </View>                
                <View>
                    <View style={styles.tripDetailRow}>
                        <Text style={styles.tripDetailText}>Dist - {props.trip.distance}</Text>
                        <Text style={styles.unitText}>Kms</Text>
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

