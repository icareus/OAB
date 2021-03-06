
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
import _ from 'lodash'

export const UPDATE_FRUIT = 'UPDATE_FRUIT'
export const UPDATE_FRUITS = 'UPDATE_FRUITS'

const AMOUNT = 5
const MIN_TIME = 1000
const MAX_TIME = 4200

const randElem = (array) => array[_.random(0, array.length - 1)]
const randTime = () => _.random(MIN_TIME, MAX_TIME)

const colors = [
  '#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2', '#02A8F3', '#00BBD3',
  '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A']

const icons = [
  'ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet', 'motorcycle',
  'plane', 'rocket', 'ship', 'space-shuttle', 'subway', 'train', 'truck']

const updateFruit = (fruit) => ({
  type: UPDATE_FRUIT,
  fruit,
})
const updateFruits = (fruits) => ({
  type: UPDATE_FRUITS,
  fruits,
})

const newFruit = (id) => ({
  id,
  color: randElem(colors),
  icon: randElem(icons),
})

const loadFruit = (id) => dispatch => new Promise((resolve, reject) => {
  setTimeout(resolve, randTime(), newFruit(id))
}).then(f => {
  dispatch(updateFruit(f));
  return f
})

const loadFruits = () => dispatch => Promise
  .all(_.times(AMOUNT, id => dispatch(loadFruit(id))))
  .then(fruits => dispatch(updateFruits(fruits)))

export default loadFruits
