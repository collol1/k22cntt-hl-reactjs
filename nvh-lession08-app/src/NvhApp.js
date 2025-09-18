import React from 'react' 
import NvhUseState from './component/NvhUseState'
import NvhListStudent from './component/NvhListStudent'
import NvhUseEffectDemo from './component/NvhUseEffectDemo'
import { ThemeContext } from './component/NvhExampleContext'
import NvhExamcontext from './component/NvhExamcontext'
import NvhExamInfo from './component/NvhExamInfo'
import NvhExampleContext from './component/NvhExampleContext'

export default function TvcApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Nguyễn Văn Huỳnh]</h1>
        <hr/>

        {/* <NvhUseState />

        <NvhListStudent />

        <NvhUseEffectDemo /> */}

        <NvhExampleContext></NvhExampleContext >
    </div>
  )
}