import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Seat() {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedBus = location.state?.selectedBus;


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
            const seatId = `${k + 1}-${i + 1}`;
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
                    backgroundColor: isBlocked
                        ? "var(--gray-ddd)"
                        : isSeletedId
                            ? "#c5e1f5"
                            : "#fff",
                    cursor: isBlocked ? "not-allowed" : "pointer",
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
            <div id='seat' className="inner">
				<h1 className='page-title'>좌석을 선택해주세요</h1>
				<div className='seat-help'>
					<div className='seat-wrap'>{blankSeat}</div>
					<div className='help-wrap'>
					<p className="help-title">도움말</p>
					
					<div className="des-help">
						원하시는 좌석을 선택해 주세요.<br/><br/>
						이미 자리가 있는 좌석은 회색으로 표시됩니다.<br/>
						빈자리는 흰색으로 표시됩니다.<br/>
						현재 클릭 된 자리는 하늘색으로 표시됩니다.<br/><br/>
						선택이 끝나시면 최종 결제창으로 이동해주세요.
					</div>
				</div>
				</div>
				<h4 className='count-seat'>{count} 좌석을 선택하셨습니다.</h4>
				<div className='btn-wrap'>
					<button className='submit-btn'
					onClick={(e) => {
						navigate("/busselect/busdes/buscheck/busseat/buspay"
							, { state: { payCount: count , selectedBus: selectedBus, selectedSeat:selectedSeat} })
					}}>최종 결제 창으로 이동</button>
				</div>

            </div>
        </>
    );


}