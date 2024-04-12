import "./App.css";
import AddBook_Formik from "./Components/AddBook";
import BookList from "./Components/BookList";
import EditBook_Formik from "./Components/EditBook";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import AuthorList from "./Components/AuthorList";
import AddAuthor_Formik from "./Components/AddAuthor";
import EditAuthor_Formik from "./Components/EditAuthor";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/addbook" element={<AddBook_Formik />} />
          <Route path="/edit/:id" element={<EditBook_Formik />} />
          <Route path="/authorlist" element={<AuthorList />} />
          <Route path="/addauthor" element={<AddAuthor_Formik />} />
          <Route path="/edits/:id" element={<EditAuthor_Formik />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
