import "./GroupCard.css";
import { useNavigate, } from "react-router-dom";
import { useContext, useRef } from "react";
import NoteContext from "../../Context/NoteContext";


function GroupCard({ groupName, color, selected }) {
    const selectGroupContext = useContext(NoteContext)
    const selectGroup = useRef(null)
    const redirect = useNavigate()

    //to get name logo
    const logo = groupName ? (/\s/.test(groupName) ? groupName
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase() : groupName.slice(0, 2).toUpperCase()) : []


    const handleSelect = (e) => {
        redirect('/notescontent')
        const groupSelected = selectGroup.current.innerText
        selectGroupContext.setSelected(groupSelected)
        localStorage.setItem('selected', JSON.stringify(groupSelected))
    };

    return (
        <div
            onClick={handleSelect}
            style={{ backgroundColor: selected ? "rgba(247, 236, 220, 1)" : "" }}
            className="card-container-mobile"
        >
            <div className="group-logo-mobile" style={{ backgroundColor: color ? color : "rgba(204, 204, 204, 1)" }}>
                {logo}
            </div>
            <h3 ref={selectGroup} className="card-group-name-mobile">{groupName}</h3>
        </div>
    );
}

export default GroupCard;
