import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const TripReportScreen = props => {
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
                        "Sep",
                        "Oct"
                    ],
                    datasets: [
                        {
                            data: [610, 920, 102, 190, 650, 29, 420, 736, 502],
                        },
                    ],
                }}
                width={Dimensions.get("window").width - 10} // from react-native
                height={320}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "white",
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

export default TripReportScreen;
