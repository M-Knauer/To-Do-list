import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white', 
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: 10,
  },
  taskText: {
    fontSize: 16,
  },
  checkedTask: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'green', 
  },
  disabledButton: {
    opacity: 0.5, 
  },
});
