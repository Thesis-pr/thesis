// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
// import React, { useState, useEffect } from "react";
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { GiftedChat } from "react-native-gifted-chat";
// import io from 'socket.io-client';
// import {jwtDecode} from 'jwt-decode'; 

// const socket = io('http://192.168.151.34:3000');

// const ChatScreen = ({ navigation }) => {
//     const [messages, setMessages] = useState([]);
//     const [inputMessage, setInputMessage] = useState("");
//     const [userid, setUserid] = useState(null)
//     // you have to think about a way to pass the userId and the driverId from the request entry

//     // const roomId = `${userId}_${driverId}`
//     useEffect(() => {
//         const initializeUser = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('userToken');
//                 if (token) {
//                     const decodedToken = jwtDecode(token);
//                     setUserid(decodedToken.id);
//                 }
//             } catch (error) {
//                 console.error("Failed to retrieve token:", error);
//             }
//         };
    
//         initializeUser();
//     }, []); // Empty dependency array, runs only once when the component mounts
    
//     useEffect(() => {
//         if (userid && roomId) {
//             socket.emit('join_room', roomId);
    
//             socket.on("received-message", (data) => {
//                 const incomingMessage = {
//                     _id: Math.random().toString(36),
//                     text: data.message,
//                     createdAt: new Date(),
//                     user: { _id: data.senderId }
//                 };
//                 setMessages((previousMessages) => GiftedChat.append(previousMessages, [incomingMessage]));
//             });
    
//             return () => {
//                 socket.off("received-message");
//             };
//         // when the component using usseEffect unmounts, 
//         // clean up function triggered  when the user closes the chat app 
//         // or navigates away from the chat screen 
//         }
//     }, [userId, roomId]); // Runs when userId or roomId changes
    
       
//       // useEffect is used to set up the socket connection and to listen for incoming messages

//     const handleInputText = (text) => {
//         setInputMessage(text);
//     };

//     const renderMessage = (props) => {
//     //    When GiftedChat is rendering the list of messages, it loops through 
//     // each message in the messages array internally. For each message,
//     //  it calls your renderMessage function, passing in a props object that includes the currentMessage
//         const { currentMessage } = props;
//         if (currentMessage.user._id === userid) {
//             return (
//                 <View style={{
//                     flex: 1,
//                     flexDirection: "row",
//                     justifyContent: "flex-end"
//                 }}>
//                     <Bubble
//                         {...props}
//                         wrapperStyle={{
//                             right: {
//                                 backgroundColor: "#743df9",
//                                 marginRight: 12,
//                                 marginVertical: 12,
//                             }
//                         }}
//                         textStyle={{
//                             right: {
//                                 color: "white"
//                             }
//                         }}
//                     />
//                 </View>
//             );
//         } else {
//             return (
//                 <Bubble
//                     {...props}
//                     wrapperStyle={{
//                         left: {
//                             backgroundColor: "#F0F0F0",
//                             marginLeft: 12,
//                             marginVertical: 12,
//                         }
//                     }}
//                 />
//             );
//         }
//     };

//     const submitHandler = () => {
//         if (inputMessage.trim() !== "") {
//             const message = {
//                 _id: Math.random().toString(36),
//                 text: inputMessage,
//                 createdAt: new Date(),
//                 user: { _id: userid }
//             };
//             setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
//             socket.emit("send_message", { message: inputMessage, senderId: userid })
//             setInputMessage("")
//         }
//     };

