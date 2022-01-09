import React, { Component } from 'react';
import { Button, View } from 'react-native';


class ReadComponent extends Component {
    render() {
        return (
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Button
              title="Read"
              onPress={() => this.props.navigation.navigate('ReadComponent')}
              color="#5219ac"
            />
          </View>
        );
    }  
}
export default ReadComponent;