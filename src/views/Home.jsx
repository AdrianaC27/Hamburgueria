
import React, {useState} from "react";
import{Text,View, Button,StyleSheet, TextInput} from "react-native";
import { Avatar } from "@rneui/themed";

export default ({route, navigation})=>{

    const[user, setUser] = useState(route.params ? route.params:{})
    return( 

        <View style ={style.form}>

            <Text>Hamburguer</Text>
            <Text>Delicioso Hamburguer de Carne</Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_960_720.png' }}
  />

        <Text>Pizza</Text>
        <Text>Pizzas Saborosa , diversos Sabores</Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/02/26/13/18/pizza-8597940_960_720.png' }}
            />
            <Text>Salada </Text>
            <Text>Saladas Verdes e refrescante</Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2023/08/12/02/41/ai-generated-8184586_960_720.png' }}
            />

        <Text>Batata Frita</Text>
            <Text>Batata bem crocante </Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/01/23/08/11/ai-generated-8527044_1280.jpg'}}
            />

        <Text>Sorvetes</Text>
            <Text>Refrescantes e saborosos.
                Diversos Sabores 
            </Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/04/28/15/13/ai-generated-8725738_1280.jpg'}}
            />
        

        </View>

        
        
        
    )
}

const style = StyleSheet.create(
    {
        form:{
            padding:20,
        },
        input:{
            height:100,
            borderColor:'gray',
            borderWidth: 1,
            marginBottom: 30,
        }
    }
)