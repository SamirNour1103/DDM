import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Chama from './screens/chama/Chama';
import Destranformar from './screens/destranformar/Destranformar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   headerShown: false,
          // }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

         <Stack.Screen
          name="Chama"
          component={Chama}
        />
        <Stack.Screen
          name="Destranformar"
          component={Destranformar}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
