import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { logout, login } from "./redux/slices/user.slice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function handleLogin() {
    dispatch(login({ email: "john@doe.com", password: "password" }));
  }

  return (
    <div className="App">
      {user.loading && <img src={logo} className="App-logo" alt="logo" />}
      {user.error && <p>{user.error}</p>}
      <p>
        {user.token ? "Logged in" : "Logged out"}
      </p>
      <p>{user.email}</p>
      <button onClick={handleLogin}>Login</button>
      <br/>
      <button onClick={() => { dispatch(logout()); }}>Logout</button>
    </div>
  );
}

export default App;
