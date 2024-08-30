import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './components/TaskList';
import { saveTasks, loadTasks } from './utils/storage';
import styles from './styles/AppStyles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showIncompleteTasks, setShowIncompleteTasks] = useState(true);
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    }
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

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

  const incompleteTasks = tasks.filter(task => !task.checked);
  const completedTasks = tasks.filter(task => task.checked);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de afazeres</Text>
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

      <TaskList
        tasks={incompleteTasks}
        toggleCheck={toggleCheck}
        editTask={editTask}
        deleteTask={deleteTask}
        title="Tarefas Pendentes"
        isVisible={showIncompleteTasks}
        toggleVisibility={() => setShowIncompleteTasks(!showIncompleteTasks)}
      />

      <TaskList
        tasks={completedTasks}
        toggleCheck={toggleCheck}
        editTask={editTask}
        deleteTask={deleteTask}
        title="Concluídas"
        isVisible={showCompletedTasks}
        toggleVisibility={() => setShowCompletedTasks(!showCompletedTasks)}
      />
    </View>
  );
}
