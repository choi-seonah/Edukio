import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setTotalPrice, findCoupon, removeProduct } from "./EDU02_Cart_Slice";

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
    <div style={{ padding: "30px" }}>
      <h2>결제 확인</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {cartList.map((item, idx) => (
          <>
          <li
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              background: "#f9f9f9",
            }}
          >
            <h3>{item.name}</h3>
            <img src={item.src} width="120" style={{ borderRadius: "8px" }} />
            <p>피자 가격: {item.price}원 × {item.amount}개</p>
            {item.options && item.options.length > 0 && (
              <div>
                <strong>옵션:</strong>
                <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
                  {item.options.map((opt, i) => (
                    <>
                    <li key={i}>
                      {opt.name} (+{opt.price}원)
                    </li>
                    </>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <button onClick={() => dispatch(removeProduct(item.name))}>삭제</button>
          </>
        ))}
        
      </ul>

      {/* ✅ 총 결제 금액 (쿠폰 적용 시 할인됨) */}
      <h2>총 결제 금액: {totalPrice.toLocaleString()}원</h2>

      {/* ✅ 쿠폰 적용 버튼 */}
      <button onClick={() => setShowPopup(true)}>쿠폰 사용하기</button>

      {couponMessage && <p style={{ color: "green" }}>{couponMessage}</p>}
      {couponError && <p style={{ color: "red" }}>{couponError}</p>}

      {/* ✅ 팝업 창 */}
      {showPopup && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center"
        }}>
          <div style={{
            background: "#fff", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center"
          }}>
            <h3>쿠폰 코드 입력</h3>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="예: AZ58461"
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
            <div>
              <button onClick={handleApplyCoupon}>적용</button>
              <button onClick={() => setShowPopup(false)} style={{ marginLeft: "10px" }}>닫기</button>
            </div>
          </div>
        </div>
      )}

      <Link to="/pay">결제하기</Link>
      <p>도움말</p>
      <p>쿠폰을 보유중이시면 쿠폰 사용하기를 눌러주신 후 <br/>
        쿠폰번호를 입력해주시면 됩니다. <br />
        이 후 결제하기 버튼을 눌러주시면 결제창이 나옵니다.
        </p>
    </div>
  );
}
