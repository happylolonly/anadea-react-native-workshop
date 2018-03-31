import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, StyleSheet } from 'react-native';
import moment from 'moment';


const propTypes = {
    // id
    // title
    // startDate
    // startTime
}

const ListItem = ({ id, title, startDate, startTime, onClick }) => {
    return (
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text style={{ 'textAlign': 'center' }}>{title}</Text>
            <Text>{moment(startDate).format('DD MM YYYY')} at {startTime}</Text>
            <Button onPress={() => {onClick(id)}} title="Go to event" />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 30,
      justifyContent: 'center',
    },
  });

export default ListItem;
