import React from "react";
import Note from "./Note";

const NotesList = ({ notes, setNotes }) => {
  return notes.length ? (
    notes.map((note) => <Note key={note.id} note={note} setNotes={setNotes} />)
  ) : (
    <h1 className="mt-20 text-center text-3xl font-bold text-gray-400">
      Empty Note
    </h1>
  );
};

export default NotesList;
