import { useLocation, useNavigate } from "react-router-dom";


export default function BusCheck() {
    const navigate = useNavigate();
    //선택된 버스가 맞는지 좌석 체크
    // 확인버튼 누르면 다음 좌석 선택창으로 넘어가기
    const location = useLocation();
    const buses= location.state?.buses || [];


    return (
        <>
            <form onSubmit={(e) => {
                navigate("/busselect/busdes/buscheck/busseat");  //다음 좌석 선택창으로 이동 /buscheck추가
            }}>

                <h2>선택하신 버스 정보</h2>
             {buses.length > 0 ? (
                <p>
                    {buses.map((bus, index) => (
                        <p key={index}>
                            {<span>티켓Id:{bus.id}</span>} :
                             {<span>출발지:{bus.start}</span>} → {<span>도착지:{bus.des}</span>} | 
                             {<span>출발 날짜:{bus.date}</span>} | {<span>출발시간:{bus.time}</span>}
                        </p>
                    ))}
                </p>
            ) : (
                <p>검색된 버스가 없습니다.</p>
            )}



                <button type="submit">좌석 선택창 이동</button>
            </form>


        </>
    );
}


