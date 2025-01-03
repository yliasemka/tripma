import { Route, Routes } from "react-router-dom"
import { routes } from "../routes/routes"
import MainTemplate from "../components/MainTemplate"
import Home from "../pages/Home"
import Flight from "../pages/Flights"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<MainTemplate/>}>
                <Route path={routes.HOME} element={<Home/>}></Route>
                <Route path={routes.FLIGTS} element={<Flight/>}></Route>
                <Route path={routes.HOTELS}></Route>
                <Route path={routes.PACKEGASE}></Route>
                <Route path={routes.SINGIN}></Route>
                <Route path={routes.SINGUP}></Route>
            </Route>
        </Routes>
    )
}

export default AppRouter