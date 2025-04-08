import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import busList from "./EDU03_List";
import "./css/EDU03_Input.css";

export default function BookingInput() {
  const [bookingNumber, setBookingNumber] = useState("");
  const navigate = useNavigate();
  


  return (
    <div className="businput">
      <form onSubmit={(e) => {
        e.preventDefault();
        const bookingTicket = e.target.text.value;
        const searchId = busList.find((bus)=> bus.id === bookingTicket)
        if(searchId){
          navigate("/busselect/businput/busprint",{state:searchId});
        }else{
          alert("없는 예약번호 입니다."); 
        }
      }}>
        <h2 className='page-title'>예매티켓찾기</h2><hr/>
        <input className="inputnum" type='text' name='text' placeholder='예매번호를 입력하세요.' value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)} />
        <button className="submit-btn" type='submit'>조회하기</button>
      </form><hr/>

      <p class="inputhelpclass">도움말</p>
      <div class="inputhelp">
      <p>예매번호를 입력하면 버스표를 출력할 수 있습니다.</p>
        <p>사전예매를 하지 않으셨다면 우측 상단 홈 버튼을 눌러 초기 화면으로 돌아가세요.</p>
        <p>예매번호를 잘못 입력하셨다면 새 창에서 확인을 누르고 다시 입력해주세요.</p>
      </div>

    </div>
  );
}