//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//                 <View style={styles.header}>
//                     <View style={styles.headerContent}>
//                         <TouchableOpacity onPress={() => navigation.goBack()}>
//                             <Image
//                                 source={require('../assets/back.png')}
//                                 resizeMode="contain"
//                                 style={styles.backButton}
//                             />
//                         </TouchableOpacity>
//                         <View style={styles.userImageContainer}>
//                             <Image
//                                 source={require('../assets/user1.jpeg')}
//                                 resizeMode='contain'
//                                 style={styles.userImage}
//                             />
//                             <View style={styles.onlineIndicator} />
//                         </View>
//                         <View style={styles.userInfo}>
//                             <Text style={styles.userName}>Oumayma arfaoui</Text>
//                             <Text style={styles.userStatus}>Online</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <GiftedChat
//                     messages={messages}
//                     renderInputToolbar={() => null}
//                     user={{ _id: userid }}
//                     minInputToolbarHeight={0}
//                     renderMessage={renderMessage}
//                 />
//                 <View style={styles.inputContainer}>
//                     <View style={styles.inputMessageContainer}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder='Type here...'
//                             placeholderTextColor={"black"}
//                             value={inputMessage}
//                             onChangeText={handleInputText}
//                         />
//                         <TouchableOpacity
//                             onPress={submitHandler}
//                             style={styles.sendButton}
//                         >
//                             <MaterialCommunityIcons
//                                 name="send"
//                                 size={22}
//                                 color={"#743df9"}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 16,
//         paddingVertical: 30,
//         backgroundColor: "white",
//         borderBottomWidth: 0.2
//     },
//     headerContent: {
//         flexDirection: "row",
//         alignItems: "center"
//     },
//     backButton: {
//         height: 24,
//         width: 24,
//         tintColor: 'black'
//     },
//     userImageContainer: {
//         position: 'relative',
//         marginHorizontal: 12
//     },
//     userImage: {
//         height: 48,
//         width: 48,
//         borderRadius: 24,
//     },
//     onlineIndicator: {
//         position: "absolute",
//         bottom: 0,
//         right: 0,
//         width: 12,
//         height: 12,
//         borderRadius: 6,
//         backgroundColor: "#743df9",
//         borderWidth: 2,
//         borderColor: "white",
//     },
//     userInfo: {
//         marginLeft: 16
//     },
//     userName: {
//         fontWeight: "bold"
//     },
//     userStatus: {
//         color: "#743df9"
//     },
//     inputContainer: {
//         backgroundColor: "white",
//         height: 72,
//         alignItems: 'center',
//         justifyContent: "center"
//     },
//     inputMessageContainer: {
//         height: 50,
//         width: 350,
//         flexDirection: "row",
//         justifyContent: "center",
//         backgroundColor: "#F9F9FF",
//         borderRadius: 9,
//         alignItems: 'center',
//         borderColor: "rgba(128,128,128,.4)",
//         borderWidth: 1
//     },
//     input: {
//         color: "black",
//         flex: 1,
//         paddingHorizontal: 10
//     },
//     sendButton: {
//         backgroundColor: "white",
//         padding: 4,
//         borderRadius: 999,
//         marginHorizontal: 6
//     }
// });

// export default ChatScreen;



import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios'
import io from 'socket.io-client';


const socket = io('http://192.168.151.34:3000');

