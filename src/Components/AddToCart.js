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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>pizza image</h2>
            </TableCell>
            <TableCell>
              <h2>pizza name</h2>
            </TableCell>
            <TableCell align="center">
              <h2>Remove</h2>
            </TableCell>
            <TableCell>
              <h2>price</h2>
            </TableCell>
          </TableRow>
        </TableHead>

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
      </Table>
    </TableContainer>
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
  const handleDelete = async (prce) => {
    // setTotalPrice(prce);
    let delt = crt.filter((deltData) => deltData.id !== id);
    setCart(delt);
    setCount(count - 1);
    totalPrice.push(-prce);
  };

  if (cart.price > 1) {
    console.log(cart.price);
    totalPrice.push(cart.price);
  }

  // const totalPrice = Price.reduce((x, i) => x + i, 0);
  //
  // console.log(totalPrice);

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell align="left">
            <img className="cart-img" src={cart.img} alt={cart.name} />
          </TableCell>
          <TableCell align="left">
            <b>{cart.name}</b>
          </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              color="error"
              id="cart"
              onClick={() => handleDelete(cart.price)}
            >
              Remove from cart
            </Button>
          </TableCell>
          <TableCell align="left">{cart.price}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
export default AddToCart;

