import { useState } from 'react'
import './App.css'
import JsxIntro from './components/jsxIntro/Jsx'
import UseStateIntro from './components/hooks/useStateHook/UseStateIntro'
import PropsIntro from './components/props/PropsIntro'
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <div className=''>
      {/* //! JsxIntro */}
      {/* <JsxIntro></JsxIntro> */}

      {/* //! UseStateIntro */}
      {/* <UseStateIntro></UseStateIntro> */}

      {/* //! Props */}
      <PropsIntro></PropsIntro>
      <Toaster />
    </div>
  )
}

export default App
