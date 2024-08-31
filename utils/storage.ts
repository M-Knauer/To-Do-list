import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  key: string;
  value: string;
  checked: boolean;
}

export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Erro ao salvar as tarefas', error);
  }
};

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const savedTasks = await AsyncStorage.getItem('@tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Erro ao carregar as tarefas', error);
    return [];
  }
};
