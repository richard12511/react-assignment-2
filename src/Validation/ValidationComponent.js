import React from 'react'

const ValidationComponent = (props) => {
  let comp = <p className='margin-10'>Text too short</p>
  if (props.textLength > 5) {
    comp = <p className='margin-10'>Text long enough</p>
  }
  return (
    <div>
      {comp}
    </div>
  )
}

export default ValidationComponent;