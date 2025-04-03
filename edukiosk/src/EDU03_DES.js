import bussList from "./EDU03_LIST";
import DesForm from "./EDU03_DES_FORM";
import arrivetime from "./EDU03_DES_FORM";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import React from 'react';

function Des(){
    return(
            <Routes>
                <Route path="/busdes" element={<DesForm/>}></Route>
            </Routes>
    );
}

export default Des;