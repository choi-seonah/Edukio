import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BusPay() {
	const location = useLocation();
	const navigate = useNavigate();
	const count = location.state?.payCount || [];
	const selectedBus = location.state?.selectedBus;
	const selectedSeat = location.state?.selectedSeat;
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
			<div id='bus-pay' className="inner">
				<h2 className="page-title">최종 결제 창</h2>

				<div className='pay-info'>
					<div className='info-box'>
						<div className='left'>
							<p className='payage-title'>연령대 할인 적용</p>
							<div className='payage'>
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
							</div>
							<dl>
								<dt>예매 정보</dt>
								<dd>
									<p>예매번호: {selectedBus?.id}</p>
									<p>출발: {selectedBus?.start}</p>
									<p>도착: {selectedBus?.des}</p>
									<p>출발일: {selectedBus?.date}</p>
									<p>출발시간: {selectedBus?.time}</p>
									<p>좌석: {selectedSeat.sort().join("/ ")}</p>
								</dd>
							</dl>
							<dl>
								<dt>선택좌석</dt>
								<dd>
									<p>아동 {passengers.아동}</p>
									<p>청소년 {passengers.청소년}</p>
									<p>성인 {passengers.성인}</p>
									<p>노인 {passengers.노인}</p>
								</dd>
							</dl>
						</div>
						<div className='help-wrap'>
							<p className="help-title">도움말</p>

							<div className="des-help">
								연령대에 따른 추가적인 할인이 적용되기 때문에 입력하신 좌석과 일치하게 눌러주시면 됩니다.<br/><br/>
								아동 2명에 성인 1명인 경우, 아동 버튼을 2번 누르고 성인 버튼을 1번 눌러주세요.<br/><br/>
								잘못 누르셨다면, 결제하기 옆의 초기화 버튼을 누르고 다시 눌러주세요.<br/><br/>
								입력이 완료되면 결제하기 버튼을 눌러서 사진과 같이 카드를 넣어주시면 됩니다.
							</div>
						</div>
					</div>
					<div className='noti'>
						- 버스 티켓의 기본 가격은 20,000원입니다.<br />
						- 아동, 노인: 50% 할인<br />
						- 청소년: 30% 할인	
					</div>
				</div>

				<div className='total-wrap'>

					<h2 className='total-price'>최종금액 <span>{totalPrice.toLocaleString()}원</span></h2>

					<div className='btn-wrap'>
						<button className="submit-btn gray" onClick={(e) => {
							if (window.confirm("정말 초기화 하시겠습니까?")) {
								navigate(0);
							}
						}}>초기화</button>
						<button className="submit-btn" onClick={() => {
							navigate("/pay");
						}}>결제하기</button>
					</div>
				</div>

	
			</div>
		</>
	);
}