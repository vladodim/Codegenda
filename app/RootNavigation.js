import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AgendaScreen from './screens/AgendaScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';

export default TabNavigator({
  Agenda: {
    screen: AgendaScreen,
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
