import { useNavigate } from "react-router-dom";
import payImage from "./media/payment.jpg";
import { Route, Routes } from "react-router-dom";

function Pizzapayment(){
    const pizzapaynavigate=useNavigate();

    return(
    <>
    <h1>결제</h1><br/>
    <img src={payImage} id="pizzapaypic"></img>
    <br/>
    <p>IC칩을 그림과 같이 삽입해 주세요.</p>
    <p>카드의 전면부 금색칩이 기계 안으로 삽입되면 결제가 가능해요!</p>
    <button onClick={(e)=>{pizzapaynavigate("/paycomplete")}}>삽입완료</button>

    </>);
}

export default function Pizzapay(){
    return(
        <Routes>
            <Route path="/pizzapay" element={<Pizzapayment/>}></Route>
        </Routes>
    );
}