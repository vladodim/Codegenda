import React from 'react';
import { View, Text } from 'react-native';
import EventList from './EventList';

export default class EventView extends React.Component {
  render() {
    return (
      <EventList {...this.props}/>
    );
  }
}
