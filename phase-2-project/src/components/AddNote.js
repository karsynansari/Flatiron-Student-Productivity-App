import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  function handleChange(e) {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }
  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="add-note-footer">
        <small> {characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
