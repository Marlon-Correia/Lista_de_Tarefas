import styled from "styled-components"

export const Container = styled.div`
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;
`;

export const taskClick = styled.div`
    cursor: pointer;
    transition: all ease 0.5s;

    &:hover{
        color: chartreuse;
    }
`

export const ButtonContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
`;

export const ButtonDelete = styled.button`
    background-color: #444;
    border: none;
    color: chartreuse;
    cursor: pointer;
    font-size: 24px;
    margin: 0 5px;
`;

export const ButtonDetails = styled.button`
    background-color: #444;
    border: none;
    color: chartreuse;
    cursor: pointer;
    font-size: 24px;
`;