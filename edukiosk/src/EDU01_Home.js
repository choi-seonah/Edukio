import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={(e)=>{
                navigate('/');
            }}>홈으로</button>
        </div>
    );
}