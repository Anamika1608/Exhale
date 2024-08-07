import React from 'react'
import Context from '../components/Talk/Context'
import Steps from '../components/Talk/Steps'
import AI from '../components/Talk/AI'

function Talk() {
  return (
    <div className='bg-[#C7C2D9] pt-28'>
        <Context/>
        <Steps/>
        <AI/>
    </div>
  )
}

export default Talk