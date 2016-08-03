/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
import _ from 'lodash'

import Fruit from './fruit'

const Bandit = ({ fruits }) => (
  <div className='fruits'>
    <div className='flex-container'>
      {_.map(fruits, f => 
        <Fruit key={ f.id } fruit={ f } />)}
    </div>
  </div>
)

Bandit.propTypes = {
  handlers: React.PropTypes.object,
  fruits: React.PropTypes.array.isRequired,
}

export default Bandit
