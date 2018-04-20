import React from 'react';
import { View, Text } from 'react-native';

export default class EventListItem extends React.Component {
  render()
  {
    const {event} = this.props;

    return (
      <View style={{flex:1, alignItems: 'flex-end', justifyContent: 'center'}}>
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Text style={{flex:1, textAlign:'right'}}>{event.time}</Text>
          <Text style={{flex:5, flexWrap:'wrap', textAlign:'right', fontSize: 20}}>{event.Title}</Text>
        </View>
        <View style={{height:20}} />
        <Text style={{flex:1}}>{event.Speaker}</Text>
        <View style={{height:60}} />
      </View>
    );
  }
}
