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
  const sideMenuList = [];
  const pizzaoptionList = useSelector(state => state.cart.pizzaoptionList);
  for (let i = 7; i < 9; i++) {
    sideMenuList.push(pizzaoptionList[i]);
  }
  let totalPrice = 0;
  for (let product of cartList) {
    const optionTotal = product.options ? product.options.reduce((sum, opt) => sum + opt.price, 0) : 0;

    totalPrice += (product.price + optionTotal) * product.amount;
  }
  return (
    <>
      {/* 메뉴 */}
      <h2>Pizza</h2>
      <ul className="pizza-list">
        {pizzamenuList.map(pizza => (
          <li onClick={() => handlePizzaClick(pizza.name)}>
            <img src={pizza.src} width="100" height="50" />
            <p>{pizza.name}</p>
            <p>{pizza.price}원</p>
          </li>
        ))}
      </ul>

      {/* 장바구니 */}
      <hr></hr>
      <h1>장바구니</h1>
      <div>
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
        <Link to="/menu/pizzapay">결제화면으로</Link>
      </div>
    </>
  );
}
