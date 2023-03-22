import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import "../App.css";

const formValidationSchema = yup.object({
  name: yup.string().min(4, "User name must be 8 characters").required(),
  email: yup.string().min(5, "User name must be 15 characters").required(),
  address: yup.string().required("Why not fill this Address "),
});

const AddressDetails = ({ totalAmount }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post(
          "https://webcode-2-dsjx.onrender.com/api/order",
          values
        );
        // localStorage.setItem("myreact", response.data.token)
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const makePayment = async (token) => {
    const body = {
      token,
      totalAmount,
    };

    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/payment`,
      body
    );
  };

  return (
    <div className="address-container">
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

        <textarea
          placeholder="Address"
          className="signin-input"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxRows={4}
          id="outlined-multiline-flexible"
          type="address"
          name="address"
        />
        <br />
        <span className="error">
          {formik.touched.address && formik.errors.address
            ? formik.errors.address
            : null}
        </span>
        <br />
        <br />
        <div id="order">
          <StripeCheckout
            name="Buy Pizza's "
            amount={totalAmount * 100}
            currency="INR"
            token={makePayment}
            stripeKey="pk_test_51MjhaUSCeCoPctHLyxh9WxLOhSPl8LCy5Sgft3oNVO2sqiOKQ82BX1k9RbUp90LRSDuNIR0ch4Q5Cp7xaLOkr23x00cak51nLa"
          >
            <Button variant="contained" color="success">
              Place Order &nbsp;&nbsp; ₹{totalAmount}
            </Button>
          </StripeCheckout>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
