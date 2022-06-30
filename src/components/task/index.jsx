import React from 'react';
import * as C from './task' 
import { CgClose, CgInfo} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const Task = ({task, taskCheck, taskDelete}) => {
    const navigate = useNavigate();

    const handleTaskCheck = () => {
        taskCheck(task.id)
    }
    const handleTaskDelete = () => {
        taskDelete(task.id)
    }

    const handleTaskDetails = () => {
        navigate(`/${task.title}`)
    }

    return (
        <C.Container style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <C.taskClick onClick={handleTaskCheck}>
                {task.title}
            </C.taskClick>
            <C.ButtonContainer>
                <C.ButtonDetails onClick={handleTaskDetails}>
                    <CgInfo/>               
                </C.ButtonDetails>
                <C.ButtonDelete onClick={handleTaskDelete}> <CgClose/> </C.ButtonDelete>
            </C.ButtonContainer>
        </C.Container>
    );
}

export default Task ;