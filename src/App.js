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

  
  const Eliminar = (id) => {
    const actualizarCursos = cursos.filter((curso) => curso.id !== id);
    setCourses(actualizarCursos);
  };


  const Items = ({ curso }) => {
    return (
      <tr>
        <td>{curso.id}</td>
        <td>{curso.text}</td>
        <td>
          <button onClick={() => Eliminar(curso.id)}>Eliminar</button>
        </td>
      </tr>
    );
  };
  
  
 
  

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          LISTA DE CURSOS
        </p>
        
        <div>
        <table>
            <thead>
              <tr>
                <th>Id Del Curso</th>
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
