import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { simulateTrip, simulateDiagnistic, simulateEmission } from "../services/analyticsServices";
import { useState } from "react";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const SimulationScreen = props => {
    const [simStarted, setSimStarted] = useState(false);
    const [message, setMessage] = useState('')

    const startTripSimulation = () => {
        props.navigation.navigate('TripSimulation');
    };

    const startDiagnisticSimulation = () => {
        setMessage('Engine Diagnostics started!!');
        setSimStarted(true);
        simulateDiagnistic()
            .then(response => {
                setSimStarted(false);
                setMessage('Engine Diagnostics completed!!');
                console.log('Simulation Completed')
            })
            .catch(err => {
                console.log(err);
            })
    };

    const startEmissionSimulation = () => {
        setMessage('Vehicle condition simualtion started!!');
        setSimStarted(true);
        simulateEmission()
            .then(response => {
                setSimStarted(false);
                setMessage('Vehicle condition simualtion completed!!');
                console.log('Simulation Completed')
            })
            .catch(err => {
                setSimStarted(false);
                console.log(err);
            })
    };

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                style={styles.simulateButton}
                disabled={simStarted}
                onPress={() => startTripSimulation()}>
                <Text style={styles.text}>Simulate Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.simulateButton}
                disabled={simStarted}
                onPress={() => startDiagnisticSimulation()}>
                <Text style={styles.text}>Simulate Engine Diagnostics</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.simulateButton}
                disabled={simStarted}
                onPress={() => startEmissionSimulation()}>
                <Text style={styles.text}>Simulate Vehicle Condition</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
}

SimulationScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Simulations',
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
        alignItems: 'center'
    },
    simulateButton: {
        margin: 20,
        height: 50,
        width: '80%',
        padding: 20,
        backgroundColor: '#8dae97',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white'
    },
    message: {
        fontSize: 20
    }
});

export default SimulationScreen
