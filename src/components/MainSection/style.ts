import { styled } from "styled-components";
import GradienMap from '../../assets/GradientMap2.png';


const StyleMainSection = styled.section`
    width: 100%;
    background-image: url(${GradienMap});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 0;

`;

const StyleMainContainer = styled.div`
    padding: 160px 80px 300px 80px;
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position:relative;
    z-index: 99;
`;

const StyleMainHeader = styled.h1 `
    font-size: 96px;
    font-weight: 700;
    padding: 0 40px;
    margin-bottom: 100px;
    text-align:center;
    width: 756px;
    background: linear-gradient(to bottom right, blue, pink);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;


export { StyleMainContainer, StyleMainSection, StyleMainHeader }