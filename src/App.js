import "./App.css";
import PizzaApp from "./Components/PizzaApp";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import Topbar from "./Components/Topbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { useState } from "react";
import AddToCart from "./Components/AddToCart";
import AddPizza from "./Components/Admin/AddPizza";
import Admin from "./Components/Admin/Admin";
import OrderList from "./Components/Admin/OrderList";
import useUsers from "./Hook/useUsers";
import AdminPizza from "./Components/Admin/AdminPizza";

function App() {
  const [cart, setCart] = useState([]);
  const [loginUser, setLoginUser] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [pizzaData, setPizzaData] = useState([]);
  const [user, setUser] = useUsers("");

  return (
    <div className="App">
      {loginUser.msg === "Succesful login..." &&
      loginUser.currentUser.role === 1 ? (
        <Topbar count={cartCount} />
      ) : null}

      <Routes>
        <Route
          path="/"
          element={
            loginUser.msg === "Succesful login..." ? (
              <Home />
            ) : (
              <Signin setLoginUser={setLoginUser} />
            )
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order/list" element={<OrderList />} />

        <Route
          path="/pizza"
          element={
            loginUser.msg === "Succesful login..." ? (
              <PizzaApp
                cart={cart}
                setCart={setCart}
                setCount={setCartCount}
                count={cartCount}
                pizzaData={pizzaData}
                setPizzaData={setPizzaData}
              />
            ) : (
              <Signin setLoginUser={setLoginUser} />
            )
          }
        />

        <Route
          path="/add-pizza"
          element={<AddPizza setPizzaData={setPizzaData} />}
        />
       <Route
          path="/admin/pizzaPage"
          element={
            <AdminPizza pizzaData={pizzaData} setPizzaData={setPizzaData} />
          }
        />

        <Route
          path="/pizza/cart"
          element={
            <AddToCart
              cart={cart}
              setCart={setCart}
              setCount={setCartCount}
              count={cartCount}
            />
          }
        />

        <Route
          path="/signin"
          element={<Signin setLoginUser={setLoginUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
