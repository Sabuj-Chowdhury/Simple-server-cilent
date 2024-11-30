import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <>
      <h1>Client side</h1>
      <h2>Total user: {user.length}</h2>
    </>
  );
}

export default App;
