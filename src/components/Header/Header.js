import React from 'react';
import { Text, View } from 'react-native';


const Header = ({ title }) => {
    return (
        <View>
            <Text>Hello it is header! {title}</Text>
        </View>
    )
}

export default Header;
