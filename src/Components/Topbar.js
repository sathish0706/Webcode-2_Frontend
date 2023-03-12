import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";

export default function Topbar({ count }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Button color="inherit" onClick={() => navigate("/")}>
            <i className="fa-sharp fa-solid fa-house-user"></i>&nbsp; Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/pizza")}>
            <i class="fa-thin fa-pizza-slice"></i>
            &nbsp; Pizza List
          </Button>

          <div className="fa-solid" onClick={() => navigate("/pizza/cart")}>
            <Badge badgeContent={count} color="secondary" className="fa-solid">
              <i className="fa-solid fa-cart-plus"></i>
            </Badge>
            &nbsp;
          </div>
          <Button color="inherit" onClick={() => navigate("/signin")}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
