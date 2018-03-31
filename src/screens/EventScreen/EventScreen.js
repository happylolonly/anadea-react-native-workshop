import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Event from './Event/Event';

import axios from 'axios';


class EventScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Event info',
    };

    constructor() {
        super();

        this.state = {
            event: [],
        };        
    }

    componentDidMount() {
        this.loadEvent();
    }

    async loadEvent() {
        const events = await axios.get('https://3ebbf85c.ngrok.io/events');

        const { id } = this.props.navigation.state.params;

        const data = events.data.filter(item => item._id === id );

        this.setState({ event: data[0] });
    }

    render() {
        const { title, address, start_time, finish_time, start_date, fihish_date, hero_image_url } = this.state.event;
        
        return (
            <View>
                <Event
                    title={title}
                    startDate={start_date}
                    startTime={start_time}
                    fihishDate={fihish_date}
                    finishTime={finish_time}
                    image={hero_image_url}

                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

export default EventScreen;

 // {
//     "_id": "5abb8903293c076ea7a1e750",
//     "uri": "/management-3-0-practical-course-for-leaders-and-facilitators--2",
//     "title": "Management 3.0 - Practical Course for leaders and facilitators",
//     "address": "Минск, ул Октябрьская 16а к3 ",
//     "start_time": "10:00",
//     "finish_time": "18:00",
//     "start_date": "2018-03-29T21:00:00.000Z",
//     "finish_date": "2018-03-30T21:00:00.000Z",
//     "hero_image_url": "https://picsum.photos/600/400"
// }
