import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends Component {

  componentWillMount() {
    const data = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = data.cloneWithRows(this.props.libraries);
  }

  renderRow() {

  }

  render() {
    return (
      <ListView
        renderRow={this.renderRow}
        dataSource={this.dataSource}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    libaries: state.libraries
  };
}

export default connect(mapStateToProps)(LibraryList);
