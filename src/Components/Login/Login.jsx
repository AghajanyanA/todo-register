import React, {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {LoggedContext} from "../../App";
import {Input, message} from "antd";
import {MyAuthButton} from "../../assets/MyAuthButton";

export const Login = () => {

    const {loggedStatus, setLoggedStatus} = useContext(LoggedContext)
    const navigate = useNavigate()

    if(loggedStatus.loggedIn) {
        navigate('/todos')
    }

    const [credentials, setCredentials] = useState(
        {
            email: '',
            password: ''
        }
    )

    const [validator, setValidator] = useState(undefined)


    const validatorCallback = () => setTimeout(() => {
        setValidator(undefined)
    }, 5000)



    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (localStorage.getItem(credentials.email) === null) { //unsuccessful login - wrong email
            clearTimeout(validatorCallback())
            setValidator(null)
            validatorCallback()
        }
        else if (localStorage.getItem(credentials.email) === credentials.password) { //successful login
            setLoggedStatus({...loggedStatus, loggedIn: true, loggedEmail: credentials.email})
            navigate('/todos')
        }
    }

    const handleEmailChange = (e) => {
        setCredentials({...credentials, email: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setCredentials({...credentials, password: e.target.value})
    }




    return (
        <div className='loginWrapper'>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    Email
                    <div className='inputField'>
                        <Input size='small' placeholder="Email" type='email' value={credentials.email} onChange={handleEmailChange} autoComplete='email' />
                    </div>
                </label>
                <label>
                    Password
                    <div className='inputField'>
                        <Input.Password size='small' placeholder="Password" value={credentials.password} onChange={handlePasswordChange} autoComplete='current-password' />
                    </div>
                </label>

                <div className='buttons'>
                    <MyAuthButton disabled type='submit' value='Sign in'/>
                </div>
                {validator === null ?
                    <div className='loginEmailValidator'>
                        No data found! Check the spelling, or <Link to='/register'>register a new account</Link>
                    </div> : ''}
            </form>

            <div>Don't have an account? <Link to='/register'>Register now!</Link></div>
        </div>
    )
}