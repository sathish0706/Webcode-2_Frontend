import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/add-pizza")}>
            &nbsp; Add Pizza
          </Button>
          <Button color="inherit" onClick={() => navigate("/order/list")}>
            &nbsp; Orders List
          </Button>
         <Button color="inherit" onClick={() => navigate("/admin")}>
            &nbsp; Pizza's
          </Button>
          <div className="fa-solid">
            <Button color="inherit" onClick={() => navigate("/signin")}>
              Log out
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Admin;
