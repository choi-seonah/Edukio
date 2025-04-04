import busList from "./EDU03_LIST";
import DesForm from "./EDU03_DES_FORM";
import arrivetime from "./EDU03_DES_FORM";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import React from 'react';
import Buscheck from "./EDU03_BUSCHECK";

function Des(){
    return(
            <Routes>
                <Route path="/busselect/busdes" element={<DesForm/>}></Route>
                <Route path="/busselect/busdes/buscheck" element={<Buscheck/>}></Route>
            </Routes>
    );
}

export default Des;