import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import ButtonGroup from "@mui/material/ButtonGroup";
import Admin from "./Admin";

// import { useNavigate } from 'react-router-dom';

export default function AdminPizza({ pizzaData, setPizzaData }) {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/pizza/getallpizzas`
      );
      setPizzaData(res.data);
    };
    getData();
  });
  return (
    <>
      <Admin />
      <div className="pizza-list-container">
        {pizzaData.map((pz, i) => (
          <PizzaList pizza={pz} key={i} id={pz.id} />
        ))}
      </div>
    </>
  );
}

function PizzaList({ pizza }) {
  // const totalPrice = cart.price * num;

  return (
    <>
      <div className="pizz-container">
        <Card sx={{ maxWidth: 345 }} className="card-container">
          <CardMedia
            component="img"
            height="194"
            image={pizza.img}
            alt="pizza dish"
          />
          <CardContent className="card-body">
            <h3>{pizza.name} &nbsp;</h3>

            <div variant="body2" color="text.secondary">
              {pizza.summary}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
