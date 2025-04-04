import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findTicket } from './EDU03_BUS_SLICE';

export default function BookingInput() {
    const [ bookingNumber, setBookingNumber ] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectedTicket = useSelector((state) => state.useBus.selectedTicket);
    const message = useSelector((state) => state.useBus.message);

    let ticketInfo = null;
    if (selectedTicket) {
        ticketInfo = (
            <div>
                <p>예매번호: {selectedTicket.id}</p>
                <p>출발: {selectedTicket.start}</p>
                <p>도착: {selectedTicket.des}</p>
                <p>날짜: {selectedTicket.date}</p>
                <p>시간: {selectedTicket.time}</p>

                <button onClick={(e) => navigate("/print", { state: { ticket: selectedTicket } })}>출력하기</button>
            </div>
        );
    }

    return (
      <>
        <form>
            <h2>예매티켓찾기</h2>
            <input type='text' placeholder='예매번호를 입력하세요.' value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)} />
            <button type='button' onClick={(e) => dispatch(findTicket(bookingNumber))}>조회하기</button>       
        </form>

        {message && <p>{message}</p>}
        {ticketInfo}
      </>
    );
  }