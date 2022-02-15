import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

function Notepad() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First day of project week!",
      date: "02/13/2022",
    },
    {
      id: nanoid(),
      text: "Work from coffee shop 8am-11am. Don't forget headphones!",
      date: "02/14/2022",
    },
    {
      id: nanoid(),
      text: "Take a walk around the neighborhood and do some stretching over lunch:)",
      date: "02/15/2022",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-notepad-data")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-notepad-data", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <h1>Notepad</h1>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default Notepad;
