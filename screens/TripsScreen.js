import React from "react"
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Trip from "../components/TripComponent";
import Card from "../components/Card";

const TripsScreen = props => {
    const trips = props.navigation.getParam('tripList');
    return (
        <View style={styles.screen}>            
            <FlatList
                style={styles.tripListContainer}
                data={trips}
                keyExtractor={(trip) => trip.tripid}
                renderItem={({ item }) => (
                    <Card style={{ marginVertical: 10, padding: 10 }}>
                        <Trip style={{padding: 0, margin: 0}} onPress={() => props.navigation.navigate('TripDetail')} trip={item} />
                    </Card>
                )}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tripListContainer: {
        marginHorizontal: 0, 
        padding: 0, 
        width: '90%'
    }
});

export default TripsScreen
