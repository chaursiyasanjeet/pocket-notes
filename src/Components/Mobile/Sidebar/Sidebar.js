import { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import GroupCard from "../GroupCard/GroupCard";
import GroupCreatorPopup from "../GroupCreatorPopup/GroupCreatorPopup";
import NoteContext from "../../Context/NoteContext";

function Sidebar() {
    const [sendData, setSendData] = useState()
    const dataContext = useContext(NoteContext)
    const displayGroupCreator = () => {
        const show = document.getElementsByClassName("group-container-mobile");
        show[0].style.display = "block";
    };

    useEffect(() => {
        const data = localStorage.getItem("notesData");
        if (data) {
            dataContext.setNotesData(JSON.parse(data));
        } else {
            dataContext.setNotesData([]);
        }
    }, []);

    const select = JSON.parse(localStorage.getItem('selected'))
    const data = dataContext.notesData ? Object.entries(dataContext.notesData) : [];
    useEffect(() => {
        setSendData(data.map((item) => {
            return (
                <GroupCard
                    key={item[0]}
                    groupName={item[1].groupName}
                    color={item[1].color}
                    selected={item[1].isSelected}
                />
            );
        }));
    }, [])

    //to convert Object into array




    return (
        <>
            <div className="mobile_sidebar">
                <h1>Pocket Notes</h1>
                <button onClick={displayGroupCreator} className="note-create-button-mobile">
                    <b>+</b> Create Notes group
                </button>
            </div>
            <div className="all_Groups_Sidebar_mobile">{sendData}</div>
            <GroupCreatorPopup />
        </>
    );
}
export default Sidebar;
