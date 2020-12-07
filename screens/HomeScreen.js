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
            <Card style={{marginVertical: 10}}>
            <Button title="Click Me" onPress={() => {
                        props.navigation.navigate('TripDetail');
                    }}/> 
            </Card>
            <Card style={{marginVertical: 10}}>
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
            </Card>
            <Card style={{marginVertical: 10}}>
                <View style={{flex: 1,
                    justifyContent: "space-between", 
                    alignItems: "center"}}>
                    <Text style={{fontWeight: "bold"}}>Notification</Text>
                </View>
            </Card>
            <Card style={{marginVertical: 10}}>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent: "space-between", 
                    alignItems: "center",
                    borderColor: 'blue',
                    borderWidth: 5}}>
                    <View>
                        <Text>PUC expiring on mm/dd/yyyy</Text>
                    </View>                 
                </View>
            </Card>
            <Card style={{marginVertical: 10}}>
                <View style={{flex: 1,
                    justifyContent: "space-between", 
                    alignItems: "center"}}>
                    <Text style={{fontWeight: "bold"}}>Trips Log</Text>
                </View>
            </Card>
            <Card style={{marginVertical: 10}}>
            <View style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent: "space-between", 
                    alignItems: "center",
                    borderColor: 'blue',
                    borderWidth: 5}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Dist</Text>
                        <Text>Average Speed</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>11 Kms</Text>
                        <Text>27 km/hr</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Fuel Consumed</Text>
                        <Text>Time Taken</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>1.2 ltrs</Text>
                        <Text>30 mins</Text>
                    </View>                  
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
});

export default HomeScreen