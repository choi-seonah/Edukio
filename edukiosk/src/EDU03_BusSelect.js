import { useNavigate, Link } from "react-router-dom";
import "./css/EDU03_BusSelect.css";


export default function BusSelect(){
    const navigate = useNavigate();
    return(
        <div id='bus-select' className='inner'>
            <h1 className='page-title'>예매 방식을 선택해주세요</h1>
            <div className='noti-box'>
                - 현장에서 예매를 원하시면 왼쪽을 클릭해주세요.<br/>
                - 온라인(핸드폰,인터넷)으로 예약하신분은 오른쪽을 클릭해주세요.
            </div>

            <ul className='select-list'>
                <li>
                    <Link to='/busselect/busdes'>
                        <img className='ico' src="./media/ico_kiosk.png"></img>
                        <p className='title'>현장 예매</p>
                    </Link>
                </li>
                <li>
                    <Link to='/busselect/businput'>
                        <img className='ico' src="./media/ico_ticket.png"></img>
                        <p className='title'>예매 티켓 출력</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}