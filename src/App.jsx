import { useState } from 'react'
import './App.css'
import JsxIntro from './components/jsxIntro/Jsx'
import UseStateIntro from './components/hooks/useStateHook/UseStateIntro'

function App() {

  return (
    <div className=''>
      {/* //! JsxIntro */}
      {/* <JsxIntro></JsxIntro> */}

      {/* //! UseStateIntro */}
      <UseStateIntro></UseStateIntro>
    </div>
  )
}

export default App
