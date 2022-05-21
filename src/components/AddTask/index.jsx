import React, { useState } from 'react';
import * as C from './styled'
import Button from '../Button';


const AddTask = ({taskAdd}) => {
    const [inputData, setInputData] = useState('');
    const handleInputChange = (e) =>{
        setInputData(e.target.value)
    }
    const handleAddTaskClick = () => {
        taskAdd(inputData)
        setInputData('')
    }

    return (
        <C.ContainerTask>
            <C.InputAdd value={inputData} onChange={handleInputChange} type='text' name='AddTask' />
            <C.ContainerButton>
                <Button onclick={handleAddTaskClick}>Adicionar</Button>
            </C.ContainerButton>
        </C.ContainerTask>
    )
}
export default AddTask