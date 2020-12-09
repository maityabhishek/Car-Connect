import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from '../components/Card';
import { getTrips } from "../services/analyticsServices";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Trip from "../components/TripComponent";


const HomeScreen = props => {
    const [data, setData] = useState('');

    const loadTripData = () => {
        getTrips()
            .then(response => {
                console.log('Response in HomeScreen' + response);
                setData(response);
                console.log("Data from state - " + data);
            })
            .catch(err => console.log(err));
    }

    console.log(props);

    return (
        <View style={styles.screen}>
            <Card>
                <View style={styles.healthItemRow}>
                    <View style={styles.healthItemContainer}>
                        <Text style={styles.healthText}>Engine Status</Text>
                        <FontAwesome name="check-circle" size={24} color="green" />
                    </View>
                </View>
                <View style={styles.healthItemRow}>
                    <View style={styles.healthItemContainer}>
                        <Text style={styles.healthText}>Fuel</Text>
                        <Text style={styles.healthText}>5.2 ltrs</Text>
                    </View>
                </View>
                <View style={styles.healthItemRow}>
                    <View style={styles.healthItemContainer}>
                        <Text style={styles.healthText}>Total Kms</Text>
                        <Text style={styles.healthText}>21000 Kms</Text>
                    </View>
                </View>
            </Card>
            <Card style={{ marginVertical: 10 }}>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{ fontWeight: "bold" }}>Notification</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View>
                        <Text>PUC expiring on mm/dd/yyyy</Text>
                    </View>
                </View>
            </Card>

            <Card style={{ marginVertical: 10 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Trips')}>
                    <Text style={{ fontWeight: "bold" }}>Trips Logs</Text>
                </TouchableOpacity>
                <Trip onPress={() => props.navigation.navigate('TripDetail')}/>                
            </Card>
            <View>
                <Button title="Simulation" onPress={() => props.navigation.navigate('Simulate')} />
            </View>
        </View >


    );
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Home'
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10
    },
    healthItemContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    healthItemRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5
    },
    healthText: {
        fontSize: 20
    },
    tripPanel: {
        backgroundColor: '#f1f2f2',
        borderRadius: 10,
        padding: 10,
        marginVertical: 3
    },
    tripDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tripDate: {
        fontSize: 16,
        color: 'red'
    },
    tripDetailText: {
        fontSize: 18
    }
});

export default HomeScreen