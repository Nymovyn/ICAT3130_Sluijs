import React from 'react';
import { View, StyleSheet } from 'react-native';
import uuid4 from 'uuid/v4';
import model from '../model/Model';

export default class TodayScreen extends React.Component {
  state = {
    data: [],
  };
  
  static navigationOptions = ( {navigation} ) => ({
    title: 'Pocket items:',
  });

  componentDidMount(){
    model.readTodoList('active').then((todoList) => {
      const sortedTodoList = todoList.sort((a, b) => {
        return a.created < b.created;
      });
      this.setState({
        data: sortedTodoList
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  onTodoAdd = (text) => {
    const todoItem = {
      id: uuid4(),
      title: text,
      created: Date.now(),
      status: TODOSTATUS.active
    }
    this.setState((prevState) => ({
      data: [todoItem, ...prevState.data]
    }), () => {
        model.createTodo(todoItem);
      }
    ); 
  };

  onTodoUpdate = (indexOfTodoItem) => {
    let allData = [...this.state.data];
    allData[indexOfTodoItem].status = TODOSTATUS.done;
    this.setState({
      data: allData.filter(todo=>(todo.status === TODOSTATUS.active))
    }, ()=> {
      model.updateTodo(allData[indexOfTodoItem], TODOSTATUS.done);
    })
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});