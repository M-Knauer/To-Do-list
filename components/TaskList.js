import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import styles from '../styles/AppStyles';

export default function TaskList({ tasks, toggleCheck, editTask, deleteTask, title, isVisible, toggleVisibility }) {
  return (
    <View style={styles.taskListContainer}>
      <TouchableOpacity onPress={toggleVisibility}>
        <Text style={styles.sectionTitle}>
          {isVisible ? '▾ ' : '▸ '}{title}
        </Text>
      </TouchableOpacity>
      {isVisible && (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              toggleCheck={toggleCheck}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          )}
          keyExtractor={item => item.key}
          style={styles.taskList}
        />
      )}
    </View>
  );
}