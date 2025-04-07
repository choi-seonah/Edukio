import { useNavigate } from "react-router-dom";
import payImage from "./media/payment.jpg";
import { Route, Routes } from "react-router-dom";

function Pizzapayment() {
    const pizzapaynavigate = useNavigate();

    return (
        <>
            <h1>결제</h1><br />
            <img src={payImage} id="pizzapaypic"></img>
            <br />
            <p>IC칩을 그림과 같이 삽입해 주세요.</p>
            <p>카드의 전면부 금색칩이 기계 안으로 삽입되면 결제가 가능해요!</p>
            <button onClick={(e) => { pizzapaynavigate("/pizzapaycomplete") }}>삽입완료</button>

        </>
    );
}

/*
function Pizzapaycomplete(){
    return(
        <>
        <h1>패스트푸드점 키오스크 사용 교육을 이수하셨어요!</h1>
        </>
    );
}
*/

export default Pizzapayment;