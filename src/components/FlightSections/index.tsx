import { Arrow } from "../../assets"
import { 
    StyleFlightSection, 
    StyleHeaderButton, 
    StyleHeaderText, 
    StyleSectionHeader, 
    StyleHeaderButtonText,
    StyleCardWrapper,
} from "./style"
import { useHttp } from "../../hooks/http.hook" 
import { useEffect, useState } from "react"
import { CardProps } from "./FlightCard"
import FlightCard from "./FlightCard"


const FlightSection = () => {
    const [cards, setCards] = useState<CardProps[] | null>([])
    const {request} = useHttp()

    const onChangeState = (cardsArr:CardProps[]) => {
        if(cards !== null){
            const newCards = [...cardsArr, ...cards]
            setCards(newCards)
        }
    }

    const getCards = () => {
        const cardsArr = request('https://675c161ffe09df667f6292c4.mockapi.io/deals?limit=4')
            .then(onChangeState)

        return cardsArr
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <StyleFlightSection>
            <StyleSectionHeader>
                <StyleHeaderText>Find your next adventure with these <a href="#">flight deals</a></StyleHeaderText>
                <StyleHeaderButton>
                    <StyleHeaderButtonText>All</StyleHeaderButtonText>
                    <Arrow/>
                </StyleHeaderButton>
            </StyleSectionHeader>
            <StyleCardWrapper>
            {cards ? cards.map((item, i) => {
                if (i > 3){
                    return
                } else if (i === 3){
                    return <FlightCard key={item.id} {...item} size='large'/>
                }
                return <FlightCard key={item.id} {...item}/>
            }): null}
            </StyleCardWrapper>
        </StyleFlightSection>
    )
}

export default FlightSection