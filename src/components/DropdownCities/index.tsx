import { StyleDropdownList, StyleDropdownListItem } from "./style"
import { useHttp } from "../../hooks/http.hook";
import { useEffect, useState } from "react";


interface City {
    id:number,
    city:string;
    abbr:string
}

interface DropdownProps {
    onSelect: (value:string) => void,
}

const DropdownSearchList:React.FC<DropdownProps>  = ({onSelect}) => {
    
    const [cites, setCities] = useState<City[] | null>(null)
    const {request} = useHttp()

    const onChangeState = (newArr: City[]) => {
        setCities([...newArr])
    }

    const onRequest =  () => {
        const arrCity = request('https://6756cf56c0a427baf94a7bb3.mockapi.io/city')
            .then(onChangeState)
        
        return arrCity
    }

    const handleClick = (value:string) => {
        onSelect(value)
    }

    useEffect(() => {
        onRequest()
    }, [])
    return (
        <>
            {cites !== null  ? 
            <StyleDropdownList>
                {cites.map(item => 
                    <DropdownSearchListItem 
                    key={item.id} 
                    abbr={item.abbr}
                    onClick={() => handleClick(item.abbr)}
                    />)}
            </StyleDropdownList>
            : null}
        </>
    )
}

const DropdownSearchListItem =(props:any) => {
    const { abbr, onClick } = props
    return (
        <StyleDropdownListItem onMouseDown={onClick}>{abbr}</StyleDropdownListItem>
    )
}

export default DropdownSearchList