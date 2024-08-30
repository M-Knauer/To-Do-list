import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/AppStyles';

export default function TaskItem({ item, toggleCheck, editTask, deleteTask }) {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleCheck(item.key)}>
        <Text style={item.checked ? styles.checkedTask : styles.taskText}>
          {item.checked ? '✔ ' : ''}{item.value}
        </Text>
      </TouchableOpacity>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => editTask(item)}
          disabled={item.checked}
          style={item.checked ? styles.disabledButton : {}}
        >
          <Ionicons name="pencil" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.key)} style={styles.deleteButton}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
