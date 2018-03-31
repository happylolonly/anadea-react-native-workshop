import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

import moment from 'moment';
import styled from 'styled-components';



const propTypes = {
    // id
    // title
    // startDate
    // startTime
}

const StyledView = styled.View`
    margin-top: 100px;
    justify-content: center;
    alignItems: center;
    
`;

const Event = ({ title, startDate, startTime, finishTime, finishDate, image, address, navigation }) => {
    return (
        <StyledView>
            <Text style={{ textAlign: 'center' }}>{title}</Text>

            <Text>Start {moment(startDate).format('DD MM YYYY')} at {startTime}</Text>

            <Text>Finish {moment(finishDate).format('DD MM YYYY')} at {finishTime}</Text>

            <Text>{address}</Text>

            <Image
                style={{width: 200, height: 100 }}
                source={{ uri: image }}
                
            />

            <Button
                onPress={() => navigation.navigate('List')}
                title="Go back"
            />

            

            
        </StyledView>
    )
}

export default Event;

