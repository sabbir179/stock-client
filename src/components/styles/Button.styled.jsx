import styled from "styled-components";


export const Button = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap');
     border-radius: 50px;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        padding: 15px 60px;
        
        margin-top:90px;
        margin-bottom:50px;
        margin-left: 60ç0px;
        background-color: ${({ bg }) => bg || '#fff'};
        color: ${({ color }) => color || '#333'};
        &:hover {
            opacity: 0.9;
            transform: scale(0.98);
        }
    
`