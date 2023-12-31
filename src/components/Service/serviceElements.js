import styled from "styled-components";

export const ServicesContainer = styled.div`
    height :800px;
    display :flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background:#010606;
    @media screen and (max-width:768px){
        height :1100px;
    }
    @media screen and (max-width:480px){
        height :1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display :grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;
    @media screen and (max-width:1000px){
        grid-template-columns:1fr 1fr ;
    }
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        padding:0 20px;
    }



`
export const ServicesH1 = styled.h1`
    margin-bottom:64px;
    color:#fff;
    font-size:2.5rem;
 
    @media screen and (max-width:768px){
        font-size:2rem;
    }
`

export const ServicesH2 = styled.h2`
    margin-bottom:10px;
    font-size:1rem;

    @media screen and (max-width:768px){
        font-size:2rem;
    }
`

export const ServicesCard = styled.div`
    background:#fff;
    display :flex;
    align-items:center;
    flex-direction:column;
    justify-content:flex-start;
    border-radius:10px;
    max-height:340px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out
    &:hover{
        transform:scale(1.02);
        transition:0.2s easr-in-out;
        cursor:pointer;
    }


`
export const ServicesIcon = styled.img`
    height:160px;
    width:160px;
    margin-bottom:10px;
`

export const ServicesP = styled.p`
    text-align:center;
    font-size:1rem;


`

