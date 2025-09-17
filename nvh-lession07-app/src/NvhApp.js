import React from 'react'
import NvhUseState from './component/NvhUseState'
import NvhListStudent from './component/NvhListStudent'

export default function NvhApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Nguyen Van Huynh]</h1>
        <hr/>
        <NvhUseState/>
        <hr/>
        <NvhListStudent/>
    </div>
  )
}