import { StyleForm, StyleButton} from "./style"
import InputSearch from "../InputSearch"

const FlightSearch = () => {

/*     const [fromValues, setFormValues] = useState({
        inFlight: "",
        toFlight: "",
        dateFlight: "",
        countPerson: 0,
    }) */

    const handleSubmit = (event:any) => {
        event.preventDefault()
    
        const formData = new FormData(event.target)

        const formValues: Record<string, string> = {};
        formData.forEach((value, key) => {
            formValues[key] = value.toString();
        });
    
        // Выводим значения формы в консоль
        console.log(formData)
        console.log(formValues);
    }

    return (
        <>
            <StyleForm onSubmit={handleSubmit}>
                <InputSearch name='inFlight' placeholder="From where?" type="text"></InputSearch>
                <InputSearch name='toFlight' placeholder="Where to?" type="text"></InputSearch>
                <InputSearch name='dateFlight' placeholder="Depart - Return" type="text"></InputSearch>
                <InputSearch name='countPerson' placeholder="1 adult" type="number"></InputSearch>
                <StyleButton type="submit">Search</StyleButton>
            </StyleForm>
        </>
    )
}

export default FlightSearch