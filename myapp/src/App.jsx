
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  function register(e) {
    e.preventDefault();
    setUser({ name, email, password });
    setMsg("Registration Successful!");
  }

  function login(e) {
    e.preventDefault();
    if (user && email === user.email &&
        password === user.password) {
      setMsg("Login Successful!");
    } else {
      setMsg("Invalid Email or Password!");
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={register}>
        <input placeholder="Name" required
          onChange={e => setName(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Email" required
          onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" required
          onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <button>Register</button>
      </form>

      <hr />

      <h2>Login Form</h2>
      <form onSubmit={login}>
        <input type="email" placeholder="Email" required
          onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" required
          onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <button>Login</button>
      </form>

      <h3>{msg}</h3>

      {user && (
        <div>
          <h3>Registered Details</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
