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
        <div className='flex-item'>
          <Fruit key={ f.id } fruit={ f } />
        </div>)}
    </div>
  </div>
)

Bandit.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  handlers: React.PropTypes.object,
}

export default Bandit
