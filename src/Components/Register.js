import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
  name: yup.string().min(4, "User name must be 8 characters").required(),
  email: yup.string().min(5, "User name must be 15 characters").required(),
  password: yup.string().min(8).max(12).required("Why not fill this Password "),
});

export default function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: 0,
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/customers/register`,
          values
        );
        // localStorage.setItem("myreact", response.data.token)
        console.log(response);
        navigate("/signin");
      } catch (err) {
        console.log(err);
      }
    },
  });
  // console.log(values)

  return (
    <>
      <h1 id="register-tittle">Register</h1>
      <div className="register-container">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="User name"
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
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null}
          </span>
          <br />
          <br />
          <TextField
            label="Email"
            variant="outlined"
            className="signin-input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="email"
          />
          <br />
          <span className="error">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null}
          </span>
          <br />
          <br />

          <TextField
            label="Password"
            variant="outlined"
            className="signin-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="password"
          />
          <br />
          <span className="error">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
          </span>
          <br />
          <span>if you are admin enter 0</span>
          <TextField
            label="Role"
            variant="outlined"
            className="signin-input"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="number"
            name="role"
          />
          <br />
          <br />
          <Button
            variant="contained"
            type="sunmit"
            color="success"
            className="signin-button"
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
}
