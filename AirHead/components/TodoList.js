import React from 'react';
import { View, FlatList } from 'react-native';
import TodoListItem from '../components/TodoListItem';

export default class TodoList extends React.Component {
  _keyExtractor = (item) => item.id

  rgbToHex = (rgb) => { 
    var hex = (Number(rgb) % 255).toString(16);

    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
  };

  fullColorHex = (r,g,b) => {   
    var red   = this.rgbToHex(r);
    var green = this.rgbToHex(g);
    var blue  = this.rgbToHex(b);
    return red+green+blue; // 1098c2 : 6 digit
  };

  _renderItem = ({item, index}) => {
    const r = Math.floor(0.3135 * index);
    const g = Math.floor(2.98 * index);
    const b = Math.floor(3.8 * index);
    let startColor = this.fullColorHex(Number(16+r), Number(152+g), Number(194+b));
    
    return (
      <TodoListItem 
        todo={item} 
        startColor={`#${startColor}`}
        endColor={'#e0ecf0'}
        onItemPress={()=>{this.onTodoItemPressed(index)}}
      />
    )
  };

  render(){
    return (
      <View>
        <FlatList 
          data={this.props.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

  onTodoItemPressed = (indexOfTodoItem) => {
    this.props.onTodoUpdate(indexOfTodoItem);
    this.startColor = this.props.startColor;
  }
}