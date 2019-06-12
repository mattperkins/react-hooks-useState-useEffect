import React, { useState, useEffect } from 'react';
import TextForScrolling from './TextForScrolling'
export default function HookState() {

  const [msg, setMsg] = useState('What??!');
  // cartItem = name of state property
  // setCartItem = function to change value of state
  const [cartItems, setCartItems] = useState([])

  const [scrollDepth, setScrollDepth] = useState(0)
  function determinedScrollDepth() {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop
    setScrollDepth(scrolled)
  }
  useEffect(() => {
    window.addEventListener('scroll', determinedScrollDepth)

    // de-register/unmount
    return function () {
      window.removeEventListener('scroll', determinedScrollDepth)
    }
  })
  return (
    <div>
      <div className="fixed">
        You have scrolled: {scrollDepth}
      </div>
      <div className="buttonStateChanger">
        <p>{msg}</p>
        <input value="click me" type="button" onClick={() => setMsg('Ahh yeah!!!')} />
      </div>
      <div className="buttonStateChanger">
        <p>{cartItems.toString()}</p>
        <input value="add to cart" type="button" onClick={() => setCartItems([...cartItems, 'pear'])} />
      </div>
      <TextForScrolling />
    </div>
  )
}

// // export default App
// export default React.memo(App)