import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearInfo } from "./EDU02_Cart_Slice";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <header>
            <h1 className='logo'>EDUKIO</h1>
            <button onClick={() =>{
                navigate("/");
                dispatch(clearInfo())}}>홈으로</button>
        </header >
    );
}