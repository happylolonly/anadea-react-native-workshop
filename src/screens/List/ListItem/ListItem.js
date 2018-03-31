import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';


const propTypes = {
    // id
    // title
    // startDate
    // startTime
}

const ListItem = ({ id, title, startDate, startTime, onClick }) => {
    return (
        <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{startDate}</Text>
            <Text>{startTime}</Text>
            <Button onPress={() => {onClick(id)}} title="Go to event" />
        </View>
    )
}

export default ListItem;
