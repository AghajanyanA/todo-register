import {useContext, useEffect} from "react";
import {LoggedContext} from "../../App";
import {useNavigate} from "react-router-dom";

export const Main = () => {
    const {loggedStatus} = useContext(LoggedContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (loggedStatus.loggedIn) {
            navigate('/todos')
            return
        }
        navigate('/login')
    }, [loggedStatus.loggedIn]) //eslint-disable-line
}