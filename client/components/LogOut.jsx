// 1	import React, {FC, ReactElement} from 'react';
// 2	import {Alert, Text, TouchableOpacity, View} from 'react-native';
// 3	import Parse from 'parse/react-native';
// 4	import {useNavigation} from '@react-navigation/native';
// 5	import {StackActions} from '@react-navigation/native';
// 6	import Styles from './Styles';
// 7	
// 8	export const UserLogOut = () => {
// 9	  const navigation = useNavigation();
// 10	
// 11	  const doUserLogOut = async function () {
// 12	    return await Parse.User.logOut()
// 13	      .then(async () => {
// 14	        // To verify that current user is now empty, currentAsync can be used
// 15	        const currentUser = await Parse.User.currentAsync();
// 16	        if (currentUser === null) {
// 17	          Alert.alert('Success!', 'No user is logged in anymore!');
// 18	        }
// 19	        // Navigation dispatch calls a navigation action, and popToTop will take
// 20	        // the user back to the very first screen of the stack
// 21	        navigation.dispatch(StackActions.popToTop());
// 22	        return true;
// 23	      })
// 24	      .catch((error) => {
// 25	        Alert.alert('Error!', error.message);
// 26	        return false;
// 27	      });
// 28	  };
// 29	
// 30	  return (
// 31	    <View style={Styles.login_wrapper}>
// 32	      <View style={Styles.form}>
// 33	        <TouchableOpacity onPress={() => doUserLogOut()}>
// 34	          <View style={Styles.button}>
// 35	            <Text style={Styles.button_label}>{'Logout'}</Text>
// 36	          </View>
// 37	        </TouchableOpacity>
// 38	      </View>
// 39	    </View>
// 40	  );
// 41	};