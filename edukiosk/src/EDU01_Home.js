import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigatehome=useNavigate();
    return (
        <div>
            <button onClick={(e)=>{
                navigatehome("/")
            }}>홈으로</button>
        </div>
    );
}