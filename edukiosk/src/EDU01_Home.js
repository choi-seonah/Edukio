import { useDispatch } from "react-redux";
import { clearInfo } from "./EDU02_Cart_Slice";

export default function Home() {
    const dispatch = useDispatch();
    return (
        <header>
            <h1 className='logo'>EDUKIO</h1>
            <button onClick={() =>{
                dispatch(clearInfo())
                window.location.href = "/";
            
            }}
                >홈으로</button>
        </header >
    );
}