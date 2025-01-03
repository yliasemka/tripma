import styled from "styled-components";

const StyleCardWrapper = styled.div`
    position:relative;
    width:${(props) => props.about === 'large' ? '100%' : '31%' };
    border-radius:12px;
    margin-bottom:40px;
    box-shadow: 0px 12px 24px 0px #1B3B770D;
    box-shadow: 0px 24px 60px 0px #062F7D0D;
    box-shadow: 0px 2px 4px 0px #0704921A;
    &:last-child {
        margin-bottom:0;
    };
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
    justify-content: space-between;
    padding: 15px 24px;
`;

const StyleTextDescription = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:space-between;
`;

const StyleTextTitle = styled.h4`
    font-size:1.375rem;
    color: #6E7491;
    margin-bottom:5px;
`;
const StyleTextSubtitle = styled.p`
    font-size:1.125rem;    
    font-weight: 400;
    color:#7C8DB0;
`;

const StyleTextPrice = styled.p`
    font-size: 1.375rem;    
    font-weight: 400;
    color:#7C8DB0;
`;

export {
    StyleCardWrapper, 
    StyleCardImg, 
    StyleCardTextWrapper, 
    StyleTextDescription,
    StyleTextPrice,
    StyleTextSubtitle,
    StyleTextTitle
}

