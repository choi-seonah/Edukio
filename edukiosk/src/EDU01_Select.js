import { Link } from "react-router-dom";
import "./css/EDU01_Select.css";

export default function Select() {
    return (
    <>
    <div id='select'>
        <div className='title-wrap'>
            <h1 className='logo'>EDUKIO</h1>
            <h1 className='title'>키오스크 연습하기</h1>
        </div>

        <ul className='list'>
            <li>
                <Link to="/way">
                    <img className='ico' src="./media/ico_pizza.png"></img>
                    <p className='title'>피자 주문 연습하기</p>
                </Link>
            </li>
            <li>
                <Link to='/busselect'>
                    <img className='ico' src="./media/ico_bus.png"></img>
                    <p className='title'>버스 예매 연습하기</p>
                </Link>
            </li>
        </ul>
    </div>
    </>
    );
}