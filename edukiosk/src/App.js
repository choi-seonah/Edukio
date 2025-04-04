import { Route, Routes } from "react-router-dom";
import Seat from "./EDU03_Seat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Seat />}></Route>
    </Routes>
  );
}

export default App;
