import FlightSearch from "../FlightSearch"
import { StyleMainContainer, StyleMainSection, StyleMainHeader } from "./style"
import FlightSection from "../FlightSections";
import HotelsSection from "../HotelsSection";
import Comments from "../Comments";

const MainSection = () => {
    return (
        <>
            <StyleMainSection>
                <StyleMainContainer>
                    <StyleMainHeader>
                        It’s more than just a trip
                    </StyleMainHeader>
                    <FlightSearch/>
                </StyleMainContainer>
            </StyleMainSection>
            <FlightSection/>
            <HotelsSection/>
            <Comments/>
        </>
        
    )
}

export default MainSection