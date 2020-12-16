import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { simulateTrip, simulateDiagnistic, simulateEmission } from "../services/analyticsServices";
import { useState } from "react";

const SimulationScreen = props => {
    const [simStarted, setSimStarted] = useState(false);
    const [message, setMessage] = useState('') 
    
    const startTripSimulation = () => {
        props.navigation.navigate('TripSimulation');        
    };

    const startDiagnisticSimulation = () => {
        setMessage('Simulation started!');
        simulateDiagnistic()
            .then(response => {
                setSimStarted(true);
                console.log('Simulation Completed')
            })
            .catch(err => {
                console.log(err);
            })
    };

    const startEmissionSimulation = () => {
        setMessage('Simulation started!');
        simulateEmission()
            .then(response => {
                setSimStarted(true);
                console.log('Simulation Completed')
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.simulateButton} onPress={() => startTripSimulation()}>
                <Text style={styles.text}>Simulate Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.simulateButton} onPress={() => startDiagnisticSimulation()}>
                <Text style={styles.text}>Simulate Engine Diagnostics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.simulateButton} onPress={() => startEmissionSimulation()}>
                <Text style={styles.text}>Simulate Engine Diagnostics</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
}

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
