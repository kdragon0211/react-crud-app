import React, { useState } from "react";
import { randomUid } from "rand-uid";

const CreateNoteForm = ({ setNotes, setTab }) => {
  const [note, setNote] = useState({ title: "", description: "" });

  const handleOnChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setNotes((prevNotes) => [{ id: randomUid(), ...note }, ...prevNotes]);
    setTab("notes");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mx-auto max-w-96 rounded-lg bg-slate-200 p-4"
    >
      <h1 className="text-center text-2xl font-bold text-purple-500">
        Create Note
      </h1>

      <div className="my-3">
        <input
          type="text"
          name="title"
          placeholder="Write your note title"
          value={note.title}
          onChange={handleOnChange}
          className="w-full p-3"
          required
        />
      </div>

      <div className="w-full">
        <textarea
          type="text"
          name="description"
          placeholder="Write your note description"
          onChange={handleOnChange}
          value={note.description}
          className="w-full resize-y p-3"
          required
        ></textarea>
      </div>

      <button className="mt-4 w-full rounded-sm bg-purple-600 p-3 font-semibold text-white hover:bg-purple-500">
        Create
      </button>
    </form>
  );
};

export default CreateNoteForm;
