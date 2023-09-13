import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NoteDefaultHome from "../../Components/NoteDefaultHome/NoteDefaultHome";
import NotesContentScreen from "../../Components/NotesContentScreen/NotesContentScreen";
import NoteContext from "../../Components/Context/NoteContext"

import "./Homepage.css";

export default function Homepage() {

  const [notesData, setNotesData] = useState(
    localStorage.getItem("allGroups") || []
  )

  return (
    <NoteContext.Provider value={{ notesData, setNotesData }}>
      <div className="container">
        <Sidebar />
        <NoteDefaultHome />
        <NotesContentScreen />
      </div>
    </NoteContext.Provider>
  );
}
