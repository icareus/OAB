/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import mapStateToProps from '../selectors/storeSelector'
import Bandit from '../components/bandit'
import loadFruits from '../actions/fruits'

class App extends React.Component {
  static propTypes = {
    fruits: React.PropTypes.array.isRequired,
    loadFruits: React.PropTypes.func.isRequired,
  }

  componentDidMount = () => this.props.dispatch(loadFruits())

  render() {
    return (
      <div className='app-wrapper'>
        <span><h1>One Armed Bandit - please play responsibly ;)</h1></span>
        <Bandit fruits={ this.props.fruits } />
      </div>) }
}

export default connect(state => mapStateToProps(state))(App);
