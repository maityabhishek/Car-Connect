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
                <View style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent: "space-between", 
                    alignItems: "center",
                    borderColor: 'blue',
                    borderWidth: 5,
                    backgroundColor: 'red'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Engine Status</Text>
                        <Text>Total kms</Text>
                        <Text>Battery Status</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Ok</Text>
                        <Text>25000 kms</Text>
                        <Text>Ok</Text> 
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Fuel</Text>
                        <Text>Tyre Pressure</Text>
                        <Text>Coolent</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>5.2 ltrs</Text>
                        <Text>OK</Text>
                        <Text>OK</Text>  
                    </View>                  
                </View>
                <Button title="Click Me" onPress={() => {
                        props.navigation.navigate('TripDetail');
                    }}/> 
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
});

export default HomeScreen