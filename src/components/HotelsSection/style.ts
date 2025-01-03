import styled from "styled-components"; 


const StyleHotelsSection = styled.section`
    width:100%;
    position:relative;
`;

const StyleSectionWrapper = styled.div`
    width:100%;
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
    justify-content:space-between;
    flex-wrap: wrap;
    margin:30px 0 80px 0;
`;

const StyleButton = styled.button`
    display:block;
    margin: 0 auto;
    width:195px;
    height:48px;
    font-size:18px;
    font-weight:400;
    background-color: #605DEC;
    color:#FAFAFA;
    padding: 10px 20px;
    border-radius:4px;
`;



export {
    StyleHotelsSection,
    StyleHeaderButton,
    StyleHeaderText,
    StyleSectionHeader,
    StyleHeaderButtonText,
    StyleCardWrapper,
    StyleButton,
    StyleSectionWrapper,
}