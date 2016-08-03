// import { apiCall, working, TASKS } from './api'

// export const ADD_TASK = 'ADD_TASK';
// export const DEL_TASK = 'DEL_TASK';
// export const INPUT_TASK = 'INPUT_TASK';
// export const GOT_TASKS = 'GOT_TASKS';

// export const addTask = (task) => ({
//   type: ADD_TASK,
//   task,
// })

// export const delTask = (id) => ({
//   type: DEL_TASK,
//   id,
// })

// export const gotTasks = tasks => ({
//   type: GOT_TASKS,
//   tasks,
// })

// export const deleteTask = (id) => (dispatch) => {
//   dispatch(working(TASKS))
//   return (apiCall({ method: 'DELETE' })('task/'.concat(id))(t => dispatch(delTask(t.id))))
// }

// export const pushTask = (task) => (dispatch) => {
//   dispatch(working(TASKS))
//   const req = {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST',
//     body: JSON.stringify({ 'task': { 'description': task.description, 'listId': task.listId } }),
//   }
//   return apiCall(req)('tasks')(t => (dispatch(addTask(t))))
// }

// export const getTasks = () => (dispatch) => {
//   dispatch(working(TASKS))
//   apiCall({ method: 'GET' })('tasks')(t => dispatch(gotTasks(t)));
// }

const UPDATE_FRUIT = 'UPDATE_FRUIT'

const colors = [
  '#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2', '#02A8F3', '#00BBD3',
  '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A']

const icons = [
  'ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet', 'motorcycle',
  'plane', 'rocket', 'ship', 'space-shuttle', 'subway', 'train', 'truck']
