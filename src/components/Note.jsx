import React, { useState } from "react";

const Note = ({ note, setNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [prevTitle, setPrevTitle] = useState(note.title);
  const [prevDescription, setPrevDescription] = useState(note.description);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  return (
    <div className="mt-4 flex items-center justify-between gap-4 bg-slate-200 p-4">
      <div className="">
        <div>
          {isEditing ? (
            <input
              className="px-2 text-2xl font-semibold"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          ) : (
            <h2 className="text-2xl font-semibold">{note.title}</h2>
          )}
        </div>

        <div>
          {isEditing ? (
            <textarea
              className="mt-1 w-full resize-none px-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          ) : (
            <p>{note.description}</p>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        {prevTitle !== title || prevDescription !== description ? (
          <button
            className="rounded-md bg-purple-500 px-4 py-2 font-semibold text-white transition hover:bg-purple-400"
            onClick={() => {
              setIsEditing(false);
              setPrevTitle(title);
              setPrevDescription(description);

              setNotes((prevNotes) =>
                prevNotes.map((prevNote) =>
                  prevNote.id === note.id
                    ? { ...prevNote, title, description }
                    : prevNote,
                ),
              );
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-400"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        )}
        <button
          className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-400"
          onClick={() => {
            setNotes((prevNotes) =>
              prevNotes.filter((prevNote) => note.id !== prevNote.id),
            );
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
