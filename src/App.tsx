import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Buy milk" },
    { id: 2, title: "Go to the gym" },
    { id: 3, title: "Learn React" },
  ]);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
