import "./NotesContentScreen.css";
import enterlogo from "../../assets/enterlogo.svg";
import NotesInputData from "../NotesInputData/NotesInputData"
import { useState, useEffect, useContext } from "react";
import NoteContext from "../Context/NoteContext"

function NotesContentScreen() {
  const notesDataContext = useContext(NoteContext)

  const [notesInput, setNotesInput] = useState([])
  const [textInput, setTextInput] = useState('')
  const [notesData, setNotesData] = useState('')

  const handleChange = (e) => {
    setTextInput(e.target.value)
  }


  const saveNote = () => {
    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })
    const newNote = { date: currentDate, time: currentTime, notesData: textInput }

    notesDataContext.setNotesData([...notesDataContext.notesData, newNote])
    localStorage.setItem('notesData', JSON.stringify([...notesDataContext.notesData, newNote]))
  }
  const handleNoteSave = (e) => {

    //for creating new line in text area
    if (e.nativeEvent.keyCode === 13 && e.nativeEvent.shiftKey) {
      setTextInput(e.target.value + <br />)
    }

    //for saving notes on pressing enter
    if (e.nativeEvent.keyCode === 13 && !e.nativeEvent.shiftKey) {
      e.preventDefault();
      e.target.value = ""
      saveNote();
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("notesData");
    if (data) {
      notesDataContext.setNotesData(JSON.parse(data))
    } else {
      notesDataContext.setNotesData([])
    }
  }, []);

  const dataConvert = notesDataContext.notesData ? Object.entries(notesDataContext.notesData) : [];
  const data = dataConvert.map((item) => {
    return (<NotesInputData
      key={item[0]}
      currentTime={item[1].time}
      currentDate={item[1].date}
      notesData={item[1].notesData}
    />)
  })



  return (
    <div className="notes_content_screen">
      <div className="notes_title">
        <div className="notes_title_logo" style={{ background: "blue" }}>
          SA
        </div>
        <h3 className="card-group-name">Cuvette Projects</h3>
      </div>
      <div className="notes_content">
        {data}
      </div>
      <div className="notes_input_area">
        <textarea
          placeholder="Enter your text here......"
          onKeyDown={handleNoteSave}
          onChange={handleChange}
        ></textarea>
        <img onClick={saveNote} src={enterlogo} alt="enter_logo_save_note" />
      </div>
    </div>
  );
}

export default NotesContentScreen;
