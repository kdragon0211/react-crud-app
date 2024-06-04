import { useState } from "react";
import NoteTabs from "./NoteTabs";
import NotesList from "./NotesList";
import CreateNoteForm from "./CreateNoteForm";
import { randomUid } from "rand-uid";

const Notes = () => {
  const [activeTab, setActiveTab] = useState("notes");

  const [notes, setNotes] = useState([
    {
      id: randomUid(),
      title: "Notes List",
      description: "This is a list of notes",
    },
    {
      id: randomUid(),
      title: "Another note",
      description: "This is a list of notes",
    },
  ]);

  return (
    <div className="mx-auto max-w-screen-xl font-mono">
      <NoteTabs
        activeTab={activeTab}
        tabs={["notes", "create note"]}
        onChangeTab={(tab) => setActiveTab(tab)}
      />
      {activeTab === "create note" ? (
        <CreateNoteForm setNotes={setNotes} setTab={setActiveTab} />
      ) : (
        <NotesList notes={notes} setNotes={setNotes} />
      )}
    </div>
  );
};

export default Notes;
