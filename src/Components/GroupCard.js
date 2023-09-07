import './GroupCard.css'
function GroupCard(props) {
    return (
        <div className="card-container">
            <div className="group-logo">
                SA
            </div>
            <h3 className="card-group-name">{props.name}</h3>
        </div>
    )
}

export default GroupCard