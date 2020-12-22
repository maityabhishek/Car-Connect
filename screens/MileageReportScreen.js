import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const MileageReportScreen = props => {
    return (
        <View style={{ padding: 3, marginVertical: 30 }}>
            <LineChart
                data={{
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                    ],
                    datasets: [
                        {
                            data: [28, 32, 24, 19, 34, 29, 22],
                        },
                    ],
                }}
                width={Dimensions.get("window").width - 10} // from react-native
                height={320}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "blue",
                    backgroundGradientFrom: "lightblue",
                    backgroundGradientTo: "lightblue",
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(200, 255, 255, ${opacity})`,
                    labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                    },
                    paddingRight: 1
                }}
            />
        </View>
    );
} 

export default MileageReportScreen;
