import { NavigationContainer } from "@react-navigation/native";
import { BottomTapNavigator } from "./src/Navigators/BottomTapNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTapNavigator />
    </NavigationContainer>
  );
}
