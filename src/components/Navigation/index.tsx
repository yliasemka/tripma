import { StyledNav, StyleListNav , StyleListItem} from "./style"

export const Navigation = () => {
    return (
        <StyledNav>
            <StyleListNav>
                <StyleListItem>Fligts</StyleListItem>
                <StyleListItem>Hotels</StyleListItem>
                <StyleListItem>Packegase</StyleListItem>
                <StyleListItem>Sing in</StyleListItem>
                <StyleListItem>Sing up</StyleListItem>
            </StyleListNav>
        </StyledNav>
    )
}