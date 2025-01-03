
import { 
    StyleCardWrapper , 
    StyleCardImg, 
    StyleCardTextWrapper, 
    StyleTextDescription, 
    StyleTextPrice, 
    StyleTextSubtitle, 
    StyleTextTitle
} from "./style"



export interface CardProps {
    title:string,
    description:string,
    price:string,
    image:string,
    id:number,
    size?: string
}

const FlightCard = (props:CardProps) => {

    const {title,description, price,image, size} = props
    return (
        <StyleCardWrapper about={size}>
            <StyleCardImg src={image} alt={title}/>
            <StyleCardTextWrapper>
                <StyleTextDescription>
                    <StyleTextTitle>{title}</StyleTextTitle>
                    <StyleTextSubtitle>{description}</StyleTextSubtitle>
                </StyleTextDescription>
                <StyleTextPrice>{price}</StyleTextPrice>
            </StyleCardTextWrapper>
        </StyleCardWrapper>
    )
}

export default FlightCard