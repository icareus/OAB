/**
 * Created by Antoine on 20/07/2016.
 */
import _ from 'lodash'
import { UPDATE_FRUIT } from '../actions/fruits'

export default function fruits(state = [], action) {
  switch (action.type) {

  case UPDATE_FRUIT:
    console.log(action);
    return state;

  default:
    return state;
  }
}
