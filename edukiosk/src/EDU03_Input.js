import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findTicket } from './EDU03_BUS_SLICE';

export default function BookingInput() {
    const [ bookingNumber, setBookingNumber ] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
      <>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(findTicket(bookingNumber));
            navigate("/print");
        }}>
            <h2>예매티켓찾기</h2>
            <input type='text' placeholder='예매번호를 입력하세요.' value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)} />
            <button type='submit'>조회하기</button>
        </form>
      </>
    );
  }