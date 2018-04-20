import React from 'react';
import { SafeAreaView } from 'react-native';
import EventView from '../components/EventView';

export default class AgendaScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <EventView {...this.props} />
      </SafeAreaView>
    );
  }
}
