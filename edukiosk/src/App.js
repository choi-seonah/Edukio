import { Route, Routes } from "react-router-dom";
import BusCheck from "./EDU03_BusCheck";
import BusSelect from "./EDU03_BusSelect";
import DesForm from "./EDU03_Des_Form";
import Seat from "./EDU03_Seat";
import Select from "./EDU01_Select";
import BusPay from "./EDU03_Pay";
import MainLayout from "./MainLayout";
import Menu from "./EDU02_Menu";
import BookingInput from "./EDU03_Input";
import BookingPrint from "./EDU03_Print"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Select />}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/busselect" element={<BusSelect />}></Route>
        <Route path="/busselect/businput" element={<BookingInput />}></Route>
        <Route path="/busselect/businput/busprint" element={<BookingPrint />}></Route>
        <Route path="/busselect/busdes" element={<DesForm />}></Route>
        <Route path="/busselect/busdes/buscheck" element={<BusCheck />}></Route>
        <Route path="/busselect/busdes/buscheck/busseat" element={<Seat />}></Route>
        <Route path="/busselect/busdes/buscheck/busseat/buspay" element={<BusPay />}></Route>
        
        
      </Route>
    </Routes>
  );
}

export default App;
