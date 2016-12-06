import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumListItem extends Component {
  render() {
    const { album } = this.props;
    return (
      <Card>
        <CardSection>
        <Text>{album.title}</Text>
        </CardSection>
      </Card>
    );
  }
}
