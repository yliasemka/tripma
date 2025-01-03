import styled from 'styled-components'
import Arrival  from "../../icon/arrival.png"
import Calendar from "../../icon/calendar.png"
import Departure from "../../icon/departure.png"
import Person from "../../icon/person.png"


const StyleInput = styled.input`
    cursor:pointer;
    position:relative;
    font-size: 1rem;    
    font-weight: 400;
    color:#27273F;
    width:100%;
    &::placeholder {
        font-size: 18px;
        font-weight: 400;
        color: #7C8DB0;
    };
    background-image: url(${(props) => {
        switch(props.name){
            case 'dateFlight':
                return Calendar
            case 'inFlight':
                return Departure
            case 'toFlight':
                return Arrival
            case 'countPerson':
                return Person
            default:
                break
        }
    }});
    background-repeat: no-repeat;
    background-position: 10px center;
    padding: 13px 0 13px 50px;
    border: 1px solid #062F7D0D;
    &:first-child{
        border-radius:4px;
        border-top-right-radius:0px;
        border-bottom-right-radius:0px;
    };
    &:focus {
        border: 1.5px solid #605DEC;
    };
`;

const StyleDropdownWrapper = styled.div`
    position: relative;
    width:100%;
`;

/* const StyleInputWrapper= styled.div `
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
            case 'countPerson':
                return Person
            default:
                break
        }
    }});
    background-size: 32px 32px;
    background-repeat: no-repeat;
    margin-right:7px;
`;  */


export { StyleInput,  StyleDropdownWrapper}