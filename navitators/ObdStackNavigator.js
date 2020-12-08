import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import SimulationScreen from "../screens/SimulationScreen";
import TripsScreen from "../screens/TripsScreen";

const ObdStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Trips: TripsScreen,
    TripDetail: TripDetailsScreen,
    Simulate: SimulationScreen
});

export default createAppContainer(ObdStackNavigator);
