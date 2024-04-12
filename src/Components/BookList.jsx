import { useState } from "react";
import BookUi from "./BookUi";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const data = await fetch(
      `https://66162375b8b8e32ffc7c75a7.mockapi.io/Book`
    );
    const res = await data.json();
    console.log(res);
    setBooks(res);
  }

  const deleteBook = async (id) => {
    console.log(`https://66162375b8b8e32ffc7c75a7.mockapi.io/Book/${id}`);
    let res = await fetch(
      `https://66162375b8b8e32ffc7c75a7.mockapi.io/Book/${id}`,
      { method: "DELETE" }
    );
    let data = await res.json();
    console.log(data);
    getBooks();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3%",
          height: "380px",
          marginLeft: "35px",
          marginTop: "85px",
        }}
      >
        {books.map((element) => (
          <BookUi
            key={element.id}
            {...element}
            id={element.id}
            deleteButton={
              <IconButton
                aria-label="share"
                onClick={() => {
                  deleteBook(element.id);
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="share"
                onClick={() => {
                  navigate(`/edit/${element.id}`);
                }}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </>
  );
}
