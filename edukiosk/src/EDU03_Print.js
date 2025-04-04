import { useLocation } from 'react-router-dom';
export default function BookingPrint() {

      const location = useLocation()
      const selectedTicket = location.state;


    return (
      <>
        <div>
            <h2>예매티켓찾기</h2>
            <p>예매번호: {selectedTicket.id}</p>
            <p>출발: {selectedTicket.start}</p>
            <p>도착: {selectedTicket.des}</p>
            <p>날짜: {selectedTicket.date} </p>
            <p>출발 시간: {selectedTicket.time}</p>
            <button>출력하기</button>
        </div>
      </>
    );
  }