/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import mapStateToProps from '../selectors/storeSelector'
import Bandit from '../components/bandit'

const App = ({ fruits }) => (
  <div className='app-wrapper'>
    <span><h1>One Armed Bandit - please play responsibly ;)</h1></span>
    <Bandit fruits={ fruits } />
  </div>
)

App.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func,
}

export default connect(
  state => mapStateToProps(state),
  {
    // mapDispatchToProps
    // fetchTasks: getTasks,
    // fetchLists: getLists,
    // onNewList: pushList,
    // onNewTask: pushTask,
    // onDelTask: deleteTask,
    // onDelList: deleteList,
  })(App);
