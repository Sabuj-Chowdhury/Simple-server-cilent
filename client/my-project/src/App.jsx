import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const addUser = { name, email };
    console.log(addUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
        const newUser = [...user, data];
        setUser(newUser);
        form.reset();
      });
  };
  return (
    <>
      <h1>Client side</h1>
      <h2>Total user: {user.length}</h2>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="add user" />
      </form>
      <div>
        {user.map((user) => (
          <p key={user.id}>
            ID:{user.id}, Name:{user.name}, email:{user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
