import { useEffect, useRef, useState, useContext } from "react";
import "./GroupCreatorPopup.css";
import NoteContext from "../Context/NoteContext";

function GroupCreatorPopup() {
  const dataContext = useContext(NoteContext)

  const refOne = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
  }, []);

  const handleOutsideClick = (e) => {
    if (!refOne.current.contains(e.target)) {
      refOne.current.style.display = "none";
    }
  };


  //creating new group
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("")

  const handleClick = (e) => {
    e.stopPropagation()
    setColor(getComputedStyle(e.target).backgroundColor);
  }

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newGroup = { groupName: groupName, color: color, isSelected: "false" }
    dataContext.setNotesGroup([...dataContext.notesGroup, newGroup]);
    localStorage.setItem(
      "allGroups",
      JSON.stringify([...dataContext.notesGroup, newGroup])
    );
    setGroupName("")
    e.target.style.display = "none";
  };

  return (
    <form onSubmit={handleSumbit} ref={refOne} className="group-container">
      <h3>Create New Notes group</h3>
      <label htmlFor="groupName" className="groupName">
        Group Name
      </label>
      <input
        type="text"
        id="groupName"
        name="groupName"
        placeholder="Enter your group name..."
        value={groupName}
        onChange={handleGroupName}
        required="required"
      />
      <br></br>
      <div className="group_colors_choose_container">
        <label htmlFor="color" className="choose-color">
          Choose Colour
        </label>
        <div
          className="color_chooser color_chooser_1"
          onClick={handleClick}
        />
        <div
          className="color_chooser color_chooser_2"
          onClick={handleClick}
        />
        <div
          className="color_chooser color_chooser_3"
          onClick={handleClick}
        />
        <div
          className="color_chooser color_chooser_4"
          onClick={handleClick}
        />
        <div
          className="color_chooser color_chooser_5"
          onClick={handleClick}
        />
        <div
          className="color_chooser color_chooser_6"
          onClick={handleClick}
        />
      </div>
      <button type="sumbit">Create</button>
    </form>
  );
}

export default GroupCreatorPopup;