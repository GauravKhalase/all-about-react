import { useState } from 'react'
import './App.css'
import { Toaster } from "react-hot-toast";
import JsxIntro from './components/jsxIntro/Jsx'
import UseStateIntro from './components/hooks/useStateHook/UseStateIntro'
import PropsIntro from './components/props/PropsIntro'
import ConditionalIntro from './components/conditionalRendering/ConditionalIntro'
import EventsIntro from './components/events/EventsIntro'


function App() {

  return (
    <div className=''>
      {/* //! JsxIntro */}
      {/* <JsxIntro></JsxIntro> */}

      {/* //! UseStateIntro */}
      {/* <UseStateIntro></UseStateIntro> */}

      {/* //! Props */}
      {/* <PropsIntro></PropsIntro> */}

      <ConditionalIntro></ConditionalIntro>

      {/* <EventsIntro></EventsIntro> */}

      <Toaster />
    </div>
  )
}

export default App
