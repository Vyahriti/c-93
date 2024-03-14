import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'


export default class HomeScreen extends React.Component {

render(){

    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Home Screen </Text>
            </View>
            <Image source={require('../assets/logo.png')}
            style={{justifyContent: 'center', alignSelf: 'center'}}></Image>
         </View>
    )
}


}
const styles=StyleSheet.create({
    titleContainer: {
        flex:1,
        padding:24
    },
    titleText:{
        marginTop: 20,
        fontSize: 50,
        fontWeight: 'bold',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 4,
        backgroundColor: '#d5bcf0',
        alignSelf: 'center',
        justifyContent: 'center'
    }})