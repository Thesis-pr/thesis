import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleInputText = (text) => {
        setInputMessage(text);
    };

    const renderMessage = (props) => {
        const { currentMessage } = props;
        if (currentMessage.user._id === 1) {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                    <Bubble
                        {...props}
                        wrapperStyle={{
                            right: {
                                backgroundColor: "#743df9",
                                marginRight: 12,
                                marginVertical: 12,
                            }
                        }}
                        textStyle={{
                            right: {
                                color: "white"
                            }
                        }}
                    />
                </View>
            );
        }
    };

    const submitHandler = () => {
        if (inputMessage.trim() !== "") {
            const message = {
                _id: Math.random().toString(36),
                text: inputMessage,
                createdAt: new Date().getTime(),
                user: { _id: 1 }
            };
            setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
            setInputMessage("");
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 16,
                    paddingVertical: 30,
                    backgroundColor: "white",
                    borderBottomWidth: 0.2
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/back.png')}
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: 'black'
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{ position: 'relative', marginHorizontal: 12 }}>
                            <Image
                                source={require('../assets/user1.jpeg')}
                                resizeMode='contain'
                                style={{
                                    height: 48,
                                    width: 48,
                                    borderRadius: 24,
                                }}
                            />
                            <View style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                width: 12,
                                height: 12,
                                borderRadius: 6,
                                backgroundColor: "#743df9",
                                borderWidth: 2,
                                borderColor: "white",
                            }} />
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontWeight: "bold" }}>Oumayma arfaoui</Text>
                            <Text style={{ color: "#743df9" }}>Online</Text>
                        </View>
                    </View>
                </View>
                <GiftedChat
                    messages={messages}
                    renderInputToolbar={() => null}
                    user={{ _id: 1 }}
                    minInputToolbarHeight={0}
                    renderMessage={renderMessage}
                />
                <View style={styles.inputContainer}>
                    <View style={styles.inputMessageContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Type here...'
                            placeholderTextColor={"black"}
                            value={inputMessage}
                            onChangeText={handleInputText}
                        />
                        <TouchableOpacity
                            onPress={submitHandler}
                            style={styles.sendButton}
                        >
                            <MaterialCommunityIcons
                                name="send"
                                size={22}
                                color={"#743df9"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        height: 72,
        alignItems: 'center',
        justifyContent: "center"
    },
    inputMessageContainer: {
        height: 50,
        width: 350,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#F9F9FF",
        borderRadius: 9,
        alignItems: 'center',
        borderColor: "rgba(128,128,128,.4)",
        borderWidth: 1
    },
    input: {
        color: "black",
        flex: 1,
        paddingHorizontal: 10
    },
    sendButton: {
        backgroundColor: "white",
        padding: 4,
        borderRadius: 999,
        marginHorizontal: 6
    }
});

export default ChatScreen;