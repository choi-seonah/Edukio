import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function BookingPrint() {
    const navigate = useNavigate();

    const selectedTicket = useSelector((state) => state.useBus.selectedTicket);

    if (!selectedTicket) {
        return (
            <>
            <p>예매 정보가 없습니다.</p>
            <button onClick={() => navigate("/bookinginput")}>이전으로</button>
            </>
        )
    }

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