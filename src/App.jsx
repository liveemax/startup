import React, { useEffect,Suspense } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routers/AppRoutes';
import { useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Trigger = React.createContext({});

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: tomato;
  font-size: 50px;
  text-align: center;
`;

function App() {
    let [localPath, setLocalPath] = useState('/');
    let [localSpinner, setLocalSpinner] = useState(false);
    useEffect(()=>{
        window.addEventListener("unload",()=>{sessionStorage.removeItem("user")})
    },[])
    console.log(localSpinner)
    return (
    <div>
      <Trigger.Provider value={{setLocalSpinner,localPath,setLocalPath }}>
        <Navbar />
        {localSpinner?<Spinner><FontAwesomeIcon icon={faSpinner } spin={true}/></Spinner>:<AppRoutes />}
      </Trigger.Provider>
    </div>
  );
}

export default App;
