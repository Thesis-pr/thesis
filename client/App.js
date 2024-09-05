import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./components/Login.jsx"
import SignUp from "./components/SignUp.jsx"
import Plogin from "./components/Plogin.jsx"
import Pconnection from './components/Pconnection.jsx';
import Commencer from './components/Commencer.jsx';
import RegisterPrestitaire from './components/RegisterPrestitaire.jsx';
import RegisterPrestitaire2 from './components/RegisterPrestitaire2.jsx';
import About1 from'./components/About1.jsx'
import About2 from'./components/About2.jsx'
import About3 from'./components/About3.jsx'
import About4 from'./components/About4.jsx'
import About5 from'./components/About5.jsx'
import Demande from './components/Demande.js';
import ButtonNext from './components/ButtonNext.jsx';
import LoginPrestataire from './components/LoginPrestataire.jsx'

import HeaderUser from './components/HeaderUser.js';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About1">
        <Stack.Screen
          name="About1"
          component={About1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About2"
          component={About2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About3"
          component={About3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About4"
          component={About4}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="About5"
          component={About5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pconnection"
          component={Pconnection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Commencer"
          component={Commencer}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RegisterPrestitaire"
          component={RegisterPrestitaire}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        /> 
         
        


      </Stack.Navigator>
    </NavigationContainer>
    )}