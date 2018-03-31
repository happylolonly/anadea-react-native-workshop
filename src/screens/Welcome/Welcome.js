import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import styled from 'styled-components';

const StyledView = styled.View`
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
        <StyledView style={styles.container}>
            <Text>Hello!</Text>
            <Text style={{ textAlign: 'center' }}>Welcome to my cool React Native app!</Text>
            <Button style={ {marginTop: 150 }}
            onPress={handleClick} 
            title="Go to Events" />
        </StyledView>
    )
    
}

Welcome.navigationOptions = {
    headerTitle: 'Events',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default Welcome;
