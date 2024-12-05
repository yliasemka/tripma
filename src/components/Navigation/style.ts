import styled from "styled-components";
import { Colors } from "../../ui/color";


const StyledNav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;

    max-width: 485px;
    width: 100%;
`;

const StyleListNav = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-between;
    padiing: 16px;
`;

const StyleListItem = styled.li`
    margin-right = 5px;
    padding: 10px;
    color: #${Colors.INTERACTIVE};
    font-size: 16px;
    margin-right: 10px;
`;

export {StyledNav, StyleListItem, StyleListNav}