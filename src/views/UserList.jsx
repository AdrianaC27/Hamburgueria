import React from "react";
import{Text,View,FlatList} from "react-native";
import user from "../data/user";
import { ListItem, Avatar, ThemeProvider,Icon} from '@rneui/themed';

export default props=>{
  
    return(
        <View>

        
        <ListItem bottomDivider>
             <Avatar
            
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_960_720.png' }
        }
  />
            <ListItem.Content>
            <ListItem.Title>HAMBURGUER </ListItem.Title>
            <ListItem.Subtitle>Delicioso Hamburguer de Carne</ListItem.Subtitle>
            <ListItem.Subtitle>R$ 19,99</ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="remove-circle"  color="red" />
            <Text>0</Text>
            <Icon name="add-circle"  color="red" />
        </ListItem>
        
        <ListItem bottomDivider>
        <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/02/26/13/18/pizza-8597940_960_720.png' }}
        
  />
            <ListItem.Content>
            <ListItem.Title>PIZZA </ListItem.Title>
            <ListItem.Subtitle>Pizzas Saborosa , diversos Sabores</ListItem.Subtitle>
            <ListItem.Subtitle>R$ 49,99</ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="remove-circle"  color="red" />
            <Text>0</Text>
            <Icon name="add-circle"  color="red" />

        </ListItem >

        <ListItem bottomDivider >
        <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2023/08/12/02/41/ai-generated-8184586_960_720.png' }}
            />

            <ListItem.Content>
            <ListItem.Title>Salada </ListItem.Title>
            <ListItem.Subtitle>Saladas Verdes e refrescante</ListItem.Subtitle>
            <ListItem.Subtitle>R$ 9,99</ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="remove-circle"  color="red" />
            <Text>0</Text>
            <Icon name="add-circle" color="red" />

        </ListItem>

        <ListItem bottomDivider >
        <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/01/23/08/11/ai-generated-8527044_1280.jpg'}}
            />

            <ListItem.Content>
            <ListItem.Title>Batata FRITA </ListItem.Title>
            <ListItem.Subtitle>Deliciosas e Crocantes</ListItem.Subtitle>
            <ListItem.Subtitle>R$ 19,99</ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="remove-circle"  color="red" />
            <Text>0</Text>
            <Icon name="add-circle"  color="red" />

        </ListItem>

        <ListItem bottomDivider >
        <Avatar
            size={50}
            rounded
            source={{ uri:'https://cdn.pixabay.com/photo/2024/04/28/15/13/ai-generated-8725738_1280.jpg'}}
            />

            <ListItem.Content>
            <ListItem.Title>SORVETES </ListItem.Title>
            <ListItem.Subtitle>Deversos Sabores</ListItem.Subtitle>
            <ListItem.Subtitle>R$ 9,99</ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="remove-circle"  color="red" />
            <Text>0</Text>
            <Icon name="add-circle"  color="red" />

        </ListItem>

        


        

        
        </View>
        
       
    )
    
  }

  

