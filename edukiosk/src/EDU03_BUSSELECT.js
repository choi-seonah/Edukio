import { useNavigate } from "react-router-dom";
import "./css/EDU03_BUSSELECT.css";

export default function BusSelect(){
    const navigate = useNavigate();
    return(
        <>
        <h1>예매 방식을 선택해주세요</h1><br />
        <h2>현장에서 예매를 원하시면 왼쪽을 클릭해주세요.</h2>
        <h2>온라인(핸드폰,인터넷)으로 예약하신분은 오른쪽을 클릭해주세요.</h2>
        <img src="./media/kioskicon.png" onClick={(e)=>{
            navigate("/busselect/busdes");
        }}></img>   <span>현장 예매방식</span>

        <img src="./media/ticketicon.png" onClick={(e)=>{
            navigate("/busselect/businput");
        }}></img>   <span>온라인 예약방식</span>

        </>
    );
}