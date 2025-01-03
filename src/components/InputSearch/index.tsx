import { useState } from "react"
import { StyleDropdownWrapper, StyleInput} from "./style"
import DropdownSearchList from "../DropdownCities"
import CustomFormCalendar from "../CustomCalendar"
import CountOfPerson from "../CountOfPerson"


interface InputProps {
    name: string, 
    placeholder:string,
    type:string
}

interface CountPesonProps {
    adults: number,
    minors:number
}

const InputSearch = (props:InputProps) => {

    const [value, setValue] = useState('')
    const [active, setActive] = useState('')
    const [valuePersons, setValuePersons] = useState<CountPesonProps>({
        adults: 0,
        minors:0,
    })

    const { name, placeholder, type } = props

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleFocus = () => {
        setActive(name)
        console.log("focus")
    }

    const handleBlur = () => {
        setActive("")
    }

    const handleSelectValue = (selectedValue:string | CountPesonProps) => {
        if (selectedValue !== value) {
            if(typeof selectedValue === 'object'){
                setValuePersons(selectedValue)
            } else {
                setValue(selectedValue);
            }
            setActive("")
        }
    } 

    const dropdownList = active === "inFlight" || active === "toFlight" ? <DropdownSearchList onSelect={handleSelectValue}/> : null
    const calendarOpen = active === 'dateFlight' ? <CustomFormCalendar  onSelect={handleSelectValue}/> : dropdownList
    
    return (
        <>
        <StyleDropdownWrapper>
            <StyleInput
            name={name} 
            type={type} 
            placeholder={placeholder} 
            value={name === 'countPerson' ? valuePersons.adults + valuePersons.minors : value} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur ={handleBlur}
            />
            {active === 'countPerson' ? <CountOfPerson saveValue={valuePersons} onSelect={handleSelectValue}/> : calendarOpen}
        </StyleDropdownWrapper>
        </>
            
    )
}


export default InputSearch