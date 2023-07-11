//import logo from './logo.svg';
import './App.css';
import Settings from './Settings';
import Timer from './Timer';
import { useState } from 'react';
import SettingsContext from './SettingsContext';
import { TodoWrapper } from './TodoWrapper';
import Quote from './Quote';


function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
   
    <main>
       <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setBreakMinutes,
          setWorkMinutes 
        }}>

          <Quote />

          <h1 className='title'>BreakBoost</h1>
            <TodoWrapper />
          {showSettings ? <Settings /> : <Timer /> }
        
        </SettingsContext.Provider>
      
    </main>
  );
}

export default App;
