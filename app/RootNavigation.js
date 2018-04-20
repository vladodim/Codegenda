import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import PlaceholderScreen from './screens/PlaceholderScreen';
import StackedAgenda from './StackedAgenda';


export default TabNavigator({
  Agenda: {
    screen: StackedAgenda,
    navigationOptions: {
      tabBarLabel: 'Agenda'
    }
  },
  Workshops: {
    screen: props => <PlaceholderScreen {...props} title="Workshops"/> ,
    navigationOptions: {
      tabBarLabel: 'Workshops'
    }
  },
  Corner: {
    screen: props => <PlaceholderScreen {...props} title="Community Corner"/> ,
    navigationOptions: {
      tabBarLabel: 'Community Corner'
    }
  },
  Info: {
    screen: props => <PlaceholderScreen {...props} title="Info, Contact and More"/> ,
    navigationOptions: {
      tabBarLabel: 'Info'
    }
  }
})
