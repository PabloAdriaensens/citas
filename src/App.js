import React, { useState } from 'react';

function App() {
  // useState retorna 2 funciones
  // El state actual = this.state
  // Función que actualiza el state (similar a this.setState());
  const [citas, guardarCita] = useState([]);

  return (
    <h1>hola</h1>
  )
}

export default App;