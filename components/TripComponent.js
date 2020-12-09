import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Trip = props => {
    return (
        <TouchableOpacity {...props}>
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
    );
};

const styles = StyleSheet.create({
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
    }
});

export default Trip;

