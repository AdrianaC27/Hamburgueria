
import React, {useState} from "react";
import{Text,View, Button,StyleSheet, TextInput} from "react-native";
import { Avatar } from "@rneui/themed";

export default ({route, navigation})=>{

    const[user, setUser] = useState(route.params ? route.params:{})
    return( 

        <View style ={style.form}>

            <Text>Hamburguer</Text>
            <Avatar
    size={32}
    rounded
    source={{ uri: user.avatarURL }}
  />

        </View>
        
    )
}

const style = StyleSheet.create(
    {
        form:{
            padding:12,
        },
        input:{
            height:40,
            borderColor:'gray',
            borderWidth: 1,
            marginBottom: 15,
        }
    }
)