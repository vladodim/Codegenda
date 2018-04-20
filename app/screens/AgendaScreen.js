import React from 'react';
import { View, Text } from 'react-native';
import EventView from '../components/EventView';

export default class AgendaScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <EventView />
      </View>
    );
  }
}
