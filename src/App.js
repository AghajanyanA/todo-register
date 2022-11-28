import './App.css';
import 'antd/dist/antd.css'
import React, {useState} from "react";
import {ReactRouter} from "./routes/reactRouter";
import {Header} from "./Components/Header/Header";

export const LoggedContext = React.createContext(false)
function App() {

    const [loggedStatus, setLoggedStatus] = useState({
        loggedIn: false,
        loggedEmail: ''
    })

  return (
    <div className="App">
        <LoggedContext.Provider value={{ loggedStatus, setLoggedStatus }}>
            <Header />
            <ReactRouter />
        </LoggedContext.Provider>
    </div>
  );
}

export default App;
