import React from 'react';
import * as C from './styled'
import Button from '../Button';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };

    return ( 
        <>
            <C.Container>
                <Button onclick={handleHomeClick}>Voltar</Button>
            </C.Container>
            <C.DetailsContainer>
                <C.H2>{params.taskTitle}</C.H2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate soluta odio possimus laborum quisquam voluptas?</p>
            </C.DetailsContainer>
        </>
    );
}

export default TaskDetails;