import React from 'react';
import Task from '../task';

const Tasks = ({ tasks, taskCheck, taskDelete }) => {
    return(
        <>
            {tasks.map( ( item, index ) => 
                <Task key={index} task={item} taskCheck={taskCheck} taskDelete={taskDelete} />
            )}
        </>
    )
}
export default Tasks