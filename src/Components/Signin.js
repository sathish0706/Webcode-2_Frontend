import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const formValidationSchema = yup.object({
  email: yup.string().min(3, "User name must be 8 characters").required(),
  password: yup.string().min(8).max(12).required("Why not fill this Password "),
});

function Signin({ setLoginUser }) {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/customers/login`,
          values
        );
        setLoginUser(response.data);
        console.log(response.data);
        localStorage.setItem("myreact", response.data.token);
        if (response.data.msg === "Succesful login...") {
          navigate("/");
        }
        if (response.data.currentUser.role === 0) {
          navigate("/admin");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="singnin-row-container">
      <div className="singin-container">
        <h2>Sing In</h2>

        <form onSubmit={formik.handleSubmit}>
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
            <br />
          </span>
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
            <br />
          </span>

          <div id="checkbox">
            <Checkbox />
            Remember me
          </div>
          <Button variant="contained" type="sunmit" className="signin-button">
            Sign In
          </Button>
          <br />
        </form>
        <div className="signup-forget-password">
          <span onClick={() => navigate("/register")}>
            Dont have an account? Signup
          </span>
        </div>
      </div>

      <div>
        <img
          className="singnin-img"
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt="Loading..."
        />
      </div>
    </div>
  );
}
export default Signin;
