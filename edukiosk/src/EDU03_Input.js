import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findTicket } from './EDU03_BUS_SLICE';
import busList from "./EDU03_LIST";
export default function BookingInput() {
  const [bookingNumber, setBookingNumber] = useState("");
  // const dispatch = useDispatch(); 빈주석들 지우기
  const navigate = useNavigate();
  


  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        const bookingTicket = e.target.text.value;
        const searchId = busList.find((bus)=> bus.id === bookingTicket)
        if(searchId){
          navigate("/busselect"); //경로명 바꾸기
        }else{
          alert("없음"); //멘트 바꾸기
        }
      }}>
        <h2>예매티켓찾기</h2>
        <input type='text' name='text' placeholder='예매번호를 입력하세요.' value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)} />
        <button type='submit'>조회하기</button>
      </form>

    </>
  );
}
