import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (task.length > 0) {
      if (editingTask) {
        setTasks(tasks.map(item =>
          item.key === editingTask.key ? { ...item, value: task } : item
        ));
        setEditingTask(null);
      } else {
        setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      }
      setTask('');
    }
  };

  const editTask = (task) => {
    setTask(task.value);
    setEditingTask(task);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione ou edite uma tarefa"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button
        title={editingTask ? "Salvar Alteração" : "Adicionar Tarefa"}
        onPress={addTask}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => editTask(item)}>
            <View style={styles.taskItem}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
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
