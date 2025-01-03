import styled from "styled-components"
import Minus from '../../icon/minus.png'
import Plus from '../../icon/plus.png'

const StyleCounterWrapper = styled.div`
    position:absolute;
    top:100%;
    left:20px;
    width:100%;
    z-index: 20000;
    background-color: #FFFFFF;
    border: 1px solid #CBD4E6;
    border-radius:8px;
    padding:16px;
    box-shadow: 0px 12px 24px 0px #1B3B770D;
    box-shadow: 0px 24px 60px 0px #062F7D0D;
    box-shadow: 0px 2px 4px 0px #0704921A;
`;

const StyleCounterItemWrapper = styled.div `
    display:flex;
    width:100%;
    justify-content: space-between;
    align-items:center;
    margin-bottom:10px;

    &:last-child{
        margin-bottom:0;
    }
`;

const StyleCounterItemText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 21.82px;
    text-align: left;
    color: #6E7491;
    width:40%;
`;

const StyleCounterItemBottomWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 60%;
`;

const StyleCounterItemButton = styled.div`
    width:32px;
    height:32px;
    background-color: #FAFAFA;
    border-radius:4px;
    background-image: url(${(props) => {
        switch(props.about){
            case 'minus':
                return Minus
            case 'plus':
                return Plus
            default:
                break
        }
    }});
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`;

const StyleCounterItemValue = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color:#6E7491;
`;


export { 
    StyleCounterWrapper,
    StyleCounterItemWrapper,
    StyleCounterItemButton,
    StyleCounterItemText,
    StyleCounterItemValue,
    StyleCounterItemBottomWrapper
}