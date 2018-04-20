import React from 'react';
import { View, Text } from 'react-native';

export default class EventList extends React.Component {
  render()
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        { this._renderEvents() }
      </View>
    );
  }

  _renderEvents = () => {
    if (this.props.events)
    {
      console.log(this.props.events.lenght);

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {
            this.props.events.map( (event, i) => {
              return(
                <Text key={i}>{event.Title}</Text>
              )
            })
          }
        </View>
      );
    }
    else
    {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Event 1</Text>
          <Text>Event 2</Text>
          <Text>Event 3</Text>
          <Text>Event 4</Text>
          <Text>Event 5</Text>
        </View>
      );
    }
  }
}
