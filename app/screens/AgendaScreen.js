import React from 'react';
import { View, Text } from 'react-native';
import EventView from '../components/EventView';

export default class AgendaScreen extends React.Component {
  render() {
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
                return(<Text key={i}>{event.Title}</Text>)
              })
            }
          </View>
        );
      }
      else
      {
        return ( <EventView /> );
      }
  }
}
