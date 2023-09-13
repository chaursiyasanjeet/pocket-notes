import Sidebar from "../../../Components/Desktop/Sidebar/Sidebar";
import NoteDefaultHome from "../../../Components/Desktop/NoteDefaultHome/NoteDefaultHome";
import NotesContentScreen from "../../../Components/Desktop/NotesContentScreen/NotesContentScreen";


import "./DesktopHomepage.css";

export default function DesktopHomepage() {

  return (
    <div className="container">
      <Sidebar />
      <NoteDefaultHome />
      <NotesContentScreen />
    </div>
  );
}
