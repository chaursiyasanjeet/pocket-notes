import "./NotesContentScreen.css";
import enterlogo from "../../assets/enterlogo.svg";
import NotesInputData from "../NotesInputData/NotesInputData"
import { useState, useEffect } from "react";

function NotesContentScreen() {

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

    const notes_data = [
      {
        groupname: "sanjeet",
        isSelected: false,
        notesData: [newNote]
      }
    ];
    localStorage.setItem('notesInputData', JSON.stringify(notes_data))

    // setNotesInput(prev => [
    //   ...prev,
    //   newNote
    // ])

    console.log(notesInput)
  }

  const handleNoteSave = (e) => {

    //for creating new line in text area
    if (e.nativeEvent.keyCode === 13 && e.nativeEvent.shiftKey) {
      setTextInput(e.target.value + <br />)
      console.log(textInput)
    }

    //for saving notes on pressing enter
    if (e.nativeEvent.keyCode === 13 && !e.nativeEvent.shiftKey) {
      e.preventDefault();
      e.target.value = ""
      saveNote();
    }
  };
  let savedDataFetched = ""
  useEffect(() => {
    const data = localStorage.getItem("notes_data");
    if (data) {
      savedDataFetched = JSON.parse(data);
    } else {
      savedDataFetched = "";
    }
  }, []);

  const dataConvert = savedDataFetched ? Object.entries(savedDataFetched.notesData) : [];
  console.log(dataConvert)
  const data = dataConvert.map((item) => {
    return (<NotesInputData
      currentTime={item.time}
      currentDate={item.date}
      notesData={item.notesData}
    />)
  })

  return (
    <div className="notes_content_screen">
      <div className="notes_title">
        <div className="notes_title_logo" style={{ background: "blue" }}>
          CA
        </div>
        <h3 className="card-group-name">Cuvette Projects</h3>
      </div>
      {data}
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
