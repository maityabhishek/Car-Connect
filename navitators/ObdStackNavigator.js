import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import SimulationScreen from "../screens/SimulationScreen";
import TripsScreen from "../screens/TripsScreen";
import TripSimulationScreen from "../screens/TripSimulationScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

const ObdStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Trips: TripsScreen,
    TripDetail: TripDetailsScreen,
    Simulate: SimulationScreen,
    TripSimulation: TripSimulationScreen
});

const SimulationNavigator = createStackNavigator({
    Simulate: SimulationScreen,
    TripSimulation: TripSimulationScreen
})

const ObdDrawerNatigator = createDrawerNavigator({
    Home: ObdStackNavigator,
    Simulation: SimulationNavigator
})

export default createAppContainer(ObdDrawerNatigator);
