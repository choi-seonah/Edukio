import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout() {
  const cartList = useSelector(state => state.cart.cartList);

  // 총합 계산
  const totalPrice = cartList.reduce((acc, product) => {
    const base = product.price * product.amount;
    const optionPrice = product.options
      ? product.options.reduce((sum, opt) => sum + opt.price, 0)
      : 0;
    return acc + base + optionPrice;
  }, 0);

  return (
    <div style={{ padding: "30px" }}>
      <h2>결제 확인</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {cartList.map((item, idx) => (
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

            {/* 옵션 목록 */}
            {item.options && item.options.length > 0 && (
              <div>
                <strong>옵션:</strong>
                <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
                  {item.options.map((opt, i) => (
                    <li key={i}>
                      {opt.name} (+{opt.price}원)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <h2>총 결제 금액: {totalPrice.toLocaleString()}원</h2>
      <Link to="/menu/pizzapay">결제하기</Link>
    </div>
  );
}