import './App.css'
import TaskList from './components/Tareas/TaskList'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import TaskForm from './components/Tareas/TaskForm.jsx'
import React, { useState, useEffect } from 'react';


function App() {

  const [tarea, setTarea] = useState('');
  const [identificador, setIdentificador] = useState(0)
  
  const [lista, setLista] = useState(() => {
    const guardarLista = window.localStorage.getItem('TareasData');
    if(guardarLista){
      return JSON.parse(guardarLista);
    } else{
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem('TareasData', JSON.stringify(lista))
  }, [lista]);

  function handleSubmit(event) {
    event.preventDefault()
    if(tarea===''){
      alert('No escribiste ninguna tarea')
    } else {
      setIdentificador(identificador + 1)
      
      const nuevaTarea = {
        id: identificador,
        titulo: tarea,
        completada: false,
      }

      setLista([nuevaTarea, ...lista])

      setTarea('')

    }


  }

  function handleChange(event){
    setTarea(event.target.value)
  }

  function handleDelete(id){
    setLista(lista.filter(tarea => tarea.id!== id))
  }

  return (
    <div className='container-fluid' style={{maxWidth:'720px'}}>
      <Header/>
      <TaskForm tarea={tarea} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <TaskList lista={lista} handleDelete={handleDelete}/>
      <Footer/>
    </div>
  )
}

export default App
