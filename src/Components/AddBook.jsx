import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const AddBook_Formik = () => {
  const navigate = useNavigate();

  const formValidationFormik = yup.object({
    title: yup.string().required("Fill the correct detail"),
    author: yup.string().required("Fill the correct detail"),
    isbn: yup.number().required("ISBN is required"),
    publication: yup.string().required("Publication date is required"),
  });
  const addbooks = async (books) => {
    const data = await fetch(
      "https://66162375b8b8e32ffc7c75a7.mockapi.io/Book/",
      {
        method: "POST",
        body: JSON.stringify(books),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    console.log(res);
  };

  const formik = useFormik({
    // it will take initial values
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      publication: "",
    },
    validationSchema: formValidationFormik,
    onSubmit: (values) => {
      console.log(values);
      addbooks(values);
    },
  });
  return (
    <>
      {/* MUI Form Add Movie */}
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
            {/* {formik.touched.name?formik.errors.name:""} */}
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
            Add Book
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
    </>
  );
};

export default AddBook_Formik;
