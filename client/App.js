import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Navigation from './Navigation';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';

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




export default function App() {
  return (
    <View style={styles.container}>
    {/* <Login /> */}
         {/* <SignUp /> */}
    {/* <Plogin  /> */}
    {/* <Pconnection /> */}
    {/* <Commencer /> */}
    {/* <RegisterPrestitaire /> */}
    {/* <RegisterPrestitaire2 /> */}
    <About1  />
    {/* <About2  /> */}
     {/* <About3  /> */}
       {/* <About4  /> */}
        {/* <About5  /> */}

        {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="About1">
        <Stack.Screen name="About1" component={About1} />
        <Stack.Screen name="About2" component={About2} />
        <Stack.Screen name="About3" component={About3} />
      </Stack.Navigator>
    </NavigationContainer> */}

{/* < Navigation /> */}

      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
