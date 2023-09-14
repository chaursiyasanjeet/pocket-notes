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

  };

  return (
    <div
      onClick={handleSelect}
      style={{ backgroundColor: "blue" }}
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
