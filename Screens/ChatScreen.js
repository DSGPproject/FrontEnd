import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/previous.png')} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text style={styles.chatTitle}>Chatbot</Text>
      </View>
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#0bce83"
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Image source={require('../assets/sendButton.png')} style={styles.sendButtonImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCF7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: windowWidth * 0.04,
    paddingBottom: windowWidth * 0.02,
  },
  backButtonImage: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    marginRight: windowWidth * 0.04,
  },
  chatTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.05,
  },
  messagesContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: windowWidth * 0.7,
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.02,
    marginBottom: windowWidth * 0.025,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0bce83',
    color: '#fff',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  messageText: {
    fontSize: windowWidth * 0.035,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowWidth * 0.025,
  },
  input: {
    borderRadius: windowWidth * 0.03,
    borderStyle: "solid",
    borderColor: '#0bce83',
    borderWidth: windowWidth * 0.003,
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowWidth * 0.025,
    flex: 1,
    backgroundColor: 'transparent',
  },
  sendButton: {
    padding: windowWidth * 0.025,
  },
  sendButtonImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  },
});

export default ChatScreen;
