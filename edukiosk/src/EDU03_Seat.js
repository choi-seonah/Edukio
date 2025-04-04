import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Seat() {
    const navigate = useNavigate();
    // 좌석 선택창
    const [count, setCount] = useState(0);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const blankSeat = [];
    for (let k = 0; k < 10; k++) {
        const blank = [];
        for (let i = 0; i < 4; i++) {
            const seatId = `${k + 1}-${i + 1} `;
            const isSeletedId = selectedSeat.includes(seatId)
            blank.push(<span
                key={seatId}
                onClick={(e) => {
                    if (isSeletedId) {
                        setSelectedSeat(selectedSeat.filter((id) => id !== seatId));
                        setCount(count - 1);
                    } else {
                        setSelectedSeat([...selectedSeat, seatId]); //이거 안해주면 값 무한 증가함
                        setCount(count + 1);
                    }

                }}>{seatId}</span>);
        }
        blankSeat.push(
            <div>
                {blank}
            </div>
        )

    }
    return (
        <>
            <h2>좌석 현황</h2>
            {blankSeat}
            <div>
                <h4>{count} 좌석을 선택하셨습니다.</h4>
                <button onClick={(e) => {
                    navigate("/busselect/busdes/buscheck/busseat/buspay"
                        , { state: { payCount: count } })
                }}>최종 결제 창으로 이동</button>

            </div>
        </>
    );


}