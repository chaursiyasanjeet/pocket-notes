import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NoteDefaultHome from "../../Components/NoteDefaultHome/NoteDefaultHome";
import NotesContentScreen from "../../Components/NotesContentScreen/NotesContentScreen";
import NoteContext from "../../Components/Context/NoteContext"

import "./Homepage.css";

export default function Homepage() {

  const [notesGroup, setNotesGroup] = useState(
    localStorage.getItem("allGroups") || []
  )

  const [notesData, setNotesData] = useState(
    localStorage.getItem("notesData") || []
  )

  return (
    <NoteContext.Provider value={{ notesGroup, setNotesGroup, notesData, setNotesData }}>
      <div className="container">
        <Sidebar />
        <NoteDefaultHome />
        <NotesContentScreen />
      </div>
    </NoteContext.Provider>
  );
}
