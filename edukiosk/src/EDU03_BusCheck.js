import { useLocation, useNavigate } from "react-router-dom";

export default function BusCheck() {
    const navigate = useNavigate();
    //선택된 버스가 맞는지 좌석 체크
    // 확인버튼 누르면 다음 좌석 선택창으로 넘어가기
    const location = useLocation();
    const buses = location.state?.buses || [];

    return (
        <div id='bus-check' className="inner">
            <form onSubmit={(e) => {
                e.preventDefault();
                navigate("/busselect/busdes/buscheck/busseat");
            }}>
				<h1 className='page-title'>선택하신 버스 정보</h1>
                {buses.length > 0 ? (
                    <div className="buscheck">
                        {buses.map((bus, index) => (
						<label className='ticket-info' key={index}>
							<input type="radio" name="busradio" value={bus.id} hidden />
							<div className="bus-inner">
								<dl>
									<dt>티켓번호</dt>
									<dd>{bus.id}</dd>
								</dl>
								<dl>
									<dt>출발</dt>
									<dd>{bus.start}</dd>
								</dl>
								<dl>
									<dt>도착</dt>
									<dd>{bus.des}</dd>
								</dl>
								<dl>
									<dt>출발일</dt>
									<dd>{bus.date}</dd>
								</dl>
								<dl>
									<dt>출발시간</dt>
									<dd>{bus.time}</dd>
								</dl>
							</div>
						</label>
						))}
                        <div className="btn-wrap">
                        	<button className="submit-btn" type="submit">좌석 선택창 이동</button>
						</div>

						<div className='help-wrap'>
							<p className="help-title">도움말</p>
							
							<div className="des-help">
								<p>원하시는 버스시간대를 골라주세요.</p>
								<p>버스를 고르신후 다음 진행을 원하시면 상단의 버튼을 눌러주세요.</p>
							</div>
						</div>
                    </div>
                ) : (
                    <p className='no-date'>검색된 버스가 없습니다. <br/>홈으로 버튼을 눌러주세요.</p>
                )}
            </form>
        </div>
    );
}