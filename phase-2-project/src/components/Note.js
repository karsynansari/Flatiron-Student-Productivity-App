import React from "react";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div class-name="note-footer">
        <small>{date}</small>
        <button className="delete-icon" onClick={() => handleDeleteNote(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
