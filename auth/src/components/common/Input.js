import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native'

class Input extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
        <TextInput
          value={this.props.value}
          placeholder={this.props.placeholder}
          autoCorrect={this.props.autocorrect}
          secureTextEntry={this.props.password}
          onChangeText={this.props.onChangeText}
          style={{
          height: 20,
          width: 150
        }}/>
      </View>
    )
  }
}

export {Input}
