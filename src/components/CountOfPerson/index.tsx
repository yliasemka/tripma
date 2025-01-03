import { useState } from "react"
import {
    StyleCounterWrapper,
    StyleCounterItemWrapper,
    StyleCounterItemButton,
    StyleCounterItemText,
    StyleCounterItemValue,
    StyleCounterItemBottomWrapper
} from './style'

interface CountPesonProps {
    adults: number,
    minors:number
}

interface CounterProps {
    onSelect: (selectedValue: string | CountPesonProps) => void,
    saveValue:CountPesonProps,
}

const CountOfPerson = ({onSelect, saveValue}:CounterProps) => {
    const [countAdult, setCountAdult] = useState<number>(saveValue.adults)
    const [countMinors, setCountMinors] = useState<number>(saveValue.minors)

    const handleClick = (num:number, type:string) => {
        if (type === 'adults'){
            setCountAdult((countAdult) => {
                const newCount = countAdult + num
                return newCount >= 0 ? newCount : countAdult 
            })
        } else {
            setCountMinors((countMinors) => {
                const newCount = countMinors + num
                return newCount >=0 ? newCount : countMinors
            })
        }
    }

    const handleMouseDown = (e:React.MouseEvent) => {
        e.preventDefault()
    }

    const handleMouseOut = () => {
        onSelect({adults:countAdult, minors:countMinors})
    }

    return (
        <StyleCounterWrapper onMouseDown={handleMouseDown} onMouseLeave={handleMouseOut}>
            <StyleCounterItemWrapper>
                <StyleCounterItemText>Adults</StyleCounterItemText>
                <StyleCounterItemBottomWrapper>
                    <StyleCounterItemButton about="minus" onClick={() => handleClick(-1, 'adults')}/>
                    <StyleCounterItemValue>{countAdult}</StyleCounterItemValue>
                    <StyleCounterItemButton about="plus" onClick={() => handleClick(1, 'adults')}/>
                </StyleCounterItemBottomWrapper>
            </StyleCounterItemWrapper>
            <StyleCounterItemWrapper>
                <StyleCounterItemText>Minors</StyleCounterItemText>
                <StyleCounterItemBottomWrapper>
                    <StyleCounterItemButton about="minus" onClick={() => handleClick(-1, 'minors')}/>
                    <StyleCounterItemValue>{countMinors}</StyleCounterItemValue>
                    <StyleCounterItemButton about="plus" onClick={() => handleClick(1, 'minors')}/>
                </StyleCounterItemBottomWrapper>
            </StyleCounterItemWrapper>
        </StyleCounterWrapper>
    )
}

export default CountOfPerson