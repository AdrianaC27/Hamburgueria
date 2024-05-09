import React from "react";
import{Text,View,FlatList} from "react-native";
import user from "../data/user";
import { ListItem, Avatar, ThemeProvider} from '@rneui/themed';

export default props=>{
  function getUserItem({item:user}){
    return(
        <ThemeProvider>
            <ListItem bottomDivider
            onPress={() =>{ props.navigation.navigate('Home')
            }}>
                <Avatar source ={{uri:user.avatatURL}}/>

                
                
            </ListItem>
        </ThemeProvider>
    )
  }

  return (
    <View>
        <FlatList
            keyExtractor={user => user.id.toString()}
            data={user}
            renderItem={getUserItem}
            />
    </View>
 )

}