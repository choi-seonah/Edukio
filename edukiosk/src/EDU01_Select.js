import { Link } from "react-router-dom";
import "./css/EDU01_Select.css";

export default function Select() {
    return (
    <>
    <div>
        <h1>EDUKIO</h1>
        <h1>키오스크 연습하기</h1>
        <Link to="/menu"><img src="./media/pizzaicon.png" id="pizzaicon"></img></Link>
        <Link to='/busselect'><img src="./media/busicon.png" id="busicon"></img></Link>
        
        <p>
            <span id="pizzaorder">피자 주문 연습하기</span>
            <span id="busticket">버스 예매 연습하기</span>
        </p>
    </div>
    </>
    );
}