import "./GroupCard.css";
import { useRef, useContext, useEffect, useState } from "react";
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


  //function to set background color to selected group
  const setSelectColor = () => {
    const storedData = JSON.parse(localStorage.getItem('notesData'));
    const groupSelected = selectGroup.current.innerText
    if (storedData && storedData.length) {
      let foundIndex = storedData.findIndex((item) => item.isSelected === true);
      if (foundIndex !== -1) {
        storedData[foundIndex].isSelected = false;
        selectGroupContext.notesData[foundIndex].isSelected = false
      }
      foundIndex = storedData.findIndex((item) => item.groupName === groupSelected);
      storedData[foundIndex].isSelected = true
      selectGroupContext.notesData[foundIndex].isSelected = true
      localStorage.setItem('notesData', JSON.stringify(storedData))
    }
  }

  //selecting group on clicking
  const handleSelect = (e) => {
    const groupSelected = selectGroup.current.innerText
    selectGroupContext.setSelected(groupSelected)
    localStorage.setItem('selected', JSON.stringify(groupSelected))
    setSelectColor()
    console.log(selected)
  };

  //run on first render to clean selected group and selected name
  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(''))

    const storedData = JSON.parse(localStorage.getItem('notesData'));
    if (storedData && storedData.length > 0) {
      let foundIndex = storedData.findIndex((item) => item.isSelected === true);
      if (foundIndex !== -1) {
        storedData[foundIndex].isSelected = false;
      }
      localStorage.setItem('notesData', JSON.stringify(storedData))
    }
  }, [])



  return (
    <div
      onClick={handleSelect}
      className={`card-container ${selected ? "selected" : ""}`}
    >
      <div className="group-logo" style={{ backgroundColor: color ? color : "rgba(204, 204, 204, 1)" }}>
        {logo}
      </div>
      <h3 ref={selectGroup} className="card-group-name">{groupName}</h3>
    </div>
  );
}

export default GroupCard;
