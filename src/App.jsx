import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routers/AppRoutes';
import { useState } from 'react';

export const Trigger = React.createContext({});

function App() {
  const [localTrigger, setLocalTrigger] = useState(true);
    let [localPath, setLocalPath] = useState('/');
    return (
    <div>
      <Trigger.Provider value={{ localTrigger, setLocalTrigger,localPath,setLocalPath }}>
        <Navbar />
        <AppRoutes />
      </Trigger.Provider>
    </div>
  );
}

export default App;
