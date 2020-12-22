import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ActivityIndicator } from "react-native";
import Card from '../components/Card';
import { getTrips, getCarDetails, getCarNotifications } from "../services/analyticsServices";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Trip from "../components/TripComponent";
import * as Notifications from "expo-notifications";
import Swiper from "react-native-swiper";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { CAR_DETAILS, CAR_NOTIFICATION_DATA } from "../constants/data";

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true,
        };
    },
});

const HomeScreen = props => {
    const [data, setData] = useState('');
    const [carDetails, setCarDetails] = useState(CAR_DETAILS);
    const [isLoading, setIsLoading] = useState(false);
    const [lastTrip, setLastTrip] = useState({});
    const [carNotifications, setCarNotifications] = useState([]);

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

    const triggerNotification = (title, message, messageType) => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: title,
                body: message,
                badge: 1,
                sound: 'email-sound.wav', // <- for Android below 8.0,
                priority: 'max'
            },
            trigger: {
                seconds: 5,
                channelId: 'new-emails', // <- for Android 8.0+, see definition above
            }
        })
    }

    useEffect(() => {
        console.log('Home screen componentDidMount..')
        const getCarDetailHandler = setInterval(() => {
            getCarDetails('OD02F7497')
                .then((response) => {
                    console.log('Received the response from view car');
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
                .catch((error) => {
                    console.log('Error occured while getting the car details - ' + error)
                });

        }, 60000);

        return () => { console.log("clearing timer"); clearInterval(getCarDetailHandler) };
    }, []);

    useEffect(() => {
        console.log('Loading car notifications')
        const getCarNotificationHandler = setInterval(() => {
            console.log('Car VIN - '+carDetails?.car?.vin);
            // if (!carDetails?.car?.vin) {
            //     console.log('Car details not loaded yet.')
            //     return ;
            // }            
            getCarNotifications(100)
                .then((response) => {
                    console.log('Response received for get Car notifications service - ' + response.data);
                    console.log(carNotifications.length);
                    console.log(response.data?.length);

                    if (carNotifications.length < response.data?.length) {
                        const lastNotification = response.data[response.data?.length - 1];
                        triggerNotification(lastNotification.eventname,
                            lastNotification.eventdesc,
                            lastNotification.eventtype)
                    }

                    setCarNotifications(response.data);
                    console.log(carNotifications);
                }).catch(err => {
                    console.log('Error occured while getting the car notifications' + err);
                })
        }, 30000);

        return () => { console.log("clearing timer"); clearInterval(getCarNotificationHandler) };
    }, []);

    if (isLoading) {
        return <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='red' />
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
            <Card style={{ marginVertical: 10, height: '20%' }}>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{ fontWeight: "bold", color: 'darkred' }}>Notifications</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: '95%'
                }}>
                    <Swiper autoplay horizontal={true} height={60}
                        dotStyle={{ marginVertical: 1 }}

                        paginationStyle={{ position: 'absolute', bottom: 2 }}
                    >
                        {
                            (carNotifications && carNotifications.length !== 0)
                                ? carNotifications.map(not =>
                                    <View key={not.eventval}>
                                        <Text style={styles.swiperText}>{not.eventdesc}</Text>
                                    </View>
                                )
                                : <View >
                                    <Text style={styles.noNotificationText}>No notification present</Text>
                                </View>
                        }

                    </Swiper>
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
                <Trip onPress={() => props.navigation.navigate('TripDetail', { lastTrip: lastTrip, screen: 'homeScreen' })}
                    trip={lastTrip} />
            </Card>
        </View >


    );
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'DriveSmart',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
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
    },
    swiperText: {
        fontSize: 18
    },
    noNotificationText: {
        color: '#9a9a9a',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default HomeScreen