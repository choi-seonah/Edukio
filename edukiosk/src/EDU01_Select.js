import { Link } from "react-router-dom";

export default function Select() {
    return (
    <>
    <div>
        <h1>EDUKIO</h1>
        <h1>키오스크 연습</h1>
        <ul>
            <li><Link to='/menu'>피자 주문 연습하기</Link></li>
            <li><Link to='/busselect'>버스 티켓 예매 연습하기</Link></li>
        </ul>
    </div>
    </>
    );
}