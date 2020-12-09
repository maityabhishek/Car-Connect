import React from "react"
import { View, Text, StyleSheet } from "react-native";
import Card from '../components/Card';

const TripDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <View  style={styles.healthItemRow}>
                    <Text style={{ fontWeight: "bold", justifyContent:"flex-start" }}>Trip</Text>
                    <Text style={{ justifyContent:"flex-end" }}>Fri, Jan 24, 4.41 PM - 6:48 PM</Text>
                </View>
                <View style={{ flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: "center"
                }}>
                    <Text style={styles.tripDetailText}>65 Kms</Text>
                    <Text style={styles.tripDetailText}>1 hr 36 mins</Text>
                    <Text style={styles.tripDetailText}>45 Km/hr</Text>
                </View>
            </Card>
            <Card style={{ marginVertical: 10 }}>
                <View style={{
                    justifyContent: "space-between",
                }}>
                    <Text style={{ fontWeight: "bold" }}>Trip Details</Text>
                </View>
                <View  style={styles.healthItemRow}>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={styles.tripDetailText}>Running Time</Text>
                        <Text style={styles.tripDetailText}>1:36:13</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Text style={styles.tripDetailText}>Total Time</Text>
                        <Text style={styles.tripDetailText}>2:07:20</Text>
                    </View>
                </View>
                <View  style={styles.healthItemRow}>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={styles.tripDetailText}>Fuel Consumed</Text>
                        <Text style={styles.tripDetailText}>4.6 ltrs</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Text style={styles.tripDetailText}>Mileage</Text>
                        <Text style={styles.tripDetailText}>14.8 Km/ltr</Text>
                    </View>
                </View>
                <View  style={styles.healthItemRow}>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={styles.tripDetailText}>Avg Speed</Text>
                        <Text style={styles.tripDetailText}>45 Km/hr</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Text style={styles.tripDetailText}>Max Speed</Text>
                        <Text style={styles.tripDetailText}>70 km/hr</Text>
                    </View>
                </View>
            </Card>

            <Card style={{ marginVertical: 10 }}>
                <View style={{
                    justifyContent: "space-between",
                }}>
                    <Text style={{ fontWeight: "bold" }}>Split Summary</Text>
                </View>
                <View  style={styles.healthItemRow}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.tripDetailText}>0 - 10 kms</Text>
                        <Text style={styles.tripDetailText}>11 - 20 kms</Text>
                        <Text style={styles.tripDetailText}>21 - 30 kms</Text>
                        <Text style={styles.tripDetailText}>31 - 40 kms</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.tripDetailText}>0 - 10 kms</Text>
                        <Text style={styles.tripDetailText}>11 - 20 kms</Text>
                        <Text style={styles.tripDetailText}>21 - 30 kms</Text>
                        <Text style={styles.tripDetailText}>31 - 40 kms</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.tripDetailText}>0.9 ltrs</Text>
                        <Text style={styles.tripDetailText}>1.1 ltrs</Text>
                        <Text style={styles.tripDetailText}>0.8 ltrs</Text>
                        <Text style={styles.tripDetailText}>1.1 ltrs</Text>
                    </View>
                </View>
            </Card>            
        </View >

    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    healthItemContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    healthItemRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 5
    },
    healthText: {
        fontSize: 20
    },
});

export default TripDetailsScreen
