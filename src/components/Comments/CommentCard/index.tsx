import {
    StyleCard,
    StyleCarTextWrapper, 
    StyleCardAvatar,
    StyleCardDescription,
    StyleCardHeader, 
    StyleCardStars,
    ReadMoreButton,
} from "./style"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react"



export interface CardProps {
    avatar: string,
    name: string,
    bplace: string,
    bdate: string,
    description: string,
    id: number,
    stars: number
}

const CommentCard = (props:CardProps) => {

    const { avatar, name, bplace, bdate, description, stars } = props

    const starArrBuild = (num:number) => {
        const starArr = []
        for (let i = 0; i < num; i++){
            starArr.push(faStarSolid)
        }
        for (let i = num; i < 5; i++){
            starArr.push(faStarRegular)
        }

        return starArr
    }

    return (
        <StyleCard>
            <StyleCardAvatar src={avatar} alt={name}/>
            <StyleCarTextWrapper>
                <StyleCardHeader>
                    <h4>{name}</h4>
                    <p>{bplace} | {bdate}</p>
                </StyleCardHeader>
                <StyleCardStars>
                    {starArrBuild(stars).map((item, id) => (
                    <FontAwesomeIcon key={id} icon={item}/>
                    ))}
                </StyleCardStars>
                <StyleCardDescription>
                    <EnableText text={description} maxLenght={150}/>
                </StyleCardDescription>
            </StyleCarTextWrapper>
        </StyleCard>
    )
}

const EnableText = ({text, maxLenght}:{text:string, maxLenght:number}) => {

    const [isExpandedd, setIsExpanded] = useState<boolean>(false)

    if (text.length < maxLenght){
        return <StyleCardDescription>{text}</StyleCardDescription>
    }

    return (
        <StyleCardDescription isexpanded={isExpandedd}>
            {isExpandedd ? text : text.slice(0, maxLenght)}
            <ReadMoreButton onClick={() => setIsExpanded(!isExpandedd)}>
                {isExpandedd ? " read less" : " read more..."}
            </ReadMoreButton>
        </StyleCardDescription>
    )
}

export default CommentCard