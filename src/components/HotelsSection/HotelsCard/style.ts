import styled from "styled-components";

const StyleCardWrapper = styled.div`
    position:relative;
    width:${(props) => props.about === 'large' ? '100%' : '31%' };
    border-radius:12px;
    box-shadow: 0px 12px 24px 0px #1B3B770D;
    box-shadow: 0px 24px 60px 0px #062F7D0D;
    box-shadow: 0px 2px 4px 0px #0704921A;
`;

const StyleCardImg = styled.img`
    width:100%;
    height:25vw;
    object-fit:cover;
    border-top-left-radius:12px;
    border-top-right-radius:12px;
`

const StyleCardTextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    padding: 15px 24px;
`;

const StyleTextTitle = styled.h4`
    font-size:20px;
    color: #6E7491;
    margin-bottom:15px;
`;
const StyleTextSubtitle = styled.p`
    font-size:18px;    
    font-weight: 400;
    color:#7C8DB0;
    width:100%;
`;

export {
    StyleCardWrapper, 
    StyleCardImg, 
    StyleCardTextWrapper, 
    StyleTextSubtitle,
    StyleTextTitle
}

