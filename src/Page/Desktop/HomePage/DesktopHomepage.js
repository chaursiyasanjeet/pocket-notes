import Sidebar from "../../../Components/Desktop/Sidebar/Sidebar";
import NoteDefaultHome from "../../../Components/Desktop/NoteDefaultHome/NoteDefaultHome";
import NotesContentScreen from "../../../Components/Desktop/NotesContentScreen/NotesContentScreen";
import NoteContext from "../../../Components/Context/NoteContext";
import "./DesktopHomepage.css";
import { useContext } from "react";

export default function DesktopHomepage() {
  const noteData = useContext(NoteContext)
  return (
    <div className="container">
      <Sidebar />
      {noteData.selected.length ? <NotesContentScreen /> : <NoteDefaultHome />}
    </div>
  );
}
