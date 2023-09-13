import { useContext, useEffect } from "react";
import "./Sidebar.css";
import GroupCard from "../GroupCard/GroupCard";
import GroupCreatorPopup from "../GroupCreatorPopup/GroupCreatorPopup";
import NoteContext from "../../Context/NoteContext";

function Sidebar() {
    const dataContext = useContext(NoteContext)
    const displayGroupCreator = () => {
        const show = document.getElementsByClassName("group-container-mobile");
        show[0].style.display = "block";
    };

    useEffect(() => {
        const data = localStorage.getItem("allGroups");
        if (data) {
            dataContext.setNotesGroup(JSON.parse(data));
        } else {
            dataContext.setNotesGroup([]);
        }
    }, []);

    //to convert Object into array
    const data = dataContext.notesGroup ? Object.entries(dataContext.notesGroup) : [];
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
            <div className="mobile_sidebar">
                <h1>Pocket Notes</h1>
                <button onClick={displayGroupCreator} className="note-create-button-mobile">
                    <b>+</b> Create Notes group
                </button>
            </div>
            <div className="all_Groups_Sidebar_mobile">{done}</div>
            <GroupCreatorPopup />
        </>
    );
}
export default Sidebar;