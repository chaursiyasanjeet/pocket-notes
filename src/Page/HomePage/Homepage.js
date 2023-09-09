import Sidebar from "../../Components/Sidebar/Sidebar";
import NoteDefaultHome from "../../Components/NoteDefaultHome/NoteDefaultHome";
import NotesContent from "../../Components/NotesContent/NotesContent";

import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="container">
      <Sidebar />
      <NoteScreen />
      <NotesContent />
    </div>
  );
}
