import { useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/adminDashboard";
import EmployeeDashboard from "./components/Dashboard/employeeDashboard";
const App = () => {
  const [user, setUser] = useState("");

  const handleSubmit = (email: string, password: string) => {
    if (email === "admin@me.com" && password === "admin123") {
      setUser("admin");
    } else if (email === "employee@me.com" && password === "employee123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <main>
      {!user ? <Login handleSubmit={handleSubmit} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard /> : ""}
    </main>
  );
};
export default App;
