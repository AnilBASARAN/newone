import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

const getUsers = () => axios.get("http://localhost:3004/users").then((res) => res.data);

function App() {
  const {data:users=[]} = useQuery({
    queryKey: ["users"], // ✅ Object-based syntax (required in v5)
    queryFn: getUsers,
  });

  console.log(users);

  return <div>
    <div>
    Total: {users.length}
    </div>
  <div>{users.map(user=>(
    <div key={user.id}>{user.name}</div>
  ))}</div>

  </div>;
}

export default App;
