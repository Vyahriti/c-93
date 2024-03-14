import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/Home';
import NutritionScreen from '../screens/Nutrition';
import ExerciseScreen from '../screens/Exercise';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    activeColor="#288484"
    inactiveColor="white"
    barStyle={{ backgroundColor: '#ade6e6' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Nutrition') {
          iconName = focused ? 'nutrition' : 'nutrition-outline';}
          else if (route.name==='Exercise'){
            iconName= focused? 'barbell': 'barell-outline'
          }

          return(
            <Ionicons
            name={iconName}
            size={RFValue(25)}
            color={color}
            style={styles.icons}
          />
          )
        },
        activeTintColor: '#ee8249',
        inactiveTintColor: 'black',
      })}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs