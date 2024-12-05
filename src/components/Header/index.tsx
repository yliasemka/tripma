import { StyleHeader } from "./style"
import { Logo } from "../../assets"
import { Link } from "react-router-dom"
import { routes } from '../../routes/routes';
import { Navigation } from "../Navigation";


export const Header = () => {
    return (
        <StyleHeader>
            <Link to={routes.HOME}> <Logo/></Link>
            <Navigation/>
        </StyleHeader>
    )
}