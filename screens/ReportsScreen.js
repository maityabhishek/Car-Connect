import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { FontAwesome } from '@expo/vector-icons';
import Card from "../components/Card";
import { FontAwesome5 } from '@expo/vector-icons';

const ReportsScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.reportButtonCard}>
                <TouchableOpacity style={styles.reportButton}
                    onPress={() => props.navigation.navigate('TripReport')}>
                    <FontAwesome name="road" size={50} color="darkblue" />
                    <Text style={styles.reportButtonText}>Trip</Text>
                </TouchableOpacity>
            </Card>

            <Card style={styles.reportButtonCard}>
                <TouchableOpacity style={styles.reportButton}
                    onPress={() => props.navigation.navigate('MileageReport')}>
                    <FontAwesome5 name="gas-pump" size={50} color="darkblue" />
                    <Text style={styles.reportButtonText}>Mileage</Text>
                </TouchableOpacity>
            </Card>
        </View>
    );
}

ReportsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Reports',
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
    buttonRow: {
        flexDirection: 'row',
        flex: 1,
        margin: 10
    },
    reportButtonCard: {
        backgroundColor: 'white',
        width: '95%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    reportButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    reportButtonText: {
        fontSize: 20,
        color: 'darkblue'
    }
})

export default ReportsScreen;