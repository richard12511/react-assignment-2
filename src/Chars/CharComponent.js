import React from 'react'

const CharComponent = (props) => {

  return (
    <p className='char-component' onClick={props.click}>{props.char}</p>
  )
}

export default CharComponent;