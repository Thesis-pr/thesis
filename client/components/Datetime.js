import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from './Header';
import Footer from './Footer';
import ButtonNext from './ButtonNext';

const Datetime = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (e, selectedDate) => {
        setDate(selectedDate || date);
        setShow(false);
    };

    const showMode = (modeToShow) => {
        setShow(true);
        setMode(modeToShow);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <Header/>
                </View>
                <View style={styles.content}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => showMode('date')} style={styles.button}>
                            <Text style={styles.buttonText}>Choisir une date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showMode('time')} style={styles.button}>
                            <Text style={styles.buttonText}>Choisir une heure</Text>
                        </TouchableOpacity>
                    </View>
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                    <Text style={styles.dateText}>{date.toLocaleString()}</Text>
                    <ButtonNext style={styles.buttons}/>
                </View>
                <View>
                    <Footer/>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0078FF',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
        width: 250,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom:80
    },

    buttons : {

    }
    

});

export default Datetime;
