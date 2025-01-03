import { styled } from "styled-components";
import GradienMap from '../../assets/GradientMap2.png';


const StyleMainSection = styled.section`
    width: 100%;
    background-image:url(${GradienMap}); 
    background-size:contain;
    background-repeat:no-repeat;
    background-position: center;
`;

const StyleMainContainer = styled.div`
    padding: 210px 100px 210px 100px;
    width: 100%;
    @media (min-width: 1024px) and (max-width: 1265px){
        padding: 100px 100px 130px 100px;
    }
    @media (min-width: 768px) and (max-width: 1023px){
        padding: 100px 80px 100px 80px;
        margin:50px 0
    }
`;

const StyleMainHeader = styled.h1 `
    font-size: 96px;
    font-weight: 700;
    padding: 0 40px;
    text-align:center;
    width: 756px;
    margin:0 auto;
    margin-bottom: 100px;
    background: linear-gradient(to bottom right, blue, pink);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: 1024px) and (max-width: 1265px){
        font-size: 80px;
    }
    @media (min-width: 768px) and (max-width: 1023px){
        width:100%;
        font-size: 60px;
        margin-bottom:50px;
    }
`;


export { StyleMainContainer, StyleMainSection, StyleMainHeader }