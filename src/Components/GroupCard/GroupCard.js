import { useState} from "react";
import "./GroupCard.css";


function GroupCard({ groupName, color }) {
  let logo = groupName ? groupName.slice(0, 2).toUpperCase() : [];

  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    setSelect((prev) => !prev);
  };

  return (
    <div
      onClick={handleSelect}
      style={{ backgroundColor: select ? "rgba(247, 236, 220, 1)" : "" }}
      className="card-container"
    >
    <div className="group-logo" style={{ backgroundColor: color?color:"rgba(204, 204, 204, 1)" }}>
        {logo}
    </div>
      <h3 className="card-group-name">{groupName}</h3>
    </div>
  );
}

export default GroupCard;
