import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);

  // 장바구니에서 개별 항목 제거
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // 전체 결제 금액 계산
  const totalPrice = cartItems.reduce((total, item) => {
    const optionsTotal = item.options.reduce((optSum, opt) => optSum + opt.price, 0);
    return total + item.price + optionsTotal;
  }, 0);

  return (
    <div>
      <h2>🛒 장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.price}원
              <ul>
                {item.options.map(opt => (
                  <li key={opt.id}>
                    ➕ {opt.name} (+{opt.price}원)
                  </li>
                ))}
              </ul>
              <button onClick={() => handleRemove(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}

      <h3>총 결제 금액: {totalPrice}원</h3>

      <div>
        <button onClick={() => navigate("/menu")}>🍕 계속 주문하기</button>
      </div>
    </div>
  );
}
