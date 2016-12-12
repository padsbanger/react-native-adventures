import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumListItem from './AlbumListItem';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      albums: []
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((data) => {
      this.setState({ loading: false, albums: data.data });
    });
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map((album, key) => <AlbumListItem key={key} album={album} />);
  }

  render() {
    const { loading } = this.state;
    return (
      <ScrollView>
        {loading ? <Text>Loading</Text> : this.renderAlbums()}
      </ScrollView>
    );
  }
}
