import { useLocation } from "react-router-dom";
import payImage from "./media/payment.jpg";

export default function BusPay() {
    // 결제창 좌석은 가격과는 무관하게 짜고
    // 거리에 따른 값만 입력
    const location = useLocation();

    const count = location.state?.payCount || [];
    return (
        <>
            <div>
                <h1>최종 결제 창</h1>
                <p>버스표 가격: 20000원</p>
                <p>선택하신 좌석의 갯수: {count}</p>
                <p>최종금액 : {count * 20000}원</p>
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


            </div>

        </>
    );
}