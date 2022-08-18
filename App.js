
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductContextProvider } from './Context/ProductsContext';
import Login from './screens/Login';
import { useEffect, useState } from 'react';
import {authContext as AuthContext} from './Context/authContext';
import Storage from './storage/authStorage';


import AppLoading from 'expo-app-loading'
import Main from './screens/Main';




export default function App() {
const[user,setUser]=useState();
const[isReady,setIsReady]=useState(false);
 




const getData=async()=>{
  const result= await Storage.getUser();
  if(!result) return ;
  setUser(result);
}







if(!isReady){
  return (
    <AppLoading
     startAsync={getData} 
    onFinish={()=>setIsReady(true)}
    onError={console.warn}
    />
  )
}


  
  const Stack = createNativeStackNavigator();


  return (
  <AuthContext.Provider value={{user,setUser}}>
      <ProductContextProvider>
   <NavigationContainer >
    
      <Stack.Navigator screenOptions={{headerShown:false,animation:"fade_from_bottom"}} >
        {user? 
         <Stack.Screen name="Main" component={Main} />:  

         
           <Stack.Screen name="Login" component={Login} />
           }
       
         
   
      </Stack.Navigator>
    </NavigationContainer>



    </ProductContextProvider>
  </AuthContext.Provider>

  );
}


