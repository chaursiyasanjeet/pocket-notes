import "./GroupCard.css";


function GroupCard({ groupName, color, selected }) {

  //to get name logo
  const logo = groupName ? (/\s/.test(groupName) ? groupName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase() : groupName.slice(0, 2).toUpperCase()) : []


  const handleSelect = (e) => {
    console.log(e)
  };

  return (
    <div
      onClick={handleSelect}
      style={{ backgroundColor: selected ? "rgba(247, 236, 220, 1)" : "" }}
      className="card-container"
    >
      <div className="group-logo" style={{ backgroundColor: color ? color : "rgba(204, 204, 204, 1)" }}>
        {logo}
      </div>
      <h3 className="card-group-name">{groupName}</h3>
    </div>
  );
}

export default GroupCard;
