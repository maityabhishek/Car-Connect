import moment from "moment";
import React from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";

const TripDetailsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  console.log(props.navigation.state.params.lastTrip);

  const [lastTrip, setLastTrip] = useState(props.navigation.state.params.lastTrip);

  const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDateString = () => {
      if(lastTrip.tripdate) {
        const tripDate = new Date(lastTrip.tripdate);
        const strinDate = tripDate.getDate() + '-' + monthNames[tripDate.getMonth()] + '-' + tripDate.getFullYear();
        return strinDate;
      } else {
        return '';
      }
        
    }

  return (
    <View style={styles.screen}>
      <View>
        <Card style={{ marginVertical: 10 }}>
          <View>
            <Text style={styles.tripEndpointsText}>{lastTrip.startpoint} - {lastTrip.endpoint}</Text>
          </View>
          <View style={styles.tripDateContainer}>
            <Text style={styles.tripDate}>{getDateString()}</Text>
          </View>          
          <View style={styles.tripTimeContainer}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.tripParamsLabel}>Trip Time</Text>
              <Text style={styles.tripParamsText}>{lastTrip.triptime} Hrs</Text>
            </View>

          </View>
          <View style={styles.healthItemRow}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.tripParamsLabel}>Fuel Consumed</Text>
              <Text style={styles.tripParamsText}>{lastTrip.fuel} ltrs</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <Text style={styles.tripParamsLabel}>Mileage</Text>
              <Text style={styles.tripParamsText}>14.8 Km/ltr</Text>
            </View>
          </View>
          <View style={styles.healthItemRow}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.tripParamsLabel}>Avg Speed</Text>
              <Text style={styles.tripParamsText}>{lastTrip.avgspeed} Kms</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.tripParamsLabel}>Max Speed</Text>
              <Text style={styles.tripParamsText}>{lastTrip.maxspeed} Kms</Text>
            </View>
          </View>
        </Card>
        <Card style={{ marginVertical: 10 }}>
          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.splitSummeryTitle}>Split Summary</Text>
          </View>
          <FlatList
            data={lastTrip.splits}
            renderItem={({ item }) =>
              <View style={styles.splitRow}>
                <View>
                 <Text style={styles.splitRowText}>{item.fromKms} - {item.toKms} Kms</Text>
                </View>
                <View>
                 <Text style={styles.splitRowText}>{item.avgSpeed} Kms/hr</Text>
                </View>
                <View>
                 <Text style={styles.splitRowText}>{item.time} Mins</Text>
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
    marginHorizontal: 10
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
  tripTimeContainer: {
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: "center"
  },
  healthText: {
    fontSize: 20,
  },
  flatList: {
    height: 200
  },
  tripEndpointsText: {
    fontSize: 20,
    color: 'green'
  },
  tripDateContainer: {
      alignItems: "flex-end"
  },
  tripDate: {
      fontSize: 18,
      color: 'red',
      fontWeight: "bold"
  },
  tripParamsText: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold"
  },
  tripParamsLabel: {
    color: "#9a9a9a",
    fontWeight: "bold"
  },
  splitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "lightblue"
  },
  splitRowText: { 
    fontSize: 16
  },
  splitSummeryTitle: {
    color: "#9a9a9a",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default TripDetailsScreen; 
