import React from "react";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default App
