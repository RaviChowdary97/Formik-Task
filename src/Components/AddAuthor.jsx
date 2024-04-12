import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const AddAuthor_Formik = () => {
  const navigate = useNavigate();

  const formValidationFormik = yup.object({
    name: yup.string().required("Fill the correct detail"),
    biography: yup.string().required("Fill the correct detail"),
    birhtday: yup.string().required("Fill the correct detail"),
  });
  const addauthor = async (author) => {
    const data = await fetch(
      "https://66162375b8b8e32ffc7c75a7.mockapi.io/Author/",
      {
        method: "POST",
        body: JSON.stringify(author),
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
      name: "",
      biography: "",
      birhtday: "",
    },
    validationSchema: formValidationFormik,
    onSubmit: (values) => {
      console.log(values);
      addauthor(values);
    },
  });
  return (
    <>
      {/* MUI Form Add Movie */}
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "100%" }}>
          <div style={{ display: "flex", marginTop: "95px" }}>
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
            {/* {formik.touched.name?formik.errors.name:""} */}
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
            value={formik.values.publication}
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
            Add Author
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

export default AddAuthor_Formik;
