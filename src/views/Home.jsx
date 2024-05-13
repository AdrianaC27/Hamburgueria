
import React, {useState} from "react";
import{Text,View, Button,StyleSheet, TextInput} from "react-native";
import { Avatar } from "@rneui/themed";

export default ({route, navigation})=>{

    const[user, setUser] = useState(route.params ? route.params:{})
    return( 

        <View style ={style.form}>

            <Text style={{
                textAlign:'center'
                 }}>HAMBURGUER</Text>
                 
            <Text style={{
                textAlign:'center'
                }}>Delicioso Hamburguer de Carne</Text>
            <Text style={{
                textAlign:'center'
                }}>R$ 19,99</Text>

            <Text style ={{
                textAlign:'right',
                
            }}>0</Text>
            
            <Avatar
            
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_960_720.png' }
        }
  />

        <Text style={{
                textAlign:'center'
                 }}>PIZZA</Text>
        <Text style={{
                textAlign:'center'
                 }}>Pizzas Saborosa , diversos Sabores</Text>

        <Text style={{
                textAlign:'center'
                 }}>R$ 29,99</Text>
        <Text style ={{
                textAlign:'right',
              
            }}
            >0</Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/02/26/13/18/pizza-8597940_960_720.png' }}
            />
            <Text style={{
                textAlign:'center'
                 }}>SALADA </Text>

            <Text style={{
                textAlign:'center'
                 }}>Saladas Verdes e refrescante</Text>
            <Text style={{
                textAlign:'center'
                 }}>R$ 9,99</Text>
            <Text style ={{
                textAlign:'right',
                marginTop:10
            }}
            >0</Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2023/08/12/02/41/ai-generated-8184586_960_720.png' }}
            />

            <Text style={{
            textAlign:'center'
            }}>BATATA FRITA</Text>
            
            <Text style={{
            textAlign:'center'
            }}>Batata bem crocante </Text>

            <Text style={{
                textAlign:'center'
            }}>R$ 9,99</Text>
            <Text style ={{
                textAlign:'right',
                marginTop:10
            }}
            >0</Text>
            <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/01/23/08/11/ai-generated-8527044_1280.jpg'}}
            />

        <Text style={{
                textAlign:'center'
                 }}>SORVETES</Text>
            <Text style={{
                textAlign:'center'
                 }}>Refrescantes e saborosos.
                Diversos Sabores 
            </Text >
            <Text style={{
                textAlign:'center'
                 }}>R$ 9,99</Text>
            
            <Text style ={{
                textAlign:'right',
                marginTop:10
            }}
            >0</Text>
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
            textAlign:'center'
        },
        input:{
            height:100,
            borderColor:'gray',
            borderWidth: 1,
            
        }
        
    }
)