import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import { useState } from "react";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .min(4, "User name must be 8 characters")
    .required("Why not fill this feild"),
  img: yup.string().min(10).required("Why not fill this feild "),
  price: yup.string().min(3).required("Why not fill this feild "),
  summary: yup.string().min(30).required("Why not fill this feild "),
});

export default function AddPizza() {
  const [add, setAdd] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      img: "",
      price: "",
      summary: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (newPizza) => {
      navigate("/pizza");

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/pizza/addpizza`,
          newPizza
        );
        // localStorage.setItem("myreact", response.data.token)
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <Admin />
      {add ? (
        <div className="add-pizza-container">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              className="signin-input"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
            />
            <br />
            <span className="error">
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : null}
            </span>
            <br />
            <br />

            <TextField
              label="Poster"
              variant="outlined"
              className="signin-input"
              value={formik.values.img}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="img"
            />
            <br />
            <span className="error">
              {formik.touched.img && formik.errors.img
                ? formik.errors.img
                : null}
            </span>
            <br />
            <br />

            <TextField
              label="Price"
              variant="outlined"
              className="signin-input"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              name="price"
            />
            <br />
            <span className="error">
              {formik.touched.price && formik.errors.price
                ? formik.errors.price
                : null}
            </span>
            <br />
            <br />

            <TextField
              label="Summary"
              variant="outlined"
              className="signin-input"
              value={formik.values.summary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlurimg}
              type="text"
              name="summary"
            />
            <br />
            <span className="error">
              {formik.touched.summary && formik.errors.summary
                ? formik.errors.summary
                : null}
            </span>
            <br />
            <br />

            <Button
              variant="contained"
              type="sunmit"
              color="success"
              className="signin-button"
              onClick={() => setAdd(!add)}
            >
              Add Pizza
            </Button>
          </form>
        </div>
      ) : (
        <h1 className="box">Successfully Add Pizza</h1>
      )}
    </>
  );
}
