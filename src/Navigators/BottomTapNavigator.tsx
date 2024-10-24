import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, SettingScreen } from "../screens";
import { CounterState } from "../store/counter-store";

export type RootStackParams = {
  Home: undefined;
  Profile: undefined;
  Settings: CounterState;
}


const Tab = createBottomTabNavigator<RootStackParams>();

export const BottomTapNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
