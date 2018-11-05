import React, { Fragment, useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `The number is now ${counter}`;
  });
  return (
    <Fragment>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Count up</button>
      <button onClick={() => setCounter(counter - 1)}>Count down</button>
    </Fragment>
  );
}
