import styled from "styled-components"; 


const StyleFlightSection = styled.section`
    width:100%;
    margin-bottom:100px;
`;

const StyleSectionHeader = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`;

const StyleHeaderText = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 32.74px;
    text-align: left;
    color: #6E7491;
`;

const StyleHeaderButton = styled.div`
    display: flex;
    justify-content:space-between;
`;

const StyleHeaderButtonText = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 32.74px;
    color: #A1B0CC;
    margin-right:10px;
`;

const StyleCardWrapper = styled.div`
    display:flex;
    position:relative;
    width:100%;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top:30px;
`;


export {
    StyleFlightSection,
    StyleHeaderButton,
    StyleHeaderText,
    StyleSectionHeader,
    StyleHeaderButtonText,
    StyleCardWrapper,
}