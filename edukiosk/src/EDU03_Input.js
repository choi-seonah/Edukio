import { useState } from 'react';

export default function BookingInput() {
    // 1. 입력값을 상태로 관리하여 예매번호를 추적할 수 있도록 함
    // 2. 버튼 클릭 시 처리 함수 추가
    // 3. 예매번호가 올바른지 검증 (예: 빈 값 입력 방지)

    const [ bookingNumber, setBookingNumber ] = useState("");

    return (
      <>
        <form>
            <h2>예매티켓찾기</h2>
            <input type='text' placeholder='예매번호를 입력하세요.' value={bookingNumber} />
            <button>발권하기</button>
        </form>
      </>
    );
  }
  