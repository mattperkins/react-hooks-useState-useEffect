import React, { useState } from 'react';

function App() {

  const [msg, setMsg] = useState('What??!');

  return (
    <div>
      <p>{msg}</p>
      <input placeholder="Add your email address" value="click me" type="button" onClick={() => setMsg('Ahh yeah!!!')} />
    </div>
  )
}

// export default App
export default React.memo(App)