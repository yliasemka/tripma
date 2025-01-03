import styled from "styled-components";
import Left from "../../icon/chevronLeft.png"
import Right from "../../icon/chevronRight.png"

const StyleCalendarMain = styled.div`
    border-radius:7px;
    border: 1px solid #062F7D0D;
    background-color: #FFFFFF;
    justify-content: space-between;
    position:absolute;
    top: 100%;
    left: -30%;
    z-index:1000;
    box-shadow: 0px 12px 24px 0px #1B3B770D;
    box-shadow: 0px 24px 60px 0px #062F7D0D;
    box-shadow: 0px 2px 4px 0px #0704921A;
`;

const StyleCalendarHeader = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid #CBD4E6;
    padding: 10px 24px;
`;

const StyleCalendarCheckbox = styled.input`
    border-radius: 50%;
    border: 1px solid #6E7491;
    width: 16px;
    height:16px;
    color: #6E7491;
    margin-right:8px;
`;

const StyledCheckboxLabel = styled.label`
    padding: 4px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #6E7491;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-right:10px;
    line-height: 21.82px;
`;

const StyleCalendarButton = styled.button`
    width:32px;
    padding:5px;
    background-image: url(${(props) => {
        switch(props.about){
            case 'left':
                return Left
            case 'right':
                return Right
            default:
                break
        }
    }});
    background-repeat: no-repeat;
    background-position: center;
`;

const StyleCalendarContent = styled.div`
    display:flex;
    padding: 20px 24px;
`;

const StyleCalendar = styled.div`
    width:100%;
    padding: 0 20px;
`;
const CalendarHeader = styled.h3`
    color:#000000;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    padding-left:10px;
    margin-bottom:15px
`;

const Table = styled.table`
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;

`;

const TableHeader = styled.th`
    vertical-align: middle;
    text-align: center;
    height: 32px;
    padding: 0 8px;
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.1px;
    color:#27273F;
`;

const TableDay = styled.td`
    text-align: center;
    height: 32px;
    padding: 0 8px;
    color:${(props) => props.about === 'string' ? '#7C8DB0' : '#27273F'} ;
    &:hover {
        background-color: #605DEC;
        border-radius:50%;
        color:#F6F6FE;
        cursor: pointer;
    };
    &.active {
        background-color: #605DEC;
        border-radius:50%;
        color:#F6F6FE;
        cursor: pointer;
    }
`;



export { 
    StyleCalendarCheckbox, 
    StyleCalendarMain,
    StyledCheckboxLabel, 
    StyleCalendarHeader, 
    StyleCalendarButton, 
    StyleCalendarContent,
    StyleCalendar,
    CalendarHeader,
    Table,
    TableHeader,
    TableDay,
}