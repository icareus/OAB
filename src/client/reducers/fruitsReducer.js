/**
 * Created by Antoine on 20/07/2016.
 */
import _ from 'lodash'
import { UPDATE_FRUIT, UPDATE_FRUITS } from '../actions/fruits'

export default function fruits(state = [], action) {
  switch (action.type) {

  case UPDATE_FRUIT:
    return {fruits: _.map(state.fruits, fruit => {return fruit.id === action.fruit.id ? action.fruit : fruit})}

  case UPDATE_FRUITS:
    return ({fruits: action.fruits});

  default:
    return state;
  }
}
