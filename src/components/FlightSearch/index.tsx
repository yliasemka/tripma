import { useFormik } from "formik"
import { StyleInput, StyleForm, StyleButton, StyleInputWrapper, StyleImgItem,} from "./style"


const FlightSearch = () => {

    const formik = useFormik({
        initialValues: {
            inFlight: '',
            toFlight: '',
            dateFlight: '',
            countPerson: undefined,
        },
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    const handleClick = () => {
        console.log('click')
    }

    return (
        <>
            <StyleForm onSubmit={formik.handleSubmit}>
                <StyleInputWrapper>
                    <StyleImgItem about="inFlight"/>
                    <StyleInput
                        id="inFlight"
                        type="text" 
                        name="inFlight"
                        placeholder="From where?"
                        value={formik.values.inFlight}
                        onChange={formik.handleChange}
                    />
                </StyleInputWrapper>
                <StyleInputWrapper>
                    <StyleImgItem about="toFlight"/>
                    <StyleInput
                        id="toFlight"
                        type="text"
                        name="toFlight"
                        placeholder="Where to?"
                        value={formik.values.toFlight}
                        onChange={formik.handleChange}
                    />
                </StyleInputWrapper>
                <StyleInputWrapper>
                    <StyleInput
                        id="dateFlight"
                        type="text"
                        name="dateFlight"
                        placeholder="Depart - Return"
                        value={formik.values.dateFlight}
                        onChange={formik.handleChange}
                        onClick={handleClick}
                    />
                    <StyleImgItem about="dateFlight"/>
                </StyleInputWrapper>
                <StyleInputWrapper>
                    <StyleImgItem about="person"/>
                    <StyleInput
                        id="countPerson"
                        type="number"
                        name="countPerson"
                        placeholder="1 adult"
                        value={formik.values.countPerson}
                        onChange={formik.handleChange}
                    />
                </StyleInputWrapper>
                <StyleButton type="submit">Search</StyleButton>
            </StyleForm>
        </>
    )
}

export default FlightSearch