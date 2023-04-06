
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [cursos, setCourses] = useState([
    { id: 1, text: 'Calculo' },
    { id: 2, text: 'Fisica' },
    { id: 3, text: 'Ingles' },
    { id: 4, text: 'Programacion' },
  ]);

  const [nuevoID, setNuevoID] = useState('');
  const [nuevoCurso, setNuevoCurso] = useState('');

  const agregarCurso = (evento) => {
    evento.preventDefault();
    const id = cursos.length + 1;
    if (cursos.some((curso) => curso.text === nuevoCurso)) {
      alert('Este curso ya está en la lista');
      setNuevoCurso('');
   } 
   else if (cursos.some((curso) => curso.id === nuevoID)) {
     alert('Este ID ya está en la lista');
     setNuevoID('');
  } 
   else {
   setCourses([...cursos, { id: nuevoID , text: nuevoCurso }]);
   setNuevoCurso('');
   setNuevoID('');

   }
  };

  const eliminarCurso = (id) => {
    const actualizarCursos = cursos.filter((curso) => curso.id !== id);
    setCourses(actualizarCursos);
  };

  const Items = ({ curso }) => {
    return (
      <tr>
        <td>{curso.id}</td>
        <td>{curso.text}</td>
        <td>
          <button onClick={() => eliminarCurso(curso.id)}>Eliminar</button>
        </td>
      </tr>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
       
        
        <div >
        
          <form onSubmit={agregarCurso}>
            <input
              type="text"
              value={nuevoID}
              onChange={(evento) => setNuevoID(evento.target.value)}
            />
            <input
              type="text"
              value={nuevoCurso}
              onChange={(evento) => setNuevoCurso(evento.target.value)}
            />
            <button type="submit">Agregar</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Curso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso) => (
                <Items key={curso.id} curso={curso} />
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;