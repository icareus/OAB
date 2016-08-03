import React from 'react'

// import Spinner from './spinner'

const Fruit = (fruit) => {
  if (!fruit.icon || !fruit.color) { return (<div className='spinner'></div>) }
  return (<div></div>)
}

export default Fruit
