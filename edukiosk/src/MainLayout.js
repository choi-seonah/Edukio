import { Outlet } from "react-router-dom";
import Home from "./EDU01_Home";
export default function MainLayout(){
   
    return(
        <>
        <section id='main-wrap'>
            <Home />
            <Outlet />
        </section>
        </>
    );
}