import "./Sidebar.css";
import GroupCard from "../GroupCard/GroupCard";
import GroupCreator from "../GroupCreator/GroupCreator";
import { useState, useEffect } from "react";

function Sidebar() {
  const displayGroupCreator = () => {
    const show = document.getElementsByClassName("group-container");
    show[0].style.display = "block";
  };

  const [groupDetails, setGroupDetails] = useState(
    localStorage.getItem("allGroups") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("allGroups");
    if (data) {
      setGroupDetails(JSON.parse(data));
    } else {
      setGroupDetails([]);
    }
  }, []);

  //to convert Object into array
  const data = Object.entries(groupDetails);
  const done = data.map((item) => {
    return (
      <GroupCard
        key={item[0]}
        groupName={item[1].groupName}
        color={item[1].color}
      />
    );
  });

  return (
    <>
      <div className="sidebar">
        <h1>Pocket Notes</h1>
        <button onClick={displayGroupCreator} className="note-create-button">
          <b>+</b> Create Notes group
        </button>
      </div>
      <div className="allGroupsSidebar">{done}</div>
      <GroupCreator
        groupDetails={groupDetails}
        setGroupDetails={setGroupDetails}
      />
    </>
  );
}
export default Sidebar;
