import "./NotesContentScreen.css";
import enterlogo from "../../../assets/enterlogo.svg";
import NotesInputData from "../NotesInputData/NotesInputData";
import { useState, useContext, useEffect } from "react";
import NoteContext from "../../Context/NoteContext";

function NotesContentScreen() {
  const notesDataContext = useContext(NoteContext);
  const [textInput, setTextInput] = useState("");
  const [dataToShow, setDataToShow] = useState("");
  const [update, setUpdate] = useState("");
  const [color, setColor] = useState("blue");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    const selectedGroupFetch = localStorage.getItem("selected");
    if (selectedGroupFetch) {
      notesDataContext.setSelected(JSON.parse(selectedGroupFetch));
    }
  }, [notesDataContext]);

  const saveNote = () => {
    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    const newNote = {
      date: currentDate,
      time: currentTime,
      notesData: textInput,
    };
    //setting selected group
    const groupselected = notesDataContext.selected;
    //reterving data from local storage and parsing it
    const storedData = JSON.parse(localStorage.getItem("notesData"));
    //finding group index in the data
    const foundIndex = storedData.findIndex(
      (item) => item.groupName === groupselected
    );
    if (storedData && storedData.length > 0) {
      storedData[foundIndex].notes.push(newNote);
      notesDataContext.notesData[foundIndex].notes.push(newNote);
      localStorage.setItem("notesData", JSON.stringify(storedData));
    }
    setUpdate(update + 1);
  };

  const handleNoteSave = (e) => {
    //for creating new line in text area
    if (e.nativeEvent.keyCode === 13 && e.nativeEvent.shiftKey) {
      console.log();
      setTextInput((prevValue) => prevValue + "\n");
    }

    //for saving notes on pressing enter
    if (e.nativeEvent.keyCode === 13 && !e.nativeEvent.shiftKey) {
      e.preventDefault();
      e.target.value = "";
      saveNote();
    }
  };

  const groupName = notesDataContext.selected;
  const logo = groupName
    ? /\s/.test(groupName)
      ? groupName
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
      : groupName.slice(0, 2).toUpperCase()
    : [];

  const storedData = JSON.parse(localStorage.getItem("notesData"));
  const foundIndex = storedData.findIndex(
    (item) => item.groupName === groupName
  );
  useEffect(() => {
    if (storedData && foundIndex !== -1) {
      const dataIntoArray = storedData[foundIndex].notes;
      const data = dataIntoArray.map((item, index) => (
        <NotesInputData
          key={index}
          currentTime={item.time}
          currentDate={item.date}
          notesData={item.notesData}
        />
      ));
      setColor(storedData[foundIndex].color);
      setDataToShow(data);
    }
  }, [update, foundIndex]);

  return (
    <div className="notes_content_screen">
      <div className="notes_title">
        <div className="notes_title_logo" style={{ background: color }}>
          {logo}
        </div>
        <h3 className="card-group-name">{groupName}</h3>
      </div>
      <div className="notes_content">{dataToShow}</div>
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
