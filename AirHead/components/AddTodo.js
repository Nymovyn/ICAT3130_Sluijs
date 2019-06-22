
import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class AddTodo extends React.Component {
  state = {
    inputText: ""
  }

  render(){
    return (
      <View style={styles.container}>
        <Input
          containerStyle = {{flex: 1}}
          placeholder = "Type new todo"
          leftIcon = {{type: 'font-awesome', name: 'plus', size: 20}}
          leftIconContainerStyle = {{paddingRight: 10}}
          onChangeText={(text)=> this.setState({inputText: text})}
          value={this.state.inputText}
          returnKeyType="done"
          onSubmitEditing={this.onEnterPress}
        />
        <Button
          buttonStyle={{backgroundColor: "#1098c2"}}
          title="ADD"
          onPress={this.onAddPress}  
        />
      </View>
    );
  }

  onEnterPress = (event) => {
    this.onAddPress();
  }

  onAddPress = () => {
    const cleanString = this.state.inputText.trim();

    if (cleanString.length == 0){
    }
    else{
      this.setState({inputText: ""});
      this.props.onTodoAdd(cleanString);
      Keyboard.dismiss();
    }

  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

