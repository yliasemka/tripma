import FlightSearch from "../FlightSearch"
import { StyleMainContainer, StyleMainSection, StyleMainHeader } from "./style"

const MainSection = () => {
    return (
        <StyleMainSection>
            <StyleMainContainer>
                <StyleMainHeader>
                    It’s more than just a trip
                </StyleMainHeader>
                <FlightSearch/>
            </StyleMainContainer>
        </StyleMainSection>
    )
}

export default MainSection