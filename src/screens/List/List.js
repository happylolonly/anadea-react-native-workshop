import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import axios from 'axios';

import ListItem from './ListItem/ListItem'

class List extends Component {
    static navigationOptions = {
        headerTitle: 'Events',
    };

    constructor() {
        super();

        this.state = {
            events: [],
            error: null
        };

        this.handleListItemClick = this.handleListItemClick.bind(this);
    }

    componentDidMount() {
        this.loadEvents();
    }

    async loadEvents() {

        try {
            const events = await axios.get('https://3ebbf85c.ngrok.io/events');
    
    
            this.setState({ events: events.data });

        } catch (e) {
            this.setState({ error: JSON.stringify(e) });
        }
    }

    handleListItemClick(id) {
        this.props.navigation.navigate('Event', {
            id: id
        });
    }

    renderList() {
        return (
            <FlatList

                data={this.state.events}
                renderItem={({item}) => {

                    const { _id: id, title, start_date, start_time } = item;

                        return (
                            <ListItem
                                key={id}

                                id={id}
                                title={title}
                                startDate={start_date}
                                start_time={start_time}
                                onClick={this.handleListItemClick}
                            />
                        )

                }}
            />
        )
    }

    render() {
        return (
            <View>
                <Text>List screen!</Text>
                {this.renderList()}
                {this.state.error && <Text>{this.state.error}</Text>}
            </View>
        )
    }
}

export default List;
