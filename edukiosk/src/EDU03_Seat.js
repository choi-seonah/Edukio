import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/EDU03_Seat.css"
export default function Seat() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const blankSeat = [];


    const [blockedSeats] = useState(() => {
        const all = [];
        for (let k = 0; k < 10; k++) {
            for (let i = 0; i < 4; i++) {
                all.push(`${k + 1}-${i + 1} `);
            }
        }
        return all
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.floor(Math.random() * 10) + 5);
    });

    for (let k = 0; k < 10; k++) {
        const blank = [];
        for (let i = 0; i < 4; i++) {
            const seatId = `${k + 1}-${i + 1} `;
            const isSeletedId = selectedSeat.includes(seatId);
            const isBlocked = blockedSeats.includes(seatId);
            blank.push(<span
                key={seatId}
                onClick={(e) => {
                    if (isBlocked) { return };

                    if (isSeletedId) {
                        setSelectedSeat(selectedSeat.filter((id) => id !== seatId));
                        setCount(count - 1);
                    } else {
                        setSelectedSeat([...selectedSeat, seatId]); //이거 안해주면 값 무한 증가함
                        setCount(count + 1);
                    }
                }}
                style={{
                    display: "inline-block",
                    width: "50px",
                    padding: "10px",
                    border: "1px solid #000",
                    backgroundColor: isBlocked
                        ? "#ccc"
                        : isSeletedId
                            ? "#add8e6"
                            : "#fff",
                    cursor: isBlocked ? "not-allowed" : "pointer",
                    textAlign: "center",
                    borderRadius: "4px",
                }}
            >{seatId}</span>);
        }
        blankSeat.push(
            <div className="seatnum">
                {blank}
            </div>
        )
    }
    return (
        <>
            <div className="">
                <h2 style={{
                    textAlign: "center",
                    fontSize: "35px",
                    fontWeight: "bold",
                    marginBottom: "20px"
                }}>좌석 현황</h2>

                <div className="txt-right">
                    <div>{blankSeat}</div>
                    <div className="txt-explanation">
                        <div className="help-label">도움말</div> 

                        <p>원하시는 좌석을 선택해 주세요.</p>
                        <p>이미 자리가 있는 좌석은 회색 표시됩니다.</p>
                        <p>빈자리는 흰색으로 표시됩니다.</p>
                        <p>현재 클릭 된 자리는 하늘색으로 표시됩니다.</p>
                        <p>선택이 끝나시면 최종 결제창으로 이동해주세요.</p>
                    </div>

                </div>




                <div className="result">
                    <h4>{count} 좌석을 선택하셨습니다.</h4>
                    <button id="seatbut"
                        onClick={(e) => {
                            navigate("/busselect/busdes/buscheck/busseat/buspay"
                                , { state: { payCount: count } })
                        }}>최종 결제 창으로 이동</button>
                </div>
            </div>
        </>
    );


}