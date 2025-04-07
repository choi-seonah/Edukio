import { useDispatch, useSelector } from "react-redux";
import { addToCart, amountCount, clearCart, removeProduct } from "./EDU02_Cart_Slice";
import Option from "./EDU02_Option";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [showOptions, setShowOptions] = useState(false);

  const handlePizzaClick = pizzaName => {
    dispatch(addToCart(pizzaName));
    setShowOptions(true); // 피자 클릭 → 옵션창 뜨기
  };
  const dispatch = useDispatch();
  const pizzamenuList = useSelector(state => state.cart.pizzamenuList);
  const cartList = useSelector(state => state.cart.cartList);
  let totalPrice = 0;
  for (let product of cartList) {
    const optionTotal = product.options ? product.options.reduce((sum, opt) => sum + opt.price, 0) : 0;

    totalPrice += (product.price + optionTotal) * product.amount;
  }
  return (
    <>
    <div id="menu" className='inner'>
      {/* 메뉴 */}
      <h2 className='page-title'>메뉴를 선택해주세요</h2>
      <ul className="product-list">
        {pizzamenuList.map(pizza => (
          <li onClick={() => handlePizzaClick(pizza.name)}>
            <label style={{ cursor: "pointer" }}>
              <img src={pizza.src} />
            </label>
            <p className='product-name'>{pizza.name}</p>
            <p className='product-price'>{pizza.price}원</p>
          </li>
        ))}
      </ul>

      {/* 장바구니 */}
      <div className='cart'>
        <ul className="cart-list">
          {cartList.map(product => (
            <li>
              <p>{product.name}</p>
              <p>{product.price}원</p>
              {product.options && product.options.length > 0 && (
                <ul>
                  {product.options.map(opt => (
                    <li key={opt.name}>
                      + {opt.name} ({opt.price}원)
                    </li>
                  ))}
                </ul>
              )}
              {showOptions && <Option onClose={() => setShowOptions(false)} />}
              <p>총 가격: {(product.price + (product.options?.reduce((a, c) => a + c.price, 0) || 0)) * product.amount}원</p>

              <input type="number" min={1} value={product.amount} onChange={e => dispatch(amountCount({ _name: product.name, _amount: e.target.value }))} />
              <button onClick={() => dispatch(removeProduct(product.name))}>X</button>

              <ul>
                <li></li>
              </ul>
            </li>
          ))}
        </ul>
        <h2>총 금액: {totalPrice}원</h2>

        <button onClick={() => dispatch(clearCart())}>리셋</button>
        <Link to="/checkout">결제화면으로</Link>
      </div>
      {/* //cart */}
    </div>
    </>
  );
}
