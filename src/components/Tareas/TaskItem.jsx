import React, {useState} from 'react';

const TaskItem = ({tarea, handleDelete}) => {

    const [completada, setCompletada] = useState(tarea.completada);
    
    return (
        <div className={completada? "text-bg-success card m-2" : "text-bg-secondary card m-2"}>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="">{tarea.titulo}</h5>    
                    <div className='d-flex'>
                        <button className={completada? 'btn btn-sm btn-dark mx-3' : 'btn btn-sm btn-success mx-3'} onClick={() => setCompletada(!completada)}>{!completada? 'Hecho': 'Pendiente'}</button>
                        <button className='btn btn-sm btn-danger mx-3' onClick={() => handleDelete(tarea.id)}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
