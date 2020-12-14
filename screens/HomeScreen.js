import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ActivityIndicator } from "react-native";
import Card from '../components/Card';
import { getTrips, getCarDetails } from "../services/analyticsServices";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Trip from "../components/TripComponent";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true,
        };
    },
});

const HomeScreen = props => {
    const [data, setData] = useState('');
    const [carDetails, setCarDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [lastTrip, setLastTrip] = useState({});

    const loadTripData = () => {
        getTrips()
            .then(response => {
                console.log('Response in HomeScreen' + response);
                setData(response);
                console.log("Data from state - " + data);
            })
            .catch(err => console.log(err));
    }

    // Prepare the notification channel
    Notifications.setNotificationChannelAsync('new-emails', {
        name: 'E-mail notifications',
        importance: Notifications.AndroidImportance.HIGH,
        sound: 'email-sound.wav', // <- for Android 8.0+, see channelId property below
    });

    const triggerNotification = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Overspeeding!',
                body: 'Overspeeding rule break!!!',
                badge: 1,
                sound: 'email-sound.wav', // <- for Android below 8.0,
                priority: 'max'
            },
            trigger: {
                seconds: 10,
                channelId: 'new-emails', // <- for Android 8.0+, see definition above
            }
        })
    }

    useEffect(() => {
        console.log('Home screen componentDidMount..')
        getCarDetails('OD02F7497')
            .then((response) => {
                console.log('Received the response from view car');
                response.data.car.enginestatus = 1;
                setCarDetails(response.data);

                if (response.data?.triplist) {
                    setLastTrip(
                        response.data.triplist[response.data.triplist.length - 1]
                    );
                }
                console.log('carDetails');
                console.log(carDetails);
                setIsLoading(false);
            })
            .catch(function (error) { });
    }, []);



    if (isLoading) {
        return <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='red'/>
        </View>
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

            <Card style={{ marginVertical: 3 }}>
                <View>
                    <TouchableOpacity style={styles.tripsLogButtonContainer} onPress={() => props.navigation.navigate('Trips', {
                        tripList: carDetails.triplist
                    })}>
                        <Text style={{ fontWeight: "bold", alignContent: 'center' }}>
                            Trips Logs
                        </Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />

                    </TouchableOpacity>
                </View>
                <Trip onPress={() => props.navigation.navigate('TripDetail', {lastTrip : lastTrip, screen : 'homeScreen'})} 
                    trip={lastTrip} />
            </Card>
            <View style={styles.notificationBtnView}>
                <Button title="Simulation" onPress={() => props.navigation.navigate('Simulate')} />
            </View>
            <View style={styles.notificationBtnView}>
                <Button title="Show notification" onPress={triggerNotification} />
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
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
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
    },
    tripsLogButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'center'
    },
    notificationBtnView: {
        margin: 7
    }
});

export default HomeScreen