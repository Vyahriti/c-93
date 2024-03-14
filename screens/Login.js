import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	Image,
	TextInput,
	Alert,
	TouchableOpacity,
	Text,
} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { RFValue } from 'react-native-responsive-fontsize';


export default class LoginScreen extends React.Component {
constructor(props){
    super(props)
    this.state={
        email: '',
        password: '',
        userSignedIn: false
    }
}

signIn = async (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            this.props.navigation.replace('Home');
        })
        .catch((error) => {
            Alert.alert(error.message);
        });
};


render(){
    SplashScreen.hideAsync();
    const { email, password } = this.state;
    return(
        <View style= {styles.container}>
            <Text style={styles.titleText}>Log In</Text>
            <TextInput 
                style={styles.input}
                placeholder= 'enter email'
                onChangeText={(text) => this.setState({ email: text })}
                autoFocus
            />
            <TextInput 
                style={styles.input}
                placeholder= 'enter password'
                onChangeText={(text) => this.setState({ password: text })}
                autoFocus
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.signIn(email, password), console.log('logged in')}>
                <Text> Log In </Text>    
            </TouchableOpacity>
        </View>
    )
}


}

const styles= StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: '#15193c',
    alignItems: 'center',
    justifyContent: 'center',
 },
 titleText:{
    fontSize: 30,
    fontColor: 'black',
    alignSelf: 'center',
},
 input:{
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 10
 },
 button:{
alignSelf: 'center',
borderColor: 'black',
borderWidth: 4,
borderRadius: 10,
flexDirection: 'row',
height: 30
 }

})