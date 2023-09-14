import "./GroupCard.css";
import { useRef, useContext, useEffect } from "react";
import NoteContext from "../../Context/NoteContext";

function GroupCard({ groupName, color, selected }) {
  const selectGroupContext = useContext(NoteContext)
  const selectGroup = useRef(null)

  //to get name logo
  const logo = groupName ? (/\s/.test(groupName) ? groupName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase() : groupName.slice(0, 2).toUpperCase()) : []


  const handleSelect = (e) => {
    const groupSelected = selectGroup.current.innerText
    selectGroupContext.setSelected(groupSelected)
    localStorage.setItem('selected', JSON.stringify(groupSelected))


    const storedData = JSON.parse(localStorage.getItem('notesData'));

    if (storedData && storedData.length > 0) {
      let foundIndex = storedData.findIndex((item) => item.isSelected === true);
      if (foundIndex !== -1) {
        storedData[foundIndex].isSelected = false;
      }
      foundIndex = storedData.findIndex((item) => item.groupName === groupSelected);
      storedData[foundIndex].isSelected = true
      localStorage.setItem('notesData', JSON.stringify(storedData))
    }
  };

  useEffect(() => {
    const groupSelected = selectGroup.current.innerText
    selectGroupContext.setSelected('')
    localStorage.setItem('selected', JSON.stringify(groupSelected))
  }, [])






  return (
    <div
      onClick={handleSelect}
      style={{ backgroundColor: selected ? "rgba(247, 236, 220, 1)" : "" }}
      className="card-container"
    >
      <div className="group-logo" style={{ backgroundColor: color ? color : "rgba(204, 204, 204, 1)" }}>
        {logo}
      </div>
      <h3 ref={selectGroup} className="card-group-name">{groupName}</h3>
    </div>
  );
}

export default GroupCard;
