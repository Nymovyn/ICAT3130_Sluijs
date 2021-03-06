import React from 'react';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';


const TodoListItem = (props) => {
  const onTodoItemPress = () => {
    props.onItemPress();
  };

  return (
    <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: [props.startColor, props.endColor],
          start: [0.1, 0],
          end:   [1, 0],
        }}
        title={props.todo.title}
        titleStyle={{ color: 'white', fontWeight: 'bold' }}
        chevronColor="white"
        containerStyle={{marginTop: 2}}
        onPress={onTodoItemPress}
    />
  )
};

export default TodoListItem;