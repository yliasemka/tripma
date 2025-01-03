import { useState } from "react"
import { CalendarHeader, StyleCalendar, StyleCalendarButton, StyleCalendarCheckbox, StyleCalendarContent, StyleCalendarHeader, StyleCalendarMain, StyledCheckboxLabel, Table, TableDay, TableHeader } from "./style"
import { StyleButton } from "../FlightSearch/style"

const weekDays = ['S', 'M', 'T', 'W', 'T','F','S']

interface CalendarProps{
    onSelect: (selectedValue:string) => void,
}

interface DateProps {
    numDate:number | string,
    fullDate: Date
}

const CustomFormCalendar = ({onSelect}:CalendarProps) => {
    
    const [curDate, setcurDate] = useState(new Date())
    const selectedDays:Date[] = []

    const nextDate = new Date(curDate.getFullYear(), curDate.getMonth() + 1)
    const prevDate = new Date(curDate.getFullYear(), curDate.getMonth() -1)

    const convertMounth = (date:Date) => {
        const strMounth = date.toLocaleString('en-US', { month: 'long' })
        return strMounth
    }

    const handleClick = (num:number) => {
        const newDate = new Date(curDate)
        newDate.setMonth(newDate.getMonth() + num)
        if(newDate.getDate() !== curDate.getDate()){
            newDate.setDate(0)
        }
        setcurDate(newDate)
    }

    const generateCalendarDays = (date:Date) => {
        const year = date.getFullYear()
        const mounth = date.getMonth()
        const firstDayOfWeek = new Date(year, mounth, 1).getDay()
        const daysInMounth = new Date(year, mounth + 1, 0).getDate()
        const daysInPrevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth(), 0).getDate(); 
        const calendarDays:DateProps[] = [] 
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const objDate = {
                numDate:String(daysInPrevMonth - i),
                fullDate:new Date(prevDate.getFullYear(), prevDate.getMonth(), i)
            }
            calendarDays.push(objDate);
        }
        for (let i = 1; i <= daysInMounth; i++) {
            const objDate = {
                numDate:i,
                fullDate:new Date(year, mounth, i)
            }
            calendarDays.push(objDate);
        }
        const nextDays = 42 - calendarDays.length; 
        for (let i = 1; i <= nextDays; i++) {
            const objDate = {
                numDate:String(i),
                fullDate:new Date(nextDate.getFullYear(), nextDate.getMonth(), i)
            }
            calendarDays.push(objDate);
        }

        return calendarDays;
    }

    const formatDate = (date: Date): string => {
        return date.toLocaleString("en-US", { month: "short", day: "numeric" });
    }

    const handleMouseDown = (e:React.MouseEvent) => {
        e.preventDefault()
    }

    const handleClickDay = (e:any, day:DateProps) => {
        selectedDays.push(day.fullDate)
        const targetValue = e.target
        if(targetValue.classList.contains('active')){
            targetValue.classList.remove('active')
        }else {
            targetValue.classList.add('active')
        }
    }

    const handleSubmitDates =  () => {
        const formattedDates = selectedDays.map(formatDate);
        onSelect(formattedDates.join(" - "))
        selectedDays.length === 0
    }
    

    const calendarDays = generateCalendarDays(curDate)
    const nextCalendarDays = generateCalendarDays(new Date(curDate.getFullYear(), curDate.getMonth() + 1))
    return (
        <StyleCalendarMain  onMouseDown={handleMouseDown}>
            <StyleCalendarHeader>
                <div style={{display:'flex', justifyContent:"space-between", width:'40%'}}>
                    <CalendarCheckbox 
                        type="checkbox" 
                        name="roundTrip" 
                        valueCheckbox="Round Trip"
                    />
                    <CalendarCheckbox 
                        type="checkbox" 
                        name="oneWay" 
                        valueCheckbox="One Way"
                    />
                </div>
                <StyleButton style={{width:'20%', borderRadius:'4px'}} onClick={handleSubmitDates}>Done</StyleButton>
            </StyleCalendarHeader>
            <StyleCalendarContent>
                <StyleCalendarButton 
                    type="button" 
                    about="left" 
                    onClick={() => handleClick(-1)}
                />
                <StyleCalendar>
                    <CalendarHeader>{convertMounth(curDate)} {curDate.getFullYear()}</CalendarHeader>
                    <CalendarTable 
                        calendarDays={calendarDays} 
                        onClick={(e,day) => handleClickDay(e,day)}
                    />
                </StyleCalendar>
                <StyleCalendar>
                    <CalendarHeader>{convertMounth(new Date(curDate.getFullYear(), curDate.getMonth() + 1))} {curDate.getFullYear()}</CalendarHeader>
                    <CalendarTable 
                        calendarDays={nextCalendarDays} 
                        onClick={(e,day) => handleClickDay(e,day)}
                    />
                </StyleCalendar>
                <StyleCalendarButton type="button" about="right" onClick={() => handleClick(1)}/>
            </StyleCalendarContent>
        </StyleCalendarMain>
    )

}

const CalendarCheckbox = (props:any) => {
    const { type, name, valueCheckbox } = props
    return (
        <StyledCheckboxLabel>
            <StyleCalendarCheckbox type={type} name={name}/>
            {valueCheckbox}
        </StyledCheckboxLabel>
    )
}

const CalendarTable = (props: {
    calendarDays:DateProps[];
    onClick: (e:React.MouseEvent, day:DateProps) => void;
}) => {
    return (
        <Table>
            <thead>
                <tr>
                    {weekDays.map(name => <TableHeader key={Math.random()}>{name}</TableHeader>)}
                </tr>
            </thead>
            <tbody>
            {Array.from({ length: 5 }).map((_, weekIndex) => (
                    <tr key={weekIndex}>
                        {props.calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, index) => {
                            return (
                                <TableDay 
                                    key={index} 
                                    about={typeof day.numDate === 'string' ? 'string' : 'number'} 
                                    onMouseDown={(e) => props.onClick(e,day)}>
                                    {day.numDate}
                                </TableDay>
                            )
                        })}
                    </tr>
            ))}
            </tbody>
        </Table>
    )
}


export default CustomFormCalendar