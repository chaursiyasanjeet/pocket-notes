import "./NotesContent.css";
import enterlogo from "../../assets/enterlogo.svg";

function NotesContent() {


 const date=()=>{ new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}

  const time=()=> new Date().toLocaleTimeString('en-US',{hour:"numeric",minute:"numeric"})

  const handleNoteSave = (e) => {
    //for creating new line in text area
    if (e.nativeEvent.keyCode === 13 && e.nativeEvent.shiftKey) {
      console.log("New notes created");
    }

    //for saving notes on press
    if (e.nativeEvent.keyCode === 13 && !e.nativeEvent.shiftKey) {
      e.preventDefault()
      console.log("note saved");
    }
  };
  return (
    <div className="notes_content_screen">
      <div className="notes_title">
        <div className="notes_title_logo" style={{ background: "blue" }}>
          CA
        </div>
        <h3 className="card-group-name">Cuvette Projects</h3>
      </div>
      <div className="notes_content">
        <div className="notes_value_box">
          <div className="notes_date_time">
            <span>02:42 Am</span>
            <br />
            <span>10 Sept 2023</span>
          </div>
          <p className="notes_value">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day's writing projects, words are
            already flowing from their fingers.
          </p>
        </div>
        <div className="notes_value_box">
          <div className="notes_date_time">
            <span>02:42 Am</span>
            <br />
            <span>10 Sept 2023</span>
          </div>
          <p className="notes_value">Cuvette pocket notes app</p>
        </div>
      </div>
      <div className="notes_input_area">
        <textarea
          type="text"
          placeholder="Enter your text here......"
          onKeyDown={handleNoteSave}
        ></textarea>
        <img src={enterlogo} alt="enter_logo_save_note" />
      </div>
    </div>
  );
}

export default NotesContent;
