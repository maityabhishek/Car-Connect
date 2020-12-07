import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TripDetailsScreen from "../screens/TripDetailsScreen";

const ObdStackNavigator = createStackNavigator({
    Home: HomeScreen,
    TripDetail: TripDetailsScreen
});

export default createAppContainer(ObdStackNavigator);
