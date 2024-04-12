import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBook_Formik = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
    publication: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://66162375b8b8e32ffc7c75a7.mockapi.io/Book/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book");
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching book:", error.message);
      }
    };

    fetchBook();
  }, [id]);

  const formValidationFormik = yup.object({
    title: yup.string().required("Title is required"),
    author: yup.string().required("Author is required"),
    isbn: yup.number().required("ISBN is required"),
    publication: yup.string().required("Publication date is required"),
  });

  const updateBook = async (updatedBookData) => {
    try {
      const response = await fetch(
        `https://66162375b8b8e32ffc7c75a7.mockapi.io/Book/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBookData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update book");
      }
      navigate("/books");
    } catch (error) {
      console.error("Error updating book:", error.message);
    }
  };

  const formik = useFormik({
    initialValues: bookData,
    validationSchema: formValidationFormik,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      updateBook(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ width: "100%" }}>
        <div style={{ display: "flex", marginTop: "85px" }}>
          <TextField
            sx={{
              width: "50%",
              margin: "1% 25% 1% 25%",
            }}
            id="filled-basic"
            label="Title"
            variant="filled"
            value={formik.values.title}
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          />

          <p>{formik.errors.title}</p>
        </div>
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Author"
          variant="filled"
          value={formik.values.author}
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
        />
        <p>{formik.errors.author}</p>

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="ISBN Number"
          variant="filled"
          value={formik.values.isbn}
          name="isbn"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
        />
        <p>{formik.errors.isbn}</p>
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Publication"
          variant="filled"
          value={formik.values.publication}
          name="publication"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
        />
        <p>{formik.errors.publication}</p>

        <Button
          sx={{
            width: "10%",
            margin: "1% 1% 1% 38%",
          }}
          variant="contained"
          type="submit"
        >
          Edit Book
        </Button>

        <Button
          sx={{
            width: "10%",
          }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </form>
  );
};

export default EditBook_Formik;
