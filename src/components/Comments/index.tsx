import { useEffect, useState } from "react"
import { 
    StyleCommentSection, 
    StyleCommentsWrapper, 
    StyleHeader 
} from "./style"
import { useHttp } from "../../hooks/http.hook"

import CommentCard, { CardProps } from "./CommentCard"

const Comments = () => {

    const [cards, setCards] = useState<CardProps[] | null>([])
    const {request} = useHttp()

    const onChangeState = (cardsArr:CardProps[]) => {
        if(cards !== null){
            const newCards = [...cardsArr, ...cards]
            setCards(newCards)
        }
    }

    const getCards = () => {
        const cardsArr = request('http://localhost:3000/comments')
            .then(onChangeState)

        return cardsArr
    }

    useEffect(() => {
        getCards()
    }, [])


    return (
        <StyleCommentSection>
            <StyleHeader>What Tripma users are saying</StyleHeader>
            <StyleCommentsWrapper>
                {cards ? cards.map((item ,id) => {
                    if (id > 2){
                        return
                    }
                    return <CommentCard key={id} {...item}/>
                }) : null}
            </StyleCommentsWrapper>
        </StyleCommentSection>
    )
}

export default Comments