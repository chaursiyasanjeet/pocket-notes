import { useRef, useState, useContext } from "react";
import "./GroupCreatorPopup.css";
import NoteContext from "../../Context/NoteContext";

function GroupCreatorPopup() {
  const dataContext = useContext(NoteContext);
  const handleOutsideClick = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      refOne.current.style.display = "none";
    }
  };
  const refOne = useRef(null);
  if (refOne.current) {
    document.addEventListener("click", handleOutsideClick, true);
  }

  //creating new group
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("");

  const handleClick = (e) => {
    e.stopPropagation();
    setColor(getComputedStyle(e.target).backgroundColor);
  };

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();

    const allGroups = JSON.parse(localStorage.getItem("notesData"));
    if (allGroups && allGroups.length > 0) {
      let foundIndex = allGroups.findIndex(
        (item) => item.groupName === groupName
      );
      if (foundIndex !== -1) {
        setGroupName("");
        return alert("Group Name Exist");
      }
    }

    const newGroup = {
      groupName: groupName,
      color: color,
      isSelected: false,
      notes: [],
    };
    dataContext.setNotesData([...dataContext.notesData, newGroup]);
    localStorage.setItem(
      "notesData",
      JSON.stringify([...dataContext.notesData, newGroup])
    );
    setGroupName("");
    setColor("");
    e.target.style.display = "none";
    document.removeEventListener("click", handleOutsideClick, true);
  };

  return (
    <form
      onSubmit={handleSumbit}
      ref={refOne}
      className="group-container-mobile"
    >
      <h3>Create New Notes group</h3>
      <label htmlFor="groupName" className="groupName_mobile">
        Group Name
      </label>
      <input
        type="text"
        id="groupName_mobile"
        name="groupName"
        placeholder="Enter your group name..."
        value={groupName}
        onChange={handleGroupName}
        required="required"
      />
      <br></br>
      <div className="group_colors_choose_container_mobile">
        <label htmlFor="color" className="choose-color-mobile">
          Choose Colour
        </label>
        <div
          className={`color_chooser_mobile color_chooser_1  ${
            color === "rgb(204, 204, 204)" ? "selected" : ""
          }`}
          onClick={handleClick}
        />
        <div
          className={`color_chooser_mobile color_chooser_2  ${
            color === "rgb(255, 121, 242)" ? "selected" : ""
          }`}
          onClick={handleClick}
        />
        <div
          className={`color_chooser_mobile color_chooser_3  ${
            color === "rgb(67, 230, 252)" ? "selected" : ""
          }`}
          onClick={handleClick}
        />
        <div
          className={`color_chooser_mobile color_chooser_4  ${
            color === "rgb(241, 149, 118)" ? "selected" : ""
          }`}
          onClick={handleClick}
        />
        <div
          className={`color_chooser_mobile color_chooser_5  ${
            color === "rgb(0, 71, 255)" ? "selected" : ""
          }`}
          onClick={handleClick}
        />
        <div
          className={`color_chooser_mobile color_chooser_6  ${
            color === "rgb(102, 145, 255)" ? "selected" : ""
          }`}
          onClick={handleClick}
        />
      </div>
      <button type="sumbit">Create</button>
    </form>
  );
}

export default GroupCreatorPopup;
