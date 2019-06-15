import React from 'react'
import './app.css'
// import HookStateEffectScollerDetector from './HookStateEffectScollerDetector';
import CustomHookStateEffectFetch from './CustomHookStateEffectFetch';

function App() {
  return (
    <>

      {/* couple of buttons: useState */}
      {/* scroll position event handler: useEffect */}
      {/* uncomment to view */}
      {/* <HookStateEffectScollerDetector /> */}


      {/* fetch api data: useState, useEffect */}
      <CustomHookStateEffectFetch />
    </>
  )
}

export default App
