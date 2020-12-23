import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
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
              "August"
            ],
            datasets: [
              {
                data: [28, 32, 24, 19, 34, 29, 22,26],
                color: (opacity = 3) => `rgba(0,0,0, ${opacity})`,
                strokeWidth: 6,
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={200}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 4,
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          }}
        />
      </View>
    );
  }
}
export default LineChart2;
