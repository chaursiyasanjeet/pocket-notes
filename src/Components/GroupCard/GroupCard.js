import "./GroupCard.css";
function GroupCard({ groupName, color }) {
  let logo = groupName ? groupName.slice(0, 2).toUpperCase() : [];
  return (
    <div className="card-container">
      <div className="group-logo" style={{ background: color }}>
        {logo}
      </div>
      <h3 className="card-group-name">{groupName}</h3>
    </div>
  );
}

export default GroupCard;
