import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma tarefa"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});
