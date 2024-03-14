import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, TextInput} from 'react-native'
import axios, { formToJSON } from 'axios';

let response1,response2
let fullresponse,alldata,response,response3,tweight,healthLabels

const options = {
    method: 'GET',
  url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
  params: {
    ingr: this.state.ingr ,
    'nutrition-type': 'cooking'
  },
  headers: {
    'X-RapidAPI-Key': 'a3ce41db6bmsh4d0152bd2b3c4ddp1f4d82jsn1d842efac78b',
    'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
  }
};

try {
  
	const response = await axios.request(options);
 	console.log(response.data);
  fullresponse=response.data
  response1=JSON.stringify(response.data)
  response2=response.data.uri
  response3=response.data.calories
  tweight= response.data.healthLabels
  // alldata =JSON.stringify(fullresponse)
  // console.log(JSON.stringify(fullresponse));
  // console.log(("player country: "),response1)
  // console.log(("player name: "),response.data[0].player.name)
  // console.log(("age: "),response.data[0].player.age)
} catch (error) {
	console.error(error);
}


export default class NutritionScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ingr: ''
		};
	}


render(){
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Nutrition Information </Text>
            </View>
            <Text style={{marginTop: 15, fontColor: 'black', fontSize: 30, alignSelf: 'center'}}> 
                Below, enter an ingredient used in a food. Then nutrition facts about the food will appear!  
            </Text>
            <TextInput 
                style={styles.input}
                placeholder= 'Enter Ingredient'
                onChangeText={(text) => this.setState({ ingr: text })}/>
            <Text style={{fontSize: 25, fontColor: 'black', alignSelf: 'center'}}> 
                The number of calories are: {response3}. The health labels are: {tweight}
            </Text>
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
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 4,
    padding: 10,
    alignSelf: 'center'
  },
})
