import styled from 'styled-components'

const StyleDropdownList = styled.ul`
    position:absolute;
    top: 100%;
    left: 0;
    z-index:1000;
    padding:16px;
    border-radius:4px;
    max-height: 312px;
    overflow: scroll;
    width: 90%;
    list-style:none;
    background-color:#FFFFFF;
    &::-webkit-scrollbar {
        display: none;
    }
    box-shadow: 0px 12px 24px 0px #1B3B770D;
    box-shadow: 0px 24px 60px 0px #062F7D0D;
    box-shadow: 0px 2px 4px 0px #0704921A;
`;

const StyleDropdownListItem = styled.li`
    border-radius:4px;
    padding:8px;
    color: #27273F;
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    &:hover{
        background-color:#605DEC;
        color: #F6F6FE;
        cursor:pointer;
    }
`;

export { StyleDropdownList, StyleDropdownListItem }