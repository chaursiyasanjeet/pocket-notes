import "./NoteContentScreen.css";
import enterlogo from "../../../assets/enterlogo.svg";
import backlogo from "../../../assets/backlogo.svg";
import NoteInputData from "../NoteInputData/NoteInputData"
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../../Context/NoteContext"

function NoteContentScreen() {
    const redirect = useNavigate()
    const notesDataContext = useContext(NoteContext)
    const [textInput, setTextInput] = useState('')
    const [dataToShow, setDataToShow] = useState('')
    const [update, setUpdate] = useState('')

    const handleClick = () => {
        redirect("/")
    }
    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    useEffect(() => {
        const selectedGroupFetch = localStorage.getItem('selected')
        if (selectedGroupFetch) {
            notesDataContext.setSelected(JSON.parse(selectedGroupFetch))
        }
    }, [notesDataContext.selected])

    const saveNote = () => {
        const currentDate = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        const currentTime = new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })
        const newNote = { date: currentDate, time: currentTime, notesData: textInput }
        //setting selected group
        const groupselected = notesDataContext.selected
        //reterving data from local storage and parsing it 
        const storedData = JSON.parse(localStorage.getItem('notesData'));
        //finding group index in the data
        const foundIndex = storedData.findIndex((item) => item.groupName === groupselected);
        if (storedData && storedData.length > 0)
            storedData[foundIndex].notes.push(newNote)
        localStorage.setItem('notesData', JSON.stringify(storedData))
        setUpdate(update + 1)
        setTextInput('')
    }

    const groupName = notesDataContext.selected
    const logo = groupName ? (/\s/.test(groupName) ? groupName
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase() : groupName.slice(0, 2).toUpperCase()) : []

    //reterving data from local storage and parsing it 
    const storedData = JSON.parse(localStorage.getItem('notesData'));
    const foundIndex = storedData.findIndex((item) => item.groupName === groupName);
    useEffect(() => {
        if (storedData && foundIndex !== -1) {
            const dataIntoArray = storedData[foundIndex].notes;
            const data = dataIntoArray.map((item, index) => (
                <NoteInputData
                    key={index}
                    currentTime={item.time}
                    currentDate={item.date}
                    notesData={item.notesData}
                />
            ));
            setDataToShow(data);
        }

    }, [update, foundIndex]);



    return (
        <div className="notes_content_screen_mobile">
            <div className="notes_title_mobile">
                <img onClick={handleClick} src={backlogo} alt="back-logo" />
                <div className="notes_title_logo_mobile" style={{ background: "blue" }}>
                    {logo}
                </div>
                <h3 className="card-group-name-mobile">{groupName}</h3>
            </div>
            <div className="notes_content_mobile">
                {dataToShow}
            </div>
            <div className="notes_input_area_mobile">
                <textarea
                    placeholder="Enter your text here......"
                    onChange={handleChange}
                    value={textInput}
                ></textarea>
                <img onClick={saveNote} src={enterlogo} alt="enter_logo_save_note" />
            </div>
        </div>
    );
}

export default NoteContentScreen;
