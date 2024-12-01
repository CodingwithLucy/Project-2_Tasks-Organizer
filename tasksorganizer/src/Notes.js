import React from "react";
import { Table } from "react-bootstrap";
import Note from "./Note.js";

function Notes() {
  const noteList = [
    {
      title: "Send mail",
      category: "Work",
      details: "Mail with schedule question",
      date: new Date("2024-11-15"),
    },
    {
      title: "Training",
      category: "Hobby",
      details: "Legs day",
      date: new Date("2024-11-18"),
    },
    {
      title: "Shopping",
      category: "Home",
      details: "Buy pasta and tomatoes",
      date: new Date("2024-11-13"),
    },
  ];

  return (
    <div>
      <h3>List of notes</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Title</th> <th>Category</th> <th>Details</th> <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {noteList.map((note, index) => (
            <Note
              key={index}
              title={note.title}
              category={note.category}
              details={note.details}
              date={note.date}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Notes;
