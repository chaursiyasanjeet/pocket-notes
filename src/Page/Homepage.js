import Sidebar from "../Components/Sidebar"
import NoteScreen from "../Components/NoteScreen"
import GroupCreator from "../Components/GroupCreator"
import "./Homepage.css"

export default function Homepage() {
    return (
        <div className="container">
            <Sidebar />
            <NoteScreen />
            <GroupCreator />
        </div>
    )
}