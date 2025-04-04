import { useNavigate } from "react-router-dom";


export default function Bus() {
    const navigate = useNavigate();
    //선택된 버스가 맞는지 좌석 체크
    // 확인버튼 누르면 다음 좌석 선택창으로 넘어가기

    // const selectBus = eee.find((e)=>{e.id === Number(id)})


    return (
        <>
            <form onSubmit={(e) => {
                

                navigate("/busselect/busdes/busseat");  //다음 좌석 선택창으로 이동 /buscheck추가
            }}>
                <p>출발지</p> {
                    // 여정선택에서 받아온 값으로 출발지와
                    //도착지 날짜 시간등을 기입
                    // 아이디 받아오면됨
                    //현재 아이디 가져오는 함수는 작성 eee만 바꿔주면됨
                    //slice 작성 후 거기서 가져오기

                }
                <p>도착지</p> 
                <p>날짜</p>
                <p>시간</p>
                <button type="submit">좌석 선택창 이동</button>
            </form>


        </>
    );
}