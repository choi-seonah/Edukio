import { useLocation, useNavigate } from "react-router-dom";


export default function BusCheck() {
    const navigate = useNavigate();
    //선택된 버스가 맞는지 좌석 체크
    // 확인버튼 누르면 다음 좌석 선택창으로 넘어가기
    const location = useLocation();
    const buses = location.state?.buses || [];

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                navigate("/busselect/busdes/buscheck/busseat");
            }}>
                <h2>선택하신 버스 정보</h2>
                {buses.length > 0 ? (
                    <div>
                        {buses.map((bus, index) => (
                            <p key={index} >
                                <input type="radio" name="busradio" value={bus.id} />
                                {<span>티켓Id:{bus.id}</span>} :
                                {<span>출발지:{bus.start}</span>} → {<span>도착지:{bus.des}</span>} |
                                {<span>출발 날짜:{bus.date}</span>} | {<span>출발시간:{bus.time}</span>}
                            </p>
                        ))}
                        <button type="submit">좌석 선택창 이동</button>
                        <p>원하시는 버스 시간대를 골라주세요</p>
                        <p>버스를 고르신 후 다음 진행을 원하시면 하단 버튼을 눌러주세요.</p>
                    </div>
                ) : (
                    <p>검색된 버스가 없습니다. <br/>(홈으로 버튼을 눌러주세요.)</p>

                )}
            </form>



        </>
    );
}


