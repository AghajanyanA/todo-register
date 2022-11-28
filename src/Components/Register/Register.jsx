import React, {useState, useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {LoggedContext} from "../../App";
import {MyAuthButton} from "../../assets/MyAuthButton";
import {Input, message} from "antd";

export const Register = () => {

    const {loggedStatus, setLoggedStatus} = useContext(LoggedContext)

    const [credentials, setCredentials] = useState(
        {
            email: '',
            password: '',
            passwordValidation: ''
        }
    )
    const navigate = useNavigate()

    const handleRegistrationSubmit = (e) => {
        e.preventDefault()
        if (credentials.password !== credentials.passwordValidation) {  //passwords dont match
            message.error('Passwords dont match', 5)
            return false
        }
        else if (credentials.email.trim().length === 0 || credentials.password.trim().length === 0) {
            message.warning('Fill out blanks', 5)
            return false
        }
        else {
            message.success('Successfully registered',1)

            setTimeout(() => {
                localStorage.setItem(credentials.email, credentials.password)
                setLoggedStatus({...loggedStatus, loggedIn: true, loggedEmail: credentials.email})
                navigate('/todos')
            }, 1000)
        }
    }

    const handleEmailChange = (e) => {
        setCredentials({...credentials, email: e.target.value})
    }
    const handlePasswordChange = (e) => {
        setCredentials({...credentials, password: e.target.value})
    }

    const handlePasswordValidChange = (e) => {
        setCredentials({...credentials, passwordValidation: e.target.value})
    }

    return (

        <div className='registerWrapper'>
            <form onSubmit={handleRegistrationSubmit}>
                <label>
                    Email
                    <div className='inputField'>
                        <Input size='small' placeholder="Email" type='email' value={credentials.email} onChange={handleEmailChange} autoComplete='email' />
                    </div>
                </label>
                <label>
                    Password
                    <div className='inputField'>
                        <Input.Password size='small' placeholder="Password" value={credentials.password} onChange={handlePasswordChange} autoComplete='new-password' />
                    </div>
                </label>
                <label>
                    Repeat password
                    <div className='inputField'>
                        <Input.Password size='small' placeholder="Password" value={credentials.passwordValidation} onChange={handlePasswordValidChange} autoComplete='new-password' />
                    </div>
                </label>
                <MyAuthButton type='submit' value='Sign up'/>
                <p>Already have an account? <Link to='/login'>Sign in.</Link></p>
            </form>
        </div>
    )
}