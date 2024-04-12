import { useState } from "react";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import AuthorUi from "./AuthorUi";

export default function AuthorList() {
  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAuthor();
  }, []);

  async function getAuthor() {
    const data = await fetch(
      `https://66162375b8b8e32ffc7c75a7.mockapi.io/Author`
    );
    const res = await data.json();
    console.log(res);
    setAuthor(res);
  }

  const deleteAuthor = async (id) => {
    console.log(`https://66162375b8b8e32ffc7c75a7.mockapi.io/Author/${id}`);
    let res = await fetch(
      `https://66162375b8b8e32ffc7c75a7.mockapi.io/Author/${id}`,
      { method: "DELETE" }
    );
    let data = await res.json();
    console.log(data);
    getAuthor();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          height: "380px",
          marginLeft: "35px",
          marginTop: "85px",
        }}
      >
        {author.map((element) => (
          <AuthorUi
            key={element.id}
            {...element}
            id={element.id}
            deleteButton={
              <IconButton
                aria-label="share"
                onClick={() => {
                  deleteAuthor(element.id);
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="share"
                onClick={() => {
                  navigate(`/edits/${element.id}`);
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
