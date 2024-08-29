import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/AppStyles';

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
        setTasks([...tasks, { key: Math.random().toString(), value: task, checked: false }]);
      }
      setTask('');
    }
  };

  const editTask = (task) => {
    setTask(task.value);
    setEditingTask(task);
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(item => item.key !== taskKey));
    if (editingTask && editingTask.key === taskKey) {
      setEditingTask(null);
      setTask('');
    }
  };

  const toggleCheck = (taskKey) => {
    setTasks(tasks.map(item =>
      item.key === taskKey ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione a tarefa"
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleCheck(item.key)}>
              <Text style={item.checked ? styles.checkedTask : styles.taskText}>
                {item.checked ? '✔ ' : ''}{item.value}
              </Text>
            </TouchableOpacity>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => editTask(item)}
                disabled={item.checked} // Desabilita o botão se a tarefa estiver marcada como concluída
                style={item.checked ? styles.disabledButton : {}}
              >
                <Ionicons name="pencil" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.key)} style={styles.deleteButton}>
                <Ionicons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}
