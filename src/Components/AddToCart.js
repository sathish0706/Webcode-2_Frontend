import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import AddressDetails from "./AddressDetails";
// import axios from 'axios';

function AddToCart({ cart, setCart, setCount, count }) {
  // const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState([0, 0]);
  const [order, setOrder] = useState(false);

  console.log(totalPrice);
  let arr = [...new Set(totalPrice)];
  let totalAmount = arr.reduce((a, c) => a + c, 0);
  console.log(totalAmount);
  // const makePayment = () => {
  //   console.log("payment");
  // };

  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>pizza image</TableCell>
            <TableCell align="left">pizza name</TableCell>
            <TableCell align="left">Remove</TableCell>
            <TableCell align="right">price</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      {cart.map((cr, i) => (
        <Cart
          key={i}
          cart={cr}
          id={cr.id}
          setCart={setCart}
          crt={cart}
          setCount={setCount}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          count={count}
        />
      ))}

      {order ? (
        <AddressDetails totalAmount={totalAmount} />
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => setOrder(!order)}
        >
          Place Order &nbsp;&nbsp; ₹{totalAmount}
        </Button>
      )}
    </>
  );
}

function Cart({
  cart,
  setCart,
  id,
  crt,
  setCount,
  count,
  setTotalPrice,
  totalPrice,
}) {
  if (cart.price > 1) {
    totalPrice.push(cart.price);
  }

  const handleDelete = async (prce) => {
    // setTotalPrice(prce);
    let delt = crt.filter((deltData) => deltData.id !== id);
    setCart(delt);
    setCount(count - 1);
    totalPrice.push(-prce);
  };
  // const totalPrice = Price.reduce((x, i) => x + i, 0);
  //
  // console.log(totalPrice);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <img className="cart-img" src={cart.img} alt={cart.name} />
              </TableCell>
              <TableCell align="left">
                <b>{cart.name}</b>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="error"
                  id="cart"
                  onClick={() => handleDelete(cart.price)}
                >
                  Remove from cart
                </Button>
              </TableCell>
              <TableCell align="right">{cart.price}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default AddToCart;
