// import Profile from "./components/Profile";
import UseStateExa from "./components/UseStateExa";
import { UserContextProvider } from "./context/UserContext";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

function App() {
  return (
    <>

      {/* <Profile age={22} status="single" />
      <Profile name="mukesh" age={23} status="couple" />
      <Profile name="ramesh" age={23} status="single" >Salary: 5ctc</Profile> */}

      <UserContextProvider>
        <UseStateExa />
      </UserContextProvider>
    </>
  );
}

export default App;
