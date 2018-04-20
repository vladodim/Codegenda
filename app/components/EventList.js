import React from 'react';
import { View, Text } from 'react-native';

const EventList = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Event 1</Text>
      <Text>Event 2</Text>
      <Text>Event 3</Text>
      <Text>Event 4</Text>
      <Text>Event 5</Text>
    </View>
  )
}

export default EventList;
