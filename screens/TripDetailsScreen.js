import React from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";

const TripDetailsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  // if(props.navigation.state.params.screen === 'homeSreen') {
  //     const [lastTrip, setLastTrip] = useState(props.navigation.state.params.lastTrip.lastTrip);
  //     setIsLoading(false);
  // }
  // else {
  //     const [lastTrip, setLastTrip] = useState(props.navigation.state.params.lastTrip.item);
  //     setIsLoading(false);
  // }

  const [lastTrip, setLastTrip] = useState(props.navigation.state.params.lastTrip.lastTrip);
  //const [lastTrip, setLastTrip] = useState(props.navigation.state.params.lastTrip);
  console.log(props.navigation.state.params.lastTrip);
  console.log("props :", lastTrip);
  console.log("props Screen:", props.navigation.state.params.screen);
  return(
  <View style={styles.screen}>
    <View>
      <View>
        <View>
            <Text style={{ justifyContent: "flex-end" }}>
                    {lastTrip.tripdate}
            </Text>
        </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.tripDetailText}>{lastTrip.distance}</Text>
                  <Text style={styles.tripDetailText}>{lastTrip.triptime}Hrs</Text>
                  <Text style={styles.tripDetailText}>{lastTrip.avgspeed}</Text>
                </View>
              </View>
              <Card style={{ marginVertical: 10 }}>
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Trip Details</Text>
                </View>
                <View style={styles.healthItemRow}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={styles.tripDetailText}>Running Time</Text>
                    <Text style={styles.tripDetailText}>1:36:13</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text style={styles.tripDetailText}>Total Time</Text>
                    <Text style={styles.tripDetailText}>2:07:20</Text>
                  </View>
                </View>
                <View style={styles.healthItemRow}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={styles.tripDetailText}>Fuel Consumed</Text>
                    <Text style={styles.tripDetailText}>{lastTrip.fuel}ltrs</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text style={styles.tripDetailText}>Mileage</Text>
                    <Text style={styles.tripDetailText}>14.8 Km/ltr</Text>
                  </View>
                </View>
                <View style={styles.healthItemRow}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={styles.tripDetailText}>Avg Speed</Text>
                    <Text style={styles.tripDetailText}>{lastTrip.avgspeed}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text style={styles.tripDetailText}>Max Speed</Text>
                    <Text style={styles.tripDetailText}>70 km/hr</Text>
                  </View>
                </View>
              </Card>
              <Card style={{ marginVertical: 10 }}>
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Split Summary</Text>
                </View>
                <FlatList
                  data={lastTrip.splits}
                  renderItem={({ item }) => 
                  <View style={styles.healthItemRow}>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.tripDetailText}>From</Text>
                      <Text style={styles.tripDetailText}>TO</Text>
                      <Text style={styles.tripDetailText}>Average Speed</Text>
                      <Text style={styles.tripDetailText}>Fuel Consumed</Text>
                      <Text style={styles.tripDetailText}>Time taken</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.tripDetailText}>{item.fromKms} km</Text>
                      <Text style={styles.tripDetailText}>{item.toKms} km</Text>
                      <Text style={styles.tripDetailText}>{item.avgSpeed} kms</Text>
                      <Text style={styles.tripDetailText}>{item.fuelconsued} ltrs</Text>
                      <Text style={styles.tripDetailText}>{item.time} hrs</Text>
                    </View>
                  </View>
                  }
                  keyExtractor={item => item.fromKms.toString()}
                  style={styles.flatList}
                />
              </Card>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  healthItemContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  healthItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  healthText: {
    fontSize: 20,
  },
  flatList: {
  height: 100,
  flexGrow: 0
}
});

export default TripDetailsScreen; 
