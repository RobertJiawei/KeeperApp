import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNotes] = useState({
    title: "",
    content: "",
  });
  const [isHide, setHide] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addNewNote(note);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function checkClick() {
    setHide(true);
  }

  return (
    <div>
      <form className="create-note">
        {isHide && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onClick={checkClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isHide ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isHide ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
