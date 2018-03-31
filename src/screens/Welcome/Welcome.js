import React from 'react';
import { Text, View, Button } from 'react-native';

import styled from 'styled-components';

const StyledView = styled.View`
  text-align: center;
  width: 60%;
  margin: 10px auto;
`;

// const StyledView = styled.View`
//   text-align: center;
//   width: 60%;
//   margin: 10px auto;
// `;

const Welcome = ({ navigation }) => {
    // static navigationOptions = {
    //     headerTitle: 'Events',
    // };

    const handleClick = () => {
        navigation.navigate('List');

    }


    return (
        <StyledView>
            <Text>Hello!</Text>
            <Text>Welcome to my cool React Native app!</Text>
            <Button style={ {marginTop: 150 }}
            onPress={handleClick} 
            title="Go to Events" />                
        </StyledView>
    )
    
}

Welcome.navigationOptions = {
    headerTitle: 'Events',
};


export default Welcome;
