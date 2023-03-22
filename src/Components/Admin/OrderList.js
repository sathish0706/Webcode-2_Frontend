import axios from "axios";
import React from "react";
import { useState } from "react";
import Admin from "./Admin";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const OrderList = () => {
  const [orderList, setOrderList] = useState("");
  const getData = async () => {
    let res = await axios.get(`${process.env.REACT_APP_URL}/api/getOrders`);
    setOrderList(res.data);
  };
  getData();

  return (
    <>
      <Admin />
      <div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Order Time</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        {orderList
          ? orderList.map((order, i) => (
              <>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">
                          <b>{order.name}</b>
                        </TableCell>
                        <TableCell align="center">
                          <b>{order.email}</b>
                        </TableCell>
                       <TableCell align="center">
                          <b>{order.createdAt}</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>{order.address}</b>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ))
          : ""}
      </div>
    </>
  );
};

export default OrderList;
