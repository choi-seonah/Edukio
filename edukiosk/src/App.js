import { Route, Routes } from "react-router-dom";
import BusCheck from "./EDU03_BUSCHECK";
import BusSelect from "./EDU03_BUSSELECT";
import DesForm from "./EDU03_DES_FORM";
import Seat from "./EDU03_Seat";
import Select from "./EDU01_Select";
import BusPay from "./EDU03_PAY";
import Menu from "./EDU02_Menu";
import "./css/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Select />}></Route>
      <Route path="/menu" element={<Menu/>}></Route>

      <Route path="/busselect" element={<BusSelect />}></Route>
      <Route path="/busselect/busdes" element={<DesForm />}></Route>
      <Route path="/busselect/busdes/buscheck" element={<BusCheck />}></Route>
      <Route path="/busselect/busdes/buscheck/busseat" element={<Seat />}></Route>
      <Route path="/busselect/busdes/buscheck/busseat/buspay" element={<BusPay />}></Route>
    </Routes>
  );
}

export default App;
