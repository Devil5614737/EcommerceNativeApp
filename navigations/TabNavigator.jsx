
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppLoading from "expo-app-loading";

export const TabNavigator = () => {
  let [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  const Tab = createBottomTabNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  
  return (
 

        <Tab.Navigator
      
        screenOptions={{headerShown:false,
        tabBarActiveTintColor:"black",
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{
          height: 70,
          width: '100%',
            backgroundColor:"#F6F6F6"
        },
        tabBarLabelStyle:{
          fontSize:15,
          fontFamily:"Poppins_500Medium"
        }
       }} 
       

       >
          <Tab.Screen
           name='Home'
            component={ProductsScreen}
            options={{
              tabBarIcon:({size,color})=><Entypo name="home" color={color} size={size}/>
            }}
            />
          <Tab.Screen name='Cart' component={CartScreen}
          options={{
            tabBarIcon:({size,color})=><Foundation name="shopping-cart" size={size} color={color} />
            
          }}
          />
          <Tab.Screen  name='Account' component={AccountScreen}
          options={{
            tabBarIcon:({size,color})=><MaterialCommunityIcons name="account-circle" size={size} color={color} />
            
          }}
          />
         
   
        </Tab.Navigator>
     

  );
};
