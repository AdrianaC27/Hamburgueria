import React from "react";
import{NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "./views/Home";
import UserList from "./views/UserList";



const Stack = createNativeStackNavigator()

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={
                    {
                        headerStyle:{
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight:'bold'
                        }
                    }
                }>
                    <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({navigation})=>{
                        return{
                            Title:"Cardapio",
                            hearderRight:()=>(
                                <Button
                                onPress={()=>navigation.navigate("Home")}
                                type='clear'
                                icon={<Icon name ="add" size={25} color ="white"/>}
                                />
                            )
                        }
                    }}/>

                    <Stack.Screen
                    name="Home"
                    component={Home}
                    />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
