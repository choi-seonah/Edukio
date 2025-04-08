import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setTotalPrice, findCoupon, removeProduct } from "./EDU02_Cart_Slice";
import "./css/EDU02_Check_Out.css";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const totalPrice = useSelector((state) => state.cart.totalPrice); // ✅ Redux 금액
  const couponError = useSelector(state => state.cart.couponError);
  const couponMessage = useSelector(state => state.cart.couponMessage);

  const [showPopup, setShowPopup] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // ✅ 장바구니 변경될 때마다 총합 계산
  useEffect(() => {
    dispatch(setTotalPrice());
  }, [cartList]);

  // dispatch(findCoupon(""));

  const handleApplyCoupon = () => {
    dispatch(setTotalPrice());         // 최신 총합 계산
    dispatch(findCoupon(couponCode));  // 쿠폰 적용
    setShowPopup(false);               // 팝업 닫기
    setCouponCode("");                 // 입력 초기화
  };

  return (
    <div id='checkout' className='inner'>
		<h2 className="page-title">주문 내역</h2>
		<ul className='list'>
			{cartList.map((item, idx) => (
			<>
			<li key={idx}>
				<img className='product-img' src={item.src}/>
				<div className='info-box'>
					<div className='order-menu'>
						<p className='item-name'>{item.name}</p>
						<p className='item-amount'>{item.amount}</p>
						<p className='item-price'>{item.price}원</p>
					</div>
					{item.options && item.options.length > 0 && (
					<ul className='option-list'>
						{item.options.map((opt, i) => (
						<li key={i}>
							<p>- {opt.name}</p>
							<p className='option-price'>{opt.price}원</p>
						</li>
						))}
					</ul>
					)}
					<div className="item-remove">
						<button className='submit-btn' onClick={() => dispatch(removeProduct(item.name))}>삭제</button>
					</div>
				</div>
			</li>
			</>
			))}
		</ul>
		
		<div className='cp-message-wrap'>
			{/* 쿠폰 적용 시 노출 문구 */}
			{couponMessage && <p style={{ color: "green" }}>{couponMessage}</p>}
			{couponError && <p style={{ color: "red" }}>{couponError}</p>}
		</div>

		<div className='total-wrap'>
			{/* ✅ 총 결제 금액 (쿠폰 적용 시 할인됨) */}
			<h2 className='total-price'>총 결제 금액 <span>{totalPrice.toLocaleString()}원</span></h2>

			<div className='btn-wrap'>
				<button className='submit-btn red-bdr' onClick={() => setShowPopup(true)}>쿠폰 사용</button>
				<Link className='submit-btn' to="/pay">결제하기</Link>
			</div>
		</div>

		{/* ✅ 팝업 창 */}
		{showPopup && (
		<div id='popup-coupon-input' className='popup'>
	        <div className='dim'></div>
			<div className='popup-content'>
			<h3 className='title'>
				사용하실 쿠폰의 바코드를<br></br>
				바코드 리더기에 스캔해주세요.
			</h3>
			<p className='sub-title'>쿠폰의 바코드 인식이 안될 경우 쿠폰번호 입력으로 확인하세요!</p>
			<img className='barcode-img' src='./media/ico_barcode.png'/>
			<input className='coupon-input'
				type="text"
				value={couponCode}
				onChange={(e) => setCouponCode(e.target.value)}
				placeholder="쿠폰번호 입력"/>
			<div className='btn-wrap half'>
				<button className='submit-btn' onClick={handleApplyCoupon}>적용</button>
				<button className='submit-btn gray' onClick={() => setShowPopup(false)}>닫기</button>
			</div>
			</div>
		</div>
		)}

		<div className='checkhelp-wrap'>
			<p class="checkhelpclass">도움말</p>
			<p class="checkhelp">쿠폰을 보유중이시면 쿠폰 사용하기를 눌러주신 후 <br/>
				쿠폰번호를 입력해주시면 됩니다. <br />
				이 후 결제하기 버튼을 눌러주시면 결제창이 나옵니다.
			</p>
		</div>
    </div>
  );
}
