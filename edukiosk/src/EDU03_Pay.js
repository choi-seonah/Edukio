import { useLocation, useNavigate } from "react-router-dom";
import payImage from "./media/payment.jpg";
import { useState } from "react";
import "./css/EDU03_Pay.css";

export default function BusPay() {
    const location = useLocation();
    const navigate = useNavigate();
    const count = location.state?.payCount || [];
    const ticketPrice = 20000;
    const [passengers, setPassengers] = useState({ 아동: 0, 청소년: 0, 성인: 0, 노인: 0 });
    const add = (type) => {
        const total = Object.values(passengers).reduce((a, b) => a + b, 0);
        if (total >= count) return;

        setPassengers((p) => ({ ...p, [type]: p[type] + 1 }));
    };

    const totalPrice =
        passengers.아동 * ticketPrice * 0.5 +
        passengers.청소년 * ticketPrice * 0.7 +
        passengers.성인 * ticketPrice +
        passengers.노인 * ticketPrice * 0.5;


    return (
        <>
            <div className="paybody">
                <h1 className="paytitle">최종 결제 창</h1><hr/>
                <div className="payage">
                <button className="agebtn" onClick={(e) => {
                    add("아동");
                }}>아동</button>

                <button className="agebtn" onClick={(e) => {
                    add("청소년");
                }}>청소년</button>

                <button className="agebtn" onClick={(e) => {
                    add("성인");

                }}>성인</button>

                <button className="agebtn" onClick={(e) => {
                    add("노인");
                }}>노인</button>

                
                <p>버스표 기본 가격: 20000원</p>
                <p>아동,노인: 50% 할인/청소년: 30% 할인</p></div><br/>
                <p>선택 좌석: 아동 {passengers.아동}, 청소년 {passengers.청소년}, 성인 {passengers.성인}, 노인 {passengers.노인}</p><br/>
                <p>최종금액 : {totalPrice}원</p>
                <div className="paybtnclass">
                <button className="paybtn" onClick={() => {
                    const width = 400;
                    const height = 600;
                    const left = (window.screen.width - width) / 2;
                    const top = (window.screen.height - height) / 2;

                    window.open(
                        payImage,
                        '_blank',
                        `width=${width},height=${height},left=${left},top=${top}`
                    );
                }}>결제하기</button>
                <button className="paybtn" onClick={(e) => {
                     if (window.confirm("정말 초기화 하시겠습니까?")) {
                        navigate(0); 
                      }
                }}>초기화</button></div><hr/>

            <p className="payhelptitle">도움말</p>
        
             <div className="payhelp">
                <p>연령대에 따른 추가적인 할인이 적용되기 때문에 입력하신 좌석과 일치하게 눌러주시면 됩니다.</p>
                <p>아동 2명에 성인 1명인 경우, 아동 버튼을 2번 누르고 성인 버튼을 1번 눌러주세요.</p>
                <p>잘못 누르셨다면, 결제하기 옆의 초기화 버튼을 누르고 다시 눌러주세요.</p>
                <p>입력이 완료되면 결제하기 버튼을 눌러서 사진과 같이 카드를 넣어주시면 됩니다.</p>
            </div>

            </div>
            <div>
                <div className="info">
                    <p>버스표 기본 가격: 20000원</p>
                    <p>아동,노인: 50% 할인/청소년: 30% 할인</p>
                    <p>선택 좌석: 아동 {passengers.아동}, 청소년 {passengers.청소년}, 성인 {passengers.성인}, 노인 {passengers.노인}</p>
                    <p>최종금액 : {totalPrice}원</p>
                </div>
                <div className="result-but">
                    <button onClick={() => {
                        const totalPeople = Object.values(passengers).reduce((a, b) => a + b, 0); //인원 총합

                        if (totalPeople !== count) {
                            alert("선택한 좌석 수와 총인원 수가 일치하지 않습니다.");
                            return;
                        }
                        const width = 400;
                        const height = 600;
                        const left = (window.screen.width - width) / 2;
                        const top = (window.screen.height - height) / 2;
                        window.open(
                            payImage,
                            '_blank',
                            `width=${width},height=${height},left=${left},top=${top}`
                        );
                    }}>결제하기</button>

                    <button onClick={(e) => {
                        if (window.confirm("정말 초기화 하시겠습니까?")) {
                            navigate(0);
                        }
                    }}>초기화</button>
                    </div>
                    <div className="txt-cen">
                    <span className="help">도움말</span>
                    
                    <div className="txt-help">
                    <p>연령대에 따른 추가적인 할인이 적용되기 때문에 <br />
                        입력하신 좌석과 일치하게 눌러주시면 됩니다.</p>
                    <p>입력이 완료되면 결제하기 버튼을 눌러서 사진과 같이 카드를 넣어주시면 됩니다.</p>
                </div>
                </div>
            </div >
        </>
    );
}