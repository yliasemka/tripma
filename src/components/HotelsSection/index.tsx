import { Arrow } from "../../assets"
import { 
    StyleHotelsSection, 
    StyleHeaderButton, 
    StyleHeaderText, 
    StyleSectionHeader, 
    StyleHeaderButtonText,
    StyleCardWrapper,
    StyleButton,
    StyleSectionWrapper,
} from "./style"
import { useHttp } from "../../hooks/http.hook" 
import { useEffect, useState } from "react"
import { CardProps } from "../FlightSections/FlightCard"
import HotelsCard from "./HotelsCard"


const HotelsSection = () => {
    const [cards, setCards] = useState<CardProps[] | null>([])
    const {request} = useHttp()

    const onChangeState = (cardsArr:CardProps[]) => {
        if(cards !== null){
            const newCards = [...cardsArr, ...cards]
            setCards(newCards)
        }
    }

    const getCards = () => {
        const cardsArr = request('http://localhost:3000/hotels')
            .then(onChangeState)

        return cardsArr
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <StyleHotelsSection>
            <StyleSectionWrapper>
                <StyleSectionHeader>
                    <StyleHeaderText>Explore unique <a href="#">places to stay </a></StyleHeaderText>
                    <StyleHeaderButton>
                        <StyleHeaderButtonText>All</StyleHeaderButtonText>
                        <Arrow/>
                    </StyleHeaderButton>
                </StyleSectionHeader>
                <StyleCardWrapper>
                {cards ? cards.map((item, i) => {
                    if (i > 2){
                        return
                    } 
                    return <HotelsCard key={item.id} {...item}/>
                }): null}
                </StyleCardWrapper>
                <StyleButton>Explore more stays</StyleButton>
            </StyleSectionWrapper>
        </StyleHotelsSection>
    )
}

export default HotelsSection