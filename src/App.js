import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesktopHomepage from "./Page/Desktop/HomePage/DesktopHomepage";
import MobileHomepage from "./Page/Mobile/MobileHomepage";
import NoteContext from "./Components/Context/NoteContext"

function App() {

  const [screen, setScreen] = useState(window.innerWidth)
  const checkScreen = () => {
    setScreen(window.innerWidth)
  }
  window.addEventListener('resize', checkScreen)


  const [notesGroup, setNotesGroup] = useState(
    localStorage.getItem("allGroups") || []
  )

  const [notesData, setNotesData] = useState(
    localStorage.getItem("notesData") || []
  )

  return (
    <NoteContext.Provider value={{ notesGroup, setNotesGroup, notesData, setNotesData }}>
      <div className="App">
        {screen > 600 ?
          <DesktopHomepage /> :
          <MobileHomepage />
        }
      </div>
    </NoteContext.Provider>
  );
}

export default App;
