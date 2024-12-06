import styled from "styled-components";
import Arrival  from "../../icon/arrival.png"
import Calendar from "../../icon/calendar.png"
import Departure from "../../icon/departure.png"
import Person from "../../icon/person.png"


const StyleForm = styled.form`
    border: 1px solid #CBD4E6;
    border-radius: 4px;
    display:flex;
`;

const StyleInput = styled.input`
    cursor:pointer;
    position:relative;
    font-size: 16px;    
    font-weight: 400;
    text-align: left;
    color:#27273F;
    &::placeholder {
        font-size: 18px;
        font-weight: 400;
        color: #7C8DB0;
    }
    
`;

const StyleInputWrapper= styled.div `
    width:100%;
    position:relative;
    display:flex;
    background-color: #FFFFFF;
    padding: 8px 15px;
    border-right: 1px solid #CBD4E6;
    border-radius: 4px;
`;

const StyleImgItem = styled.div`
    position:relative;
    width:32px;
    height:32px;
    background-image: url(${(props) => {
        switch(props.about){
            case 'dateFlight':
                return Calendar
            case 'inFlight':
                return Departure
            case 'toFlight':
                return Arrival
            case 'person':
                return Person
            default:
                break
        }
    }});
    background-size: 32px 32px;
    background-repeat: no-repeat;
    margin-right:7px;
`; 

const StyleButton = styled.button`
    padding: 12px 20px 13px 20px;
    color: #FFFFFF;
    background-color: #605DEC;
    font-size: 18px;
    font-weight: 400;
    border-radius: 4px;
    cursor:pointer;
`;

export {StyleInput, StyleForm , StyleButton, StyleInputWrapper , StyleImgItem}