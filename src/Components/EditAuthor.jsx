import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditAuthor_Formik = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    name: "",
    biography: "",
    birhtday: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://66162375b8b8e32ffc7c75a7.mockapi.io/Author/${id}`
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
    name: yup.string().required("Name is required"),
    biography: yup.string().required("Biography is required"),
    birhtday: yup.string().required("Birthday is required"),
  });

  const updateAuthor = async (author) => {
    try {
      const response = await fetch(
        `https://66162375b8b8e32ffc7c75a7.mockapi.io/Author/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(author),
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
      updateAuthor(values);
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
            label="Name"
            variant="filled"
            value={formik.values.title}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          />

          <p>{formik.errors.name}</p>
        </div>
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Biography"
          variant="filled"
          value={formik.values.author}
          name="biography"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
        />
        <p>{formik.errors.biography}</p>

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Birthday"
          variant="filled"
          value={formik.values.isbn}
          name="birhtday"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
        />
        <p>{formik.errors.birhtday}</p>

        <Button
          sx={{
            width: "10%",
            margin: "1% 1% 1% 38%",
          }}
          variant="contained"
          type="submit"
        >
          Edit Author
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

export default EditAuthor_Formik;
