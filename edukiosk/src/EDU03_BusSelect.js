import { useNavigate } from "react-router-dom";
import "./css/EDU03_BusSelect.css";


export default function BusSelect(){
    const navigate = useNavigate();
    return(
        <div className="busselect">
        <h1 className="bustitle">예매 방식을 선택해주세요</h1>
        <h2>현장에서 예매를 원하시면 왼쪽을 클릭해주세요.</h2>
        <h2>온라인(핸드폰,인터넷)으로 예약하신분은 오른쪽을 클릭해주세요.</h2><hr/>
        <img className="busimg" src="./media/kioskicon.png" onClick={(e)=>{
            navigate("/busselect/busdes");
        }}></img>  

        <img className="busimg" src="./media/ticketicon.png" onClick={(e)=>{
            navigate("/busselect/businput");
        }}></img><hr/>
        <p>
        <span className="businfo">현장 예매방식</span>
        <span className="businfo">온라인 예약방식</span>
        </p><hr/>

        </div>
    );
}