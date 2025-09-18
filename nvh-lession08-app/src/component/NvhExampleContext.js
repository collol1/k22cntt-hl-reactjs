import React, { createContext, useState  } from 'react'
import NvhExamcontext from './NvhExamcontext';


export const ThemeContext = createContext();

export default function NvhExampleContext() {
    const [theme, setTheme] = useState('bg-dark'); // bg-dark: class của bootstrap

    const handleToggleTheme = ()=>{
        setTheme(theme==='bg-dark'?'bg-danger':'bg-dark')
    }
  return (
        
      <ThemeContext.Provider value={theme}>
       <div>
            <div className='bg-danger'>
                Nội dung tesst .bg-dark
            </div>
            <div>
                <button onClick={handleToggleTheme}>Change theme</button>
                <button>Test</button>
            </div>
            <NvhExamcontext />
       </div>
      </ThemeContext.Provider>
  )
}