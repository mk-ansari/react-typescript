// import Profile from "./components/Profile";
import StatesExa from "./components/states/StatesExa";
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
        <StatesExa />
      </UserContextProvider>
    </>
  );
}

export default App;
