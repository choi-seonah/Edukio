import busList from "./EDU03_List";
import DesForm from "./EDU03_Des_Form"
import arrivetime from "./EDU03_Des_Form";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import React from 'react';
import Buscheck from "./EDU03_BusCheck";

function Des(){
    return(
            <Routes>
                <Route path="/busselect/busdes" element={<DesForm/>}></Route>
                <Route path="/busselect/busdes/buscheck" element={<Buscheck/>}></Route>
            </Routes>
    );
}

export default Des;