import React from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { simulateTrip, stopTripSimulation } from "../services/analyticsServices";

const TripSimulationScreen = props => {
    const [isSimulationStarted, setIsSimulationStarted] = useState(false);
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('')
    const [simulationId, setSimulationId] = useState();
    const [simulationMsg, setSimulationMsg] = useState('');

    const startSimulationHandler = () => {
        // setMessage('Simulation started!');
        simulateTrip(startPoint, endPoint)
            .then(response => {
                console.log(response.data?.simulationId);
                console.log(response);
                setIsSimulationStarted(true);
                setSimulationId(response.data?.simulationId);
                setSimulationMsg('Simulation Started!!!')
            })
            .catch(err => {
                console.log(err);
            })
    }

    const stopSimulationHandler = () => {
        stopTripSimulation(simulationId)
            .then(response => {
                console.log('Simulation Stopped!!!');
                setIsSimulationStarted(false);
                setSimulationMsg('');
            })
            .catch(err => {
                console.log('Error occured while stoping the trip simulation!!');
                console.log(err);
                setIsSimulationStarted(false);
            });
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.endpointTextInput}
                    placeholder="Starting Location"
                    onChangeText={text => setStartPoint(text)} />
            </View>
            <TextInput
                style={styles.endpointTextInput}
                placeholder="Destination Location"
                onChangeText={text => setEndPoint(text)} />

            <TouchableOpacity
                style={{ ...styles.startButton, backgroundColor: isSimulationStarted ? '#9a9a9a' : 'green' }}
                onPress={() => startSimulationHandler()}
                disabled={isSimulationStarted}>
                <Text style={styles.buttonText}>
                    Start
                </Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.simulationMessage}>
                    {simulationMsg}
                </Text>
            </View>

            <TouchableOpacity
                style={{ ...styles.endButton, backgroundColor: isSimulationStarted ? 'red' : '#9a9a9a' }}
                onPress={stopSimulationHandler}
                disabled={!isSimulationStarted}>
                <Text style={styles.buttonText}>
                    Stop
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        marginVertical: 20
    },
    endpointTextInput: {
        height: 40,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10
    },
    inputTextContainer: {
        marginVertical: 10,
        width: "100%",
        alignItems: "center"
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
    startButton: {
        margin: 20,
        height: 50,
        width: 200,
        padding: 20,
        backgroundColor: 'green',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    endButton: {
        margin: 20,
        height: 50,
        width: 200,
        padding: 20,
        backgroundColor: 'darkred',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    simulationMessage: {
        fontSize: 18,
        color: 'darkblue'
    }
});

export default TripSimulationScreen;
