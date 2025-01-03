import styled from "styled-components";
import { Colors } from "../../ui/color";


const StyledNav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const StyleListNav = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-between;
    padiing: 16px;
`;

const StyleListItem = styled.li`
    padding: 10px;
    margin-right: 10px;
    & a {
        color: #${Colors.INTERACTIVE};
        font-size: 16px;
    }
`;

export {StyledNav, StyleListItem, StyleListNav}