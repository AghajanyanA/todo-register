import {Routes, Route } from "react-router-dom";
import {Login} from "../Components/Login/Login";
import {Register} from "../Components/Register/Register";
import {Todos} from "../Components/Todos/Todos";
import {Main} from "../Components/Main/Main"

export const ReactRouter = () => (
    <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/todos' element={ <Todos /> } />
    </Routes>
)