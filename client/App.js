import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login.jsx"
import SignUp from "./components/SignUp.jsx"
import Plogin from "./components/Plogin.jsx"
import Pconnection from './components/Pconnection.jsx';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Login /> */}
         {/* <SignUp /> */}
    {/* <Plogin  /> */}
    <Pconnection />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
