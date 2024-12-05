import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { StyledMainTemplate, Container } from "./style";
import MainSection from "../MainSection";
const MainTemplate = () => {
    return (
        <StyledMainTemplate>
            <Header/>
            <MainSection/>
            <Container>
            <Outlet />
            </Container>
        </StyledMainTemplate>
    )
}

export default MainTemplate