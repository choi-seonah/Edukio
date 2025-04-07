import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <header>
            <h1 className='logo'>EDUKIO</h1>
            <button onClick={(e)=>{
                navigate('/');
            }}>홈으로</button>
        </header>
    );
}