import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteContentScreen from "../../Components/Mobile/NoteContentScreen/NoteContentScreen"
import Sidebar from "../../Components/Mobile/Sidebar/Sidebar"
function MobileHomepage() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Sidebar />} />
                    <Route path="/notescontent" element={<NoteContentScreen />} />
                </Routes>
            </Router>
        </div>
    )
}
export default MobileHomepage