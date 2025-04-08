import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

function Pizzapayment() {
    const navigate = useNavigate();
    const [countsecond, setcountsecond]=useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setcountsecond((prev) => prev - 1);
          }, 1000);

        const timeout = setTimeout(() => {
            window.location.href = "/";
        }, 10000); // 10초 뒤 메인화면으로 이동
    
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);} // 타이머 정리
      }, [navigate]);
      

    return (
        <>
        <div id='pizza-pay' className='inner'>
            <h1 className='page-title'>신용카드 결제</h1>
            <img className='pay-img' src="../media/pay.png"/>
            <p className='noti-title'>카드를 삽입해주세요</p>
            <p className='noti-txt'>결제가 끝날때까지 카드를 뽑지 마세요.</p>
            <p className="noti-txt">결제가 끝나면 홈 화면으로 돌아갑니다.</p>
            <p>{countsecond}초 후 메인화면으로 이동합니다.</p>
            
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