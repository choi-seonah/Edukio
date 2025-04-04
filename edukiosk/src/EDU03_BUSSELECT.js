import { useNavigate } from "react-router-dom";
import "./css/EDU03_BUSSELECT.css";

export default function BusSelect(){
    const navigate = useNavigate();
    return(
        <>
        <h1>예매 방식을 선택해주세요</h1>
        <img src="./media/kioskicon.png" onClick={(e)=>{
            navigate("/busselect/busdes");
        }}></img>   

        <img src="./media/ticketicon.png" onClick={(e)=>{
            navigate("/busselect/businput");
        }}></img>

        </>
    );
}