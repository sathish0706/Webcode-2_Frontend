import React, { useEffect, useState } from "react";
import axios from "axios";

const useUsers = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_URL}/customers/getUserById`
    );
    setUser(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return user ? [user, setUser] : null;
};

export default useUsers;
