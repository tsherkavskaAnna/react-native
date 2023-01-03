import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
  Text,
   View, 
   TextInput,
   TouchableWithoutFeedback,
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   Alert,
   TouchableOpacity,
   ImageBackground,
 } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPasssword(text);
  const onLogin = () => {
    Alert.alert("Credentials", '${name} + ${email} + ${password}');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
    
      <ImageBackground
      style={styles.image}
      source={require("./assets/images/background.jpg")}
      >
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.block}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
      value={name}
      placeholder="Login"
      onChangeText={nameHandler}
      style={styles.input}
      />
      <TextInput
      value={email}
      placeholder="Email"
      onChangeText={emailHandler}
      style={styles.input}
      />
      <TextInput
      value={password}
      placeholder="Password"
      onChangeText={passwordHandler}
      style={styles.input}
      />
      <View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}  onPres={onLogin}>
       <Text style={styles.btnTitle} >Sign in</Text>
      </TouchableOpacity>
      </View>
      </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    marginTop: 263,
    paddingTop: 92,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    width: 375,
    height: 549,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 25,

  },
  title: {
    color: "#20232a",
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500"
  },
  input: {
    marginRight:16,
    marginLeft: 16,
    width: 345,
    height: 44,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 10,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#FF6C00',
    marginTop: 40,
    width: 345,
    height: 44,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: '#FFFFFF',
    fontSize: '16',
  }
});
