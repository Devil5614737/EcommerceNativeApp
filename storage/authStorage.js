import AsyncStorage from '@react-native-async-storage/async-storage';


const key='user'

const setUser = async (value) => {
    try {
      const data = JSON.stringify(value)
      await AsyncStorage.setItem(key, data)
    } catch (e) {
      console.log(error)
    }
  }


  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value)
     
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }
  

const removeUser=async()=>{
    try{
        await AsyncStorage.removeItem(key)
    }catch(e){
        console.log(e)
    }
}

  export default {setUser,getUser,removeUser}