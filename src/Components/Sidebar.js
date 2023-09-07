import "./Sidebar.css"
import GroupCard from "./GroupCard"

function Sidebar() {
    const displayGroupCreator = () => {
        const show = document.getElementsByClassName("group-container")
        show[0].style.display = "block"
    }
    return (
        <div className="sidebar">
            <h1>Pocket Notes</h1>
            <button onClick={displayGroupCreator} className="note-create-button"><b>+</b> Create Notes group</button>
            <GroupCard
                name='Amit' />
            <GroupCard name='Sanjeet' />
        </div>
    )
}

export default Sidebar;