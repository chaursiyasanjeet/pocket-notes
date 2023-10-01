import { useContext, useEffect } from "react";
import "./Sidebar.css";
import GroupCard from "../GroupCard/GroupCard";
import GroupCreatorPopup from "../GroupCreatorPopup/GroupCreatorPopup";
import NoteContext from "../../Context/NoteContext";

function Sidebar() {
  const dataContext = useContext(NoteContext);
  const displayGroupCreator = () => {
    const show = document.getElementsByClassName("group-container");
    show[0].style.display = "block";
  };

  const dataLocal = localStorage.getItem("notesData");
  useEffect(() => {
    if (dataLocal) {
      dataContext.setNotesData(JSON.parse(dataLocal));
    } else {
      dataContext.setNotesData([]);
    }
  }, [dataLocal]);

  //to convert Object into array
  const data = dataContext.notesData
    ? Object.entries(dataContext.notesData)
    : [];

  const done = data.map((item) => {
    return (
      <GroupCard
        key={item[0]}
        groupName={item[1].groupName}
        color={item[1].color}
        selected={item[1].isSelected}
      />
    );
  });

  //run on first render to clean selected group and selected name
  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(""));

    const storedData = JSON.parse(localStorage.getItem("notesData"));
    if (storedData && storedData.length > 0) {
      let foundIndex = storedData.findIndex((item) => item.isSelected === true);
      if (foundIndex !== -1) {
        storedData[foundIndex].isSelected = false;
      }
      localStorage.setItem("notesData", JSON.stringify(storedData));
    }
  }, []);

  return (
    <>
      <div className="sidebar">
        <h1>Pocket Notes</h1>
        <button onClick={displayGroupCreator} className="note-create-button">
          <b>+</b> Create Notes group
        </button>
      </div>
      <div className="all_Groups_Sidebar">{done}</div>
      <GroupCreatorPopup />
    </>
  );
}

export default Sidebar;
