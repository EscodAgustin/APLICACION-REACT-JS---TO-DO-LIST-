import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {

    const {lista, handleDelete} = props
    return (
        <>
            <h2 className='text-center pt-3'>Lista de Tareas</h2>
            <div className='container list-group'>
                {lista.map(tarea => <TaskItem key={tarea.id} tarea={tarea} handleDelete={handleDelete}/>)}
            </div>
        </>
    );
}

export default TaskList;
