import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import SimulationScreen from "../screens/SimulationScreen";
import TripsScreen from "../screens/TripsScreen";
import TripSimulationScreen from "../screens/TripSimulationScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import ReportsScreen from "../screens/ReportsScreen";
import TripReportScreen from "../screens/TripReportScreen";
import MileageReportScreen from "../screens/MileageReportScreen";

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
});

const ReportNavigator = createStackNavigator({
    Reports: ReportsScreen,
    TripReport: TripReportScreen,
    MileageReport: MileageReportScreen 
});

const ObdDrawerNatigator = createDrawerNavigator({
    Home: ObdStackNavigator,
    Simulation: SimulationNavigator,
    Reports: ReportNavigator
})

export default createAppContainer(ObdDrawerNatigator);
