
import { 
    StyleCardWrapper , 
    StyleCardImg, 
    StyleCardTextWrapper, 
    StyleTextSubtitle, 
    StyleTextTitle
} from "./style"



export interface CardProps {
    title:string,
    description:string,
    price:string,
    image:string,
    id:number,
}

const HotelsCard = (props:CardProps) => {

    const {title,description, image} = props
    return (
        <StyleCardWrapper>
            <StyleCardImg src={image} alt={title}/>
            <StyleCardTextWrapper>
                <StyleTextTitle>{title}</StyleTextTitle>
                <StyleTextSubtitle>{description}</StyleTextSubtitle>
            </StyleCardTextWrapper>
        </StyleCardWrapper>
    )
}

export default HotelsCard