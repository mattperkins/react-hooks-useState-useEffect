import React, { useState } from 'react';

function App() {

  const [msg, setMsg] = useState('Fred');

  return (
    <div>
      <p>{msg}</p>
      <input value="Change Name" type="button" onClick={() => setMsg('Sandy')} />
    </div>
  )
}

// export default App

export default React.memo(App)