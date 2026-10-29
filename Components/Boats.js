import React from 'react';
import {View, Text,Image} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
const icon_name='directions-boat'
const icon_color='red'
const title_color='grey'

const Boats =({name,description,picture})=>{
    return(
        <View>
            <Text></Text>
            <Text>GetBoat-sale</Text>
            <Text style={{fontSize: 50, color: title_color}}>
                Movie:{name}
            <MaterialIcons name={icon_name} size={50} color={icon_color}/>
            </Text>

            <Text style={{color: title_color}}>{description}</Text>
            <Image source={picture}
                   style={{width:400,height:500}} />
        </View>
    )}
export default Boats