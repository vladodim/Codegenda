import React from 'react';
import { View, Text } from 'react-native';
import TitledPlaceholderView from '../components/TitledPlaceholderView';

export default class PlacholderScreen extends React.Component {
  render() {
    return (
      <TitledPlaceholderView title={this.props.title}/>
    );
  }
}
