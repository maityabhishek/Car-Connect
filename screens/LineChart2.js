import Axios from "axios";
import React, { Component } from "react";
import { FlatList, View, Dimensions, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
class LineChart2 extends Component {
  render() {
    return (
      <View style={{ padding: 20, marginVertical: 10 }}>
        <Text>Trip Average</Text>
        <LineChart
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
            ],
            datasets: [
              {
                data: [28, 32, 24, 19, 34, 29, 22],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
        />
      </View>
    );
  }
}
export default LineChart2;
