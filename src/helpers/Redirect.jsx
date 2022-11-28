import {useContext, useEffect} from "react";
import {LoggedContext} from "../App";
import {useNavigate} from "react-router-dom";
export const LoggedRedirect = () => {

    const {loggedStatus} = useContext(LoggedContext)
    const navigate = useNavigate()


    return (
        useEffect(() => {
            if(!loggedStatus.loggedIn) {
                navigate('/register')
            }
        }, [loggedStatus.loggedIn]) //eslint-disable-line
    )
}