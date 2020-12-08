import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from '../components/Card';
import { getTrips } from "../services/analyticsServices";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const loadTripData = () => {
    getTrips();
}



const HomeScreen = props => {
    loadTripData();
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
                <TouchableOpacity onPress={() => props.navigation.navigate('TripDetail')}>
                    <View style={styles.tripPanel}>
                        <View>
                            <Text style={styles.tripDate}>3 Dec 2020 2:10 PM</Text>
                        </View>
                        <View>
                            <View style={styles.tripDetailRow}>
                                <Text style={styles.tripDetailText}>Dist - 11 Kms</Text>
                                <Text style={styles.tripDetailText}>Avg Speed - 27Kms</Text>
                            </View>
                            <View style={styles.tripDetailRow}>
                                <Text style={styles.tripDetailText}>Dist - 11 Kms</Text>
                                <Text style={styles.tripDetailText}>Avg Speed - 27Kms</Text>
                            </View>                 
                        </View>
                    </View>
                </TouchableOpacity>
            </Card>
        </View >

    );
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
        backgroundColor: 'lightgray',
        borderRadius: 5,
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