import { Route, Routes } from "react-router-dom";
import BusCheck from "./EDU03_BUSCHECK";
import BusSelect from "./EDU03_BUSSELECT";
import DesForm from "./EDU03_DES_FORM";
import Seat from "./EDU03_Seat";
import Select from "./EDU01_Select";
import BusPay from "./EDU03_PAY";
import MainLayout from "./MainLayout";
import Menu from "./EDU02_Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Select />}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/busselect" element={<BusSelect />}></Route>
        <Route path="/busselect/busdes" element={<DesForm />}></Route>
        <Route path="/busselect/busdes/buscheck" element={<BusCheck />}></Route>
        <Route path="/busselect/busdes/buscheck/busseat" element={<Seat />}></Route>
        <Route path="/busselect/busdes/buscheck/busseat/buspay" element={<BusPay />}></Route>
        
        
      </Route>
    </Routes>
  );
}

export default App;
