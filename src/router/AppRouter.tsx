import { Route, Routes } from "react-router-dom"
import { routes } from "../routes/routes"
import MainTemplate from "../components/MainTemplate"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<MainTemplate/>}>
                <Route path={routes.FLIGTS}></Route>
                <Route path={routes.HOTELS}></Route>
                <Route path={routes.PACKEGASE}></Route>
                <Route path={routes.SINGIN}></Route>
                <Route path={routes.SINGUP}></Route>
            </Route>
        </Routes>
    )
}

export default AppRouter