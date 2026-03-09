import { useState } from 'react'
import './App.css'
import NavBarComponent from './components/Menu/NavBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import MusicaComponent from './components/Discografia/MusicaComponent';
import AboutComponent from './components/About/AboutComponent';
import MasComponent from './components/Mas/MasComponent';


function App() {

  const [activeView, setActiveView] = useState('');

  return (
    <>
      
      <NavBarComponent setActiveView={setActiveView} />
      
        {activeView === './HomeComponent.jsx' && <HomeComponent />}
        {activeView === './MusicaComponent.jsx' && <MusicaComponent/>}
        {activeView === './AboutComponent.jsx' && <AboutComponent/>}
        {activeView === './MasComponent.jsx' && <MasComponent />}
      
    </>
  )
}

export default App;