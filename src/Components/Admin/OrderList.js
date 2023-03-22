import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState } from "react";
import Admin from "./Admin";

export default function OrderList() {
  const [orderList, setOrderList] = useState("");
  const getData = async () => {
    let res = await axios.get(`${process.env.REACT_APP_URL}/api/getOrders`);
    setOrderList(res.data);
  };

  getData();

  return (
    <>
      <Admin />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Name</h3>
              </TableCell>
              <TableCell>
                <h3>Email</h3>
              </TableCell>
              <TableCell>
                <h3>Time</h3>
              </TableCell>
              <TableCell>
                <h3>Address</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList
              ? orderList.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.createdAt}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
