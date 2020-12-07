import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from '../components/Card';
import { getTrips } from "../services/analyticsServices";

const loadTripData = () => {
    getTrips();
}



const HomeScreen = props => {
    loadTripData();
    console.log(props);

    return (
        <View style={styles.screen}>
            <Card styles={styles.inputContainer}>
                <View styles={styles.StatusRow}>
                    <Text>Engine Status</Text>
                    <Text>Ok</Text>
                </View>
                <View styles={styles.StatusRow}>
                    <Text>Engine Status</Text>
                    <Text>NOk</Text>
                    <Button title="Click Me" onPress={() => {
                        props.navigation.navigate('TripDetail');
                    }}/>                    
                </View>
            </Card>
        </View >

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10

    },
    inputContainer: {
        flex: 1,
        maxWidth: '80%',
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
    },
    StatusRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: 'blue',
        borderWidth: 5,
        backgroundColor: 'red'
    }

});

export default HomeScreen