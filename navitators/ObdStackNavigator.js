import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import SimulationScreen from "../screens/SimulationScreen";

const ObdStackNavigator = createStackNavigator({
    Home: HomeScreen,
    TripDetail: TripDetailsScreen,
    Simulate: SimulationScreen
});

export default createAppContainer(ObdStackNavigator);
