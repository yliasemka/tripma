import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { StyledMainTemplate, Container } from "./style";
import FlightSection from "../FlightSections";
import HotelsSection from "../HotelsSection";
import Comments from "../Comments";
import Footer from "../Footer";

const MainTemplate = () => {
    return (
        <StyledMainTemplate>
            <Header/>
            <Container>
                <Outlet />
            </Container>
            <Footer/>
        </StyledMainTemplate>
    )
}

export default MainTemplate