import React, { useState } from "react";

interface NewReminderProps {
  onNewReminder: (title: string) => void;
}

function NewReminder({ onNewReminder }: NewReminderProps): React.JSX.Element {
  const [title, setTitle] = useState<string>("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      return;
    }
    console.log(title);
    onNewReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
