import react from 'react'

import Datetime from './components/Datetime';
import HouseLevel from './components/HouseLevel';
import HowMuchLevel from './components/HowMuchLevel.js'
import ChatScreen from './Screen/ChatScreen.js'
import Imagetest from './components/Imagetest.js';
import Telephone from './components/Telephone.js';
import PaymentScreen from './Screen/PaymentScreen.js'
import PaymentSuccess from './Screen/PaymentSuccess.js'
import PaymentFailure from './Screen/PaymentFailure.js';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentScreen">
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="success" component={PaymentSuccess} />
        <Stack.Screen name="fail" component={PaymentFailure} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;

