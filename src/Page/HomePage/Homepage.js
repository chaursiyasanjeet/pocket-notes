import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NoteDefaultHome from "../../Components/NoteDefaultHome/NoteDefaultHome";
import NotesContent from "../../Components/NotesContent/NotesContent";
import NoteContext from "../../Components/Context/NoteContext"

import "./Homepage.css";

export default function Homepage() {

const [notesData,setNotesData]=useState({
  groupName:"",
  groupColor:""

})
  return (
    <NoteContext.Provider value={{notesData,setNotesData}}>
    <div className="container">
      <Sidebar />
      <NoteDefaultHome />
      <NotesContent />
    </div>
    </NoteContext.Provider>
  );
}
