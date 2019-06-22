import { AsyncStorage } from 'react-native';

export default class DataStorage {
  createData = async (id, dataString) => {
    try {
      await AsyncStorage.setItem(id, dataString);
    }
    catch(error){ 
      console.log("Error saving data");
    }
  };

  readAllData = (filter) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, result) => {
          let todoList = [];
          
          result.map((item) => {
            const todo = JSON.parse(item[1]);
            
            if (filter !== undefined && todo.status === filter){
              todoList.push(todo);
            }
            else if (filter === undefined ) {
              todoList.push(todo);
            }
          });
          resolve(todoList);
        });
      });
    });
  };

  deleteAllArchivedTodoList = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, result) => {
          let archivedTodoList = [];
          
          result.map((item) => {
            const todo = JSON.parse(item[1]);
            
            if (todo.status === "done" ) {
              archivedTodoList.push(todo.id);
            }
          });
          AsyncStorage.multiRemove(archivedTodoList, (err) => {
            if (err){
              reject(err);
            }
            resolve("done");
          });
        });
      });
    });
  };
}