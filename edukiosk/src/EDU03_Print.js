import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function BookingPrint() {

      const location = useLocation()
      const selectedTicket = location.state;
      const navigate = useNavigate();


    return (
      <>
    	<div id='print' className="inner">
			<h1 className='page-title'>예매티켓찾기</h1>

			<div className="info-box">					
					<dl>
						<dt>예매번호</dt>
						<dd>{selectedTicket.id}</dd>
					</dl>
					<dl>
						<dt>출발</dt>
						<dd>{selectedTicket.start}</dd>
					</dl>
					<dl>
						<dt>도착</dt>
						<dd>{selectedTicket.des}</dd>
					</dl>
					<dl>
						<dt>출발일</dt>
						<dd>{selectedTicket.date}</dd>
					</dl>
					<dl>
						<dt>출발시간</dt>
						<dd>{selectedTicket.time}</dd>
					</dl>
				</div>
				<div className="btn-wrap">
					<button className="submit-btn" onClick={(e) => {
						if (window.confirm("티켓을 출력하시겠습니까?")) {
							navigate("/"); 
						}
					}}>출력하기</button>
				</div>

				<div className='help-wrap'>
					<p className="help-title">도움말</p>

					<div className="des-help">
						<p>본인의 표가 맞는지 대조해보시고, 맞다면 출력하기 버튼을 눌러주십시오.</p>
						<p>버튼을 누르고 새 창에서 확인을 누르면, 버스 예매 연습을 마치고 홈으로 돌아갑니다.</p>
					</div>
				</div>
		</div>
      </>
    );
  }