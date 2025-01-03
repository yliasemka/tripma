import { Link } from "react-router-dom"
import { StyledNav, StyleListNav , StyleListItem} from "./style"
import { routes } from "../../routes/routes"

export const Navigation = () => {
    return (
        <StyledNav>
            <StyleListNav>
                <StyleListItem>
                    <Link to={routes.FLIGTS}>Fligts</Link>
                </StyleListItem>
                <StyleListItem>
                    <Link to={routes.HOTELS}>Hotels</Link>
                </StyleListItem>
                <StyleListItem>
                    <Link to={routes.PACKEGASE}>Packegase</Link>
                </StyleListItem>
                <StyleListItem>
                    <Link to={routes.SINGIN}>Sing in</Link>
                </StyleListItem>
                <StyleListItem>
                    <Link to={routes.SINGUP}>Sing up</Link>
                </StyleListItem>
            </StyleListNav>
        </StyledNav>
    )
}