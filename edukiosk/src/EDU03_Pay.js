import { useLocation, useNavigate } from "react-router-dom";
import payImage from "./media/payment.jpg";
import { useState } from "react";

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
            <div>
                <h1>최종 결제 창</h1>
                <button onClick={(e) => {
                    add("아동");
                }}>아동</button>

                <button onClick={(e) => {
                    add("청소년");
                }}>청소년</button>

                <button onClick={(e) => {
                    add("성인");

                }}>성인</button>

                <button onClick={(e) => {
                    add("노인");
                }}>노인</button>

                <p>버스표 기본 가격: 20000원</p>
                <p>아동,노인: 50% 할인/청소년: 30% 할인</p>
                <p>선택 좌석: 아동 {passengers.아동}, 청소년 {passengers.청소년}, 성인 {passengers.성인}, 노인 {passengers.노인}</p>
                <p>최종금액 : {totalPrice}원</p>
                <button onClick={() => {
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

        </>
    );
}