import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import busList from "./EDU03_List";
export default function BookingInput() {
  const [bookingNumber, setBookingNumber] = useState("");
  const navigate = useNavigate();
  


  return (
    <>
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
        <h2>예매티켓찾기</h2>
        <input type='text' name='text' placeholder='예매번호를 입력하세요.' value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)} />
        <button type='submit'>조회하기</button>
      </form>

    </>
  );
}
