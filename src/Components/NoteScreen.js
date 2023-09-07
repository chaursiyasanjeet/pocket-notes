import "./Notescreen.css"
function NoteScreen() {
    return (
        <div className="notescreen">
            <div className="description">
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <div className="encrypted">
                <img src=".\assets\encrypted.svg" alt="encrypted-symbol" className="encrypted-logo" />
                <p>end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default NoteScreen