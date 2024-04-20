import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./Components/ReminderList";
import Reminder from "./Models/Reminder";

const reminders: Reminder[] = [
  { id: 1, title: "Feed the cat" },
  { id: 2, title: "Take out the trash" },
  { id: 3, title: "Do the dishes" },
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
