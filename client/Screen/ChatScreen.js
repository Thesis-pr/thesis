import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import io from 'socket.io-client';

const socket = io('http://192.168.151.34:3000');

const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const generatedUserId = Math.random().toString(36).substring(7);
        setUserId(generatedUserId);

        socket.emit('user_connected', { userId: generatedUserId });

        socket.on("received-message", (data) => {
            console.log("Received message:", data);
            const incomingMessage = {
                _id: Math.random().toString(36),
                text: data.message,
                createdAt: new Date(),
                user: { _id: data.senderId }
            };
            setMessages((previousMessages) => GiftedChat.append(previousMessages, [incomingMessage]));
        });

        return () => {
            socket.off("received-message");
        };
    }, []);

    const handleInputText = (text) => {
        setInputMessage(text);
    };

    const renderMessage = (props) => {
        const { currentMessage } = props;
        if (currentMessage.user._id === userId) {
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
        } else {
            return (
                <Bubble
                    {...props}
                    wrapperStyle={{
                        left: {
                            backgroundColor: "#F0F0F0",
                            marginLeft: 12,
                            marginVertical: 12,
                        }
                    }}
                />
            );
        }
    };

    const submitHandler = () => {
        if (inputMessage.trim() !== "") {
            const message = {
                _id: Math.random().toString(36),
                text: inputMessage,
                createdAt: new Date(),
                user: { _id: userId }
            };
            setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
            socket.emit("send_message", { message: inputMessage, senderId: userId })
            setInputMessage("")
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/back.png')}
                                resizeMode="contain"
                                style={styles.backButton}
                            />
                        </TouchableOpacity>
                        <View style={styles.userImageContainer}>
                            <Image
                                source={require('../assets/user1.jpeg')}
                                resizeMode='contain'
                                style={styles.userImage}
                            />
                            <View style={styles.onlineIndicator} />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Oumayma arfaoui</Text>
                            <Text style={styles.userStatus}>Online</Text>
                        </View>
                    </View>
                </View>
                <GiftedChat
                    messages={messages}
                    renderInputToolbar={() => null}
                    user={{ _id: userId }}
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
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: "white",
        borderBottomWidth: 0.2
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    backButton: {
        height: 24,
        width: 24,
        tintColor: 'black'
    },
    userImageContainer: {
        position: 'relative',
        marginHorizontal: 12
    },
    userImage: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    onlineIndicator: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#743df9",
        borderWidth: 2,
        borderColor: "white",
    },
    userInfo: {
        marginLeft: 16
    },
    userName: {
        fontWeight: "bold"
    },
    userStatus: {
        color: "#743df9"
    },
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