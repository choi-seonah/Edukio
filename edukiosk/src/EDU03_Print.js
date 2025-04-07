import { useLocation } from 'react-router-dom';
import "./css/EDU03_Print.css";
import { useNavigate } from 'react-router-dom';

export default function BookingPrint() {

      const location = useLocation()
      const selectedTicket = location.state;
      const navigate = useNavigate();


    return (
      <>
        <div className="printbody">
            <h2 className="printtitle">예매티켓찾기</h2><hr/>
            <p>예매번호: {selectedTicket.id}</p>
            <p>출발: {selectedTicket.start}</p>
            <p>도착: {selectedTicket.des}</p>
            <p>날짜: {selectedTicket.date} </p>
            <p>출발 시간: {selectedTicket.time}</p><br/>
            </div>
            <div className="printbtnclass">
            <button className="printbtn" onClick={(e) => {
                     if (window.confirm("티켓을 출력하시겠습니까?")) {
                        navigate("/"); 
                      }
                }}>출력하기</button></div>


        <p class="printhelpclass">도움말</p>
        <div class="printhelp">
          <p>본인의 표가 맞는지 대조해보시고, 맞다면 출력하기 버튼을 눌러주십시오.</p>
          <p>버튼을 누르고 새 창에서 확인을 누르면, 버스 예매 연습을 마치고 홈으로 돌아갑니다.</p>
        </div>
      </>
    );
  }