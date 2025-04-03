import { useNavigate } from "react-router-dom";

export default function BusSelect(){
    const navigate = useNavigate();
    return(
        <>    
        <div onClick={(e)=>{
            navigate("/busselect/busdes");  // 경로명만 설정해주기
        }}>현장 예매</div>


        <div onClick={(e)=>{
            navigate("/busselect/businput"); // 경로명 바꿀생각
        }}>온라인예약</div>

        </>
    );
}