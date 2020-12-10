import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from '../components/Card';
import { getTrips, getCarDetails } from "../services/analyticsServices";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Trip from "../components/TripComponent";
import Axios from "axios";


const HomeScreen = props => {
    const [data, setData] = useState('');
    const [carDetails, setCarDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const loadTripData = () => {
        getTrips()
            .then(response => {
                console.log('Response in HomeScreen' + response);
                setData(response);
                console.log("Data from state - " + data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        console.log('Home screen componentDidMount..')
        getCarDetails('OD02F7497')
            .then((response) => {
                console.log('Received the response from view car');
                response.data.car.enginestatus = 1;
                setCarDetails(response.data);
                console.log('carDetails');
                console.log(carDetails);
                // carDetails.car.enginestatus = 1;
                setIsLoading(false);
            })
            .catch(function (error) { });
    }, []);

    if (isLoading) {
        return <View><Text>Loading data</Text></View>
    }

    return (
        <View style={styles.screen}>
            <Card>
                <View style={styles.healthItemRow}>
                    <View style={styles.healthItemContainer}>
                        <Text style={styles.healthText}>Engine Status</Text>
                        <FontAwesome name={carDetails.car.enginestatus === 0 ? 'check-circle' : 'warning'}
                            size={24}
                            color={carDetails.car.enginestatus === 0 ? 'green' : 'darkred'} />
                    </View>
                </View>
                <View style={styles.healthItemRow}>
                    <View style={styles.healthItemContainer}>
                        <Text style={styles.healthText}>Fuel</Text>
                        <Text style={styles.healthText}>{carDetails.car.fuel} ltrs</Text>
                    </View>
                </View>
                <View style={styles.healthItemRow}>
                    <View style={styles.healthItemContainer}>
                        <Text style={styles.healthText}>Total Kms</Text>
                        <Text style={styles.healthText}>{carDetails.car.totalkms}</Text>
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
                <Trip onPress={() => props.navigation.navigate('TripDetail')} />
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