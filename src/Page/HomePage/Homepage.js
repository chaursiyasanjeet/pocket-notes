import Sidebar from "../../Components/Sidebar/Sidebar";
import NoteScreen from "../../Components/NoteScreen/NoteScreen";
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
