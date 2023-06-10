import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

function Notes() {
  const apiUrl = import.meta.env.VITE_SOME_KEY;

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${apiUrl}${id}`, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

export default Notes;
