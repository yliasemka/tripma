import styled from "styled-components";


const StyleCard = styled.div`
    width:31%;
    position:relative;
    border-radius:12px;
    padding: 16px;
    display:flex;
    margin-right: 40px;

    &:last-child{
        margin-right:0;
    }
`;

const StyleCardAvatar = styled.img`
    width:48px;
    height:48px;
    object-fit:cover;
    border-radius:50%;
    overflow:hidden;
    margin-right:16px;
`;

const StyleCarTextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    aligh-items:left;
    max-width:315px;
`;

const StyleCardHeader = styled.div`
    font-size: 18px;
    color: #6E7491;
    & h4 {
        font-weight: 600;
        margin-bottom:5px;
    }
    & p {
        font-weight: 300;
    }
`;

const StyleCardStars = styled.ul`
    display: flex;
    justify-content:space-between;
    margin:10px 0;
    list-style-type:none;
    width:40%;
`;

const StyleStar = styled.img`
    width:28px;
    heigth:28px;
`;

const StyleCardDescription = styled.div<{isexpanded?:boolean}> `
    height:100%;
    color: #27273F;
    line-height:20px;
    width:${(props) => (props.isexpanded ? "100%" : "315px")};
    position: ${(props) => (props.isexpanded ? "absolute" : "relative")};
`;
const ReadMoreButton = styled.span`
    color: #605DEC;
    cursor: pointer;
    font-weight: bold;
`;

export {
    StyleCard,
    StyleCarTextWrapper, 
    StyleCardAvatar,
    StyleCardDescription,
    StyleCardHeader, 
    StyleCardStars,
    StyleStar,
    ReadMoreButton,
}