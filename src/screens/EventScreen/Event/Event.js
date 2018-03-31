import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, Image } from 'react-native';

import moment from 'moment';


const propTypes = {
    // id
    // title
    // startDate
    // startTime
}

const Event = ({ title, startDate, startTime, finishTime, finishDate, image, address, navigation }) => {
    return (
        <View style={{ 'textAlign': 'center' }}>
            <Text>{title}</Text>

            <Text>Start {moment(startDate).format('DD MM YYYY')} at {startTime}</Text>
            <Text>Finish {moment(finishDate).format('DD MM YYYY')} at {finishDate}</Text>

            <Image
                style={{width: 66, height: 58}}
                source={{ uri: image}}
            />

            <Text>{address}</Text>

            <Button
                onPress={() => navigation.navigate('List')}
                title="Go back"
            />
        </View>
    )
}

export default Event;
