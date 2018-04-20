import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import EventListItem from './EventListItem';

export default class EventList extends React.Component {
  render()
  {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1, paddingVertical: 20, paddingHorizontal: 15}}>
          { this._renderEvents() }
        </ScrollView>
    );
  }

  _renderEvents = () => {
    if (this.props.events)
    {
      console.log(this.props.events.lenght);

      return (
        <View style={{flex: 1}}>
          {
            this.props.events.map( (event, i) => {
              return(
                <EventListItem key={i} event={event} />
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
