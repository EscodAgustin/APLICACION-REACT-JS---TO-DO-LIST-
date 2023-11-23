import React from 'react';

const TaskForm = (props) => {

    const {tarea, handleSubmit, handleChange} = props

    return (
        <div className='bg-primary rounded mt-4'>
            <h2 className='text-center pt-4'>Agregar Tarea</h2>
            <div className='container d-flex justify-content-center p-4'>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control mx-3" type="text" placeholder="Ingrese titulo de la tarea" name="titulo" value={tarea} onChange={handleChange}/>
                    <button className='btn btn-success btn-xs'>Agregar</button>
                </form>
            </div>
        </div>
        
        
    );
}

export default TaskForm;
