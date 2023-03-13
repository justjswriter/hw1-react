import UserBlock from "./components/UserBlock";

const Users = [
  {
    name: "Saniya",
    statusText: "Первый пользователь",
    avatar: "https://picsum.photos/570",
    onlineStatus: true,
  },
  {
    name: "Tamer",
    statusText: "Второй пользователь",
    avatar: "https://picsum.photos/577",
    onlineStatus: true,
  },
  {
    name: "Zhanerke",
    statusText: "Третий пользователь",
    avatar: "https://picsum.photos/555",
    onlineStatus: false,
  },
];

function App() {
  return (
    <div>
      {Users.map( user => <UserBlock {...user}/>)}
    </div>
  );
}

export default App;
