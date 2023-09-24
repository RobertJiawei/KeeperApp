import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNote] = useState([]);

  function addOne(newNote) {
    addNote((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteOne(id) {
    addNote((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <body>
      <div>
        <Header />
        <CreateArea addNewNote={addOne} />
        {notes.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              deleteNote={deleteOne}
            />
          );
        })}
      </div>
      <Footer />
    </body>
  );
}

export default App;
