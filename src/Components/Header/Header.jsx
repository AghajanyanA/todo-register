import {useContext, useEffect} from "react";
import {LoggedContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {MyAuthButton} from "../../assets/MyAuthButton";

const src = 'https://www.trilux.com/fileadmin/Content/DE/Images/Anwendungen/Office/Buerobereiche/TRILUX_Office_Flure_Treppenhaus.jpg'


export const Header = () => {
    const { loggedStatus, setLoggedStatus } = useContext(LoggedContext)

    const handleSignOut = () => {
        setLoggedStatus({...loggedStatus, loggedIn: false, loggedEmail: ''})
    }
    const nav = useNavigate()

    useEffect(() => {
        nav('/')
    }, [loggedStatus.loggedIn] ) //eslint-disable-line


  return (
      <div>
          <div className='headerContainer'>
              <img className='headerImg' src={src} alt='' />
              <h3 className='todoList'>Todo list</h3>
          </div>

          {loggedStatus.loggedIn && <div>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <h5>//welcome, {loggedStatus.loggedEmail}</h5>
              <MyAuthButton onClick={handleSignOut} value='Sign out'/>
          </div>}
      </div>
  )
}