import React, { useState, Fragment } from 'react';

function Formulario() {
  return (
    <Fragment>
      <h2> Crear Cita </h2>

      <form>
        <label> Número Mascota </label>
        <input
          type="text"
          name="mascota"
          className="u-full-anchura"
          placeholder="número de Mascota"
        />

        <label> Número de dueño </ label>
        <input
          type="text"
          name="Propietario"
          className="u-full-anchura"
          placeholder="Número de Dueño de la Mascota"
        />

        <label> Fecha </ label>
        <input
          type="fecha"
          className="u-full-anchura"
          name="Fecha"
        />

        <label> Hora </ label>
        <input
          type="tiempo"
          className="u-full-anchura"
          name="hora"
        />

        <label> sintomas </ label>
        <textarea
          className="u-full-anchura"
          name="sintomas"
        > </textarea>

        <button type="submit" className="button-primary u-full-width"> Agregar </ button>
      </ form>
    </ Fragment>
  )
}

function App() {
  // useState retorna 2 funciones
  // El state actual = this.state
  // Función que actualiza el state (similar a this.setState());
  const [citas, guardarCita] = useState([]);

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half">
            <Formulario />
          </div>
          <div className="one-half">

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;