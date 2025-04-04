import { useLocation } from "react-router-dom";

export default function Buscheck(){
    const location = useLocation();
    const buses=location.state?.buses || [];
    console.log("받은 버스 데이터:", buses);
    
    return(
        <div>
            <h1>Bus list</h1>
            {buses.length > 0 ? (
                <p>
                    {buses.map((bus, index) => (
                        <p key={index}>
                            {bus.id} : {bus.start} → {bus.des} | {bus.date} | {bus.time}
                        </p>
                    ))}
                </p>
            ) : (
                <p>검색된 버스가 없습니다.</p>
            )}
        </div>
    );
}