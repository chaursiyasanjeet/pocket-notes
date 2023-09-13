import "./NoteInputData.css"

function NoteInputData({ currentTime, currentDate, notesData }) {
  return (
    <div className="notes_value_box_mobile">
      <div className="notes_date_time_mobile">
        <span>{currentTime}</span>
        <br />
        <span>{currentDate}</span>
      </div>
      <p className="notes_value_mobile">
        {notesData}
      </p>
    </div>
  )
}

export default NoteInputData