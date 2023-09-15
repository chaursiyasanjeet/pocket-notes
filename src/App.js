import { useState } from "react";
import DesktopHomepage from "./Page/Desktop/HomePage/DesktopHomepage";
import MobileHomepage from "./Page/Mobile/MobileHomepage";
import NoteContext from "./Components/Context/NoteContext"

function App() {

  const [screen, setScreen] = useState(window.innerWidth)
  const checkScreen = () => {
    setScreen(window.innerWidth)
  }
  window.addEventListener('resize', checkScreen)

  const [notesData, setNotesData] = useState(
    localStorage.getItem("notesData") || []
  )

  const [selected, setSelected] = useState(
    localStorage.getItem('selected') || []
  )

  return (
    <NoteContext.Provider value={{ notesData, setNotesData, selected, setSelected }}>
      <div className="App">
        {screen > 550 ?
          <DesktopHomepage /> :
          <MobileHomepage />
        }
      </div>
    </NoteContext.Provider>
  );
}

export default App;
