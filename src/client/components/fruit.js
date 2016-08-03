import React from 'react'

// import Spinner from './spinner'

const Fruit = ({ fruit }) => {
  console.log(fruit)
  if (!fruit.icon || !fruit.color) { return (<div className='spinner'></div>) }
  return (
    <i
      className={ 'fa fa-'.concat(fruit.icon) }
      style={{ color: fruit.color }}>
    </i>)
}

Fruit.propTypes = {
  fruit: React.PropTypes.object.isRequired,
}

export default Fruit
