import { useNavigate } from "react-router-dom";

function Pizzapayment() {
    const pizzapaynavigate = useNavigate();

    return (
        <>
        <div id='pizza-pay' className='inner'>
            <h1 className='page-title'>신용카드 결제</h1>
            <img className='pay-img' src="../media/pay.png"/>
            <p className='noti-title'>카드를 삽입해주세요</p>
            <p className='noti-txt'>결제가 끝날때까지 카드를 뽑지 마세요.</p>
            {/* <button onClick={(e) => { pizzapaynavigate("/pizzapaycomplete") }}>삽입완료</button> */}
        </div>
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