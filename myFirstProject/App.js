import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
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
  const [fontsLoader] = useFonts({
    Roboto_400Regular, Roboto_500Medium
  })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPasssword(text);
  
  if(!fontsLoader) {
    return <AppLoading/>
  }
  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
    Keyboard.dismiss();
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
        <View style={{ ...styles.block, marginTop: isShowKeyboard ? 150 : 263 }}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
      value={name}
      placeholder="Login"
      onChangeText={nameHandler}
      onFocus={() => setIsShowKeyboard(true)}
      style={styles.input}
      />
      <TextInput
      value={email}
      placeholder="Email"
      onChangeText={emailHandler}
      onFocus={() => setIsShowKeyboard(true)}
      style={styles.input}
      />
      <TextInput
      value={password}
      placeholder="Password"
      onChangeText={passwordHandler}
      onFocus={() => setIsShowKeyboard(true)}
      secureTextEntry={true}
      style={styles.input}
      />
      <View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}  onPress={onLogin}>
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
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  block: {
    marginTop: 263,
    paddingTop: 92,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    width: 390,
    height: 590,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 25,

  },
  title: {
    color: "#20232a",
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    fontFamily: 'Roboto_400Regular',
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
    marginHorizontal: 16,
    width: 345,
    height: 44,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: '#FFFFFF',
    fontSize: '16',
    fontFamily: "Roboto_500Medium",
  }
});
