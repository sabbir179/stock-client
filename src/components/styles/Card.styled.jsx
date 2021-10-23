import styled from "styled-components";


export const CardContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap');
    display: flex;
    justify-content: center;
   
    
`
export const Cards = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap');
    width:390px;
    height: 210px;
    justify-content: space-between;
    padding: 0px 10px;
    margin-bottom: 10px; 
    margin-left:60px; 
    border-radius: 5px;
    box-shadow: 2px 5px 2px  #b9b8b8;
    &:hover {
            opacity: 0.9;
            transform: scale(0.98);
        }
`
export const CardHead = styled.div`
    background-color: #1C75BA;
    color: white;
    height: 60px;
    width: 380px;
    flex-wrap: wrap;
    margin: 0;
    padding-left: 20px;
    padding-top: 2px;
    padding-bottom: 20px;
    
    
`
export const CardBody = styled.div`
    
    justify-content: space-between;
    padding: 10px 30px;
`

