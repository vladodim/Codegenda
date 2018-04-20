import React from 'react';
import { View, Text } from 'react-native';

export default class EventListItem extends React.Component {
  render()
  {
    const {event} = this.props;

    return (
      <View style={{flex:1, alignItems: 'flex-end', justifyContent: 'center'}}>
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{flex:1}}>{event.time}</Text>
          <Text style={{flex:3, flexWrap:'wrap', fontSize: 20}}>{event.Title}</Text>
        </View>
        <Text style={{flex:1}}>{event.Speaker}</Text>
      </View>
    );
  }
}
