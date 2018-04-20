import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

import AgendaScreen from './screens/AgendaScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import { agenda } from './resources/agenda';

const StackedAgenda = StackNavigator({
  Agenda: {
    screen: props => <AgendaScreen {...props} events={agenda} style={{flex:1}}/>,
    navigationOptions:({navigation}) => ({
            title: "Agenda",
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
  },
  Detail: {
    screen: PlaceholderScreen,
    navigationOptions: props => ({
      title: "Details",
    })
  },
});

export default StackedAgenda;