const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [userid, setUserid] = useState(null);
    const [roomId, setRoomId] = useState(null);
    // const [selectedImages, setSelectedImages] = useState([])
    const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions()
    const [cameraPermissionResponse, requestCameraPermission] = ImagePicker.useCameraPermissions()

    useEffect(() => {
        const selectUser = async () => {
            const selectedUserId = Math.random() < 0.5 ? '1' : '2';
            setUserid(selectedUserId);
            setRoomId('room_1_2'); 
        };
        selectUser();
    }, []);

    useEffect(() => {
        if (userid && roomId) {
            socket.emit('join_room', roomId)
            // axios.get("http://192.168.151.34:3000/message/getAll/1").then((res)=>{
            //     // console.log("hello", res.data)

            //     const oldMessages = formatMessages(res.data)
            //     setMessages(previousMessages => GiftedChat.append(previousMessages, oldMessages));
            // }).catch((err)=>{
            //     console.log(err)
            // })
    
            socket.on("received-message", (data) => {
                if (data.image) {
                    const incomingImageMessage = {
                        _id: data._id || Math.random().toString(36),
                        image: data.image,
                        createdAt: new Date(data.createdAt),
                        user: { _id: data.senderId }
                    };
                    setMessages(previousMessages => GiftedChat.append(previousMessages, [incomingImageMessage]));
                } else {
                    const incomingMessage = {
                        _id: data._id || Math.random().toString(36),
                        text: data.message,
                        createdAt: new Date(data.createdAt),
                        user: { _id: data.senderId }
                    };
                    setMessages(previousMessages => GiftedChat.append(previousMessages, [incomingMessage]));
                }
            });
    
            return () => {
                socket.off("received-message");
            };
        }
    });
    

    const handleInputText = (text) => {
        setInputMessage(text);
    };

    const renderMessage = (props) => {
        const { currentMessage } = props;
        if (currentMessage.image) {
            return (
                <View style={[
                    currentMessage.user._id === userid 
                        ? styles.rightImageMessageContainer 
                        : styles.leftImageMessageContainer
                ]}>
                    <Image
                        source={{ uri: currentMessage.image }}
                        style={styles.imageMessage}
                        
                    />
                </View>
            );
        }
    
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: "#743df9",
                        marginRight: 12,
                        marginVertical: 12,
                    },
                    left: {
                        backgroundColor: "#F0F0F0",
                        marginLeft: 12,
                        marginVertical: 12,
                    }
                }}
                textStyle={{
                    right: {
                        color: "white"
                    }
                }}
            />
        );
    };
    
    const submitHandler = () => {
        if (inputMessage.trim() !== "") {
            const message = {
                _id: Math.random().toString(36),
                text: inputMessage,
                createdAt: new Date(),
                user: { _id: userid }
            };
            socket.emit("send_message", { 
                _id: message._id,
                message: inputMessage, 
                senderId: userid, 
                roomId,
                createdAt: message.createdAt
            });
            setInputMessage("");
        }
    }

    const submitImage = (imageUri) => {
        const imageMessage = {
            _id: Math.random().toString(36),
            image: imageUri,
            createdAt: new Date(),
            user: { _id: userid }
        };
        
        socket.emit("send_image", {
            _id: imageMessage._id,
            image: imageUri,
            senderId: userid,
            roomId,
            createdAt: imageMessage.createdAt
        });
    
    };

    const handleGalleryClick = async () => {
        if (mediaLibraryPermissionResponse.status !== 'granted') {
            const { status } = await requestMediaLibraryPermission();
            if (status !== 'granted') {
                alert("Sorry, we need media library permissions to make this work!");
                return;
            }
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.5,  
            base64: true,  
        });

        if (!result.canceled) {
            const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
            submitImage(base64Image);
        }
    };

    const handleCameraClick = async () => {
        if (cameraPermissionResponse.status !== 'granted') {
            const { status } = await requestCameraPermission();
            if (status !== 'granted') {
                alert("Sorry, we need camera permissions to make this work!");
                return;
            }
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.5, 
            base64: true,  
        });

        if (!result.canceled) {
            const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
            submitImage(base64Image);
        }
    }
    // const formatMessages = (databasemess) => {
    //     return databasemess.map(message => ({
    //       _id: message.id,
    //       text: message.content,
    //       createdAt: new Date(message.createdAt),
    //       user: {
    //         _id: message.userId,
    //       },
    //     }));
    //   };
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
                            <Text style={styles.userName}>Oumayma Arfaoui</Text>
                            <Text style={styles.userStatus}>Online</Text>
                        </View>
                    </View>
                </View>
                <GiftedChat
                    messages={messages}
                    renderInputToolbar={() => null}
                    user={{ _id: userid }}
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
                            onPress={handleGalleryClick}
                            style={styles.galleryButton}
                            >
                           <Entypo name="image" size={22} color="#743df9" />
                            </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleCameraClick}
                            style={styles.cameraButton}
                            >
                            <AntDesign name="camera" size={22} color="#743df9" />
                            </TouchableOpacity>
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
    },
    cameraButton: {
        backgroundColor: "white",
        padding: 4,
        borderRadius: 999,
        marginHorizontal: 6
    },
    galleryButton: {
        backgroundColor: "white",
        padding: 4,
        borderRadius: 999,
        marginHorizontal: 6
    },
    rightImageMessageContainer: {
        backgroundColor: "#743df9", 
        marginRight: 12,
        marginVertical: 12,
        borderRadius: 8,
        alignSelf: 'flex-end', 
    },
    leftImageMessageContainer: {
        backgroundColor: "#F0F0F0",
        marginLeft: 12,
        marginVertical: 12,
        borderRadius: 8,
        alignSelf: 'flex-start', 
    },
    imageMessage: {
        width: 150, 
        height: 150, 
        borderRadius: 8,
    },
});

export default ChatScreen;
