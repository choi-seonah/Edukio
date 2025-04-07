import { useDispatch, useSelector } from "react-redux";
import { addToCart, amountCount, clearCart, removeProduct } from "./EDU02_Cart_Slice";
import Option from "./EDU02_Option";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/EDU02_Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const pizzamenuList = useSelector(state => state.cart.pizzamenuList);
  const cartList = useSelector(state => state.cart.cartList);

  //  추가: 어떤 피자에 옵션을 붙이는지 저장
  const [targetPizzaName, setTargetPizzaName] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showCart, setShowCart] = useState(false);

  //  피자 클릭 시: 카트에 추가 + 옵션창 열기
  const handlePizzaClick = pizzaName => {
    dispatch(addToCart(pizzaName));
    setTargetPizzaName(pizzaName); //  타겟 피자 설정
    setShowOptions(true); // 옵션창 열기
  };

  // 총 금액 계산
  let totalPrice = 0;
  for (let product of cartList) {
    const optionTotal = product.options ? product.options.reduce((sum, opt) => sum + opt.price, 0) : 0;
    totalPrice += (product.price + optionTotal) * product.amount;
  }

  return (
    <>
      <div id="menu" className='inner'>
        <h2 className='page-title'>메뉴를 선택해주세요</h2>
        <ul className="product-list">
          {pizzamenuList.map(pizza => (
            <li key={pizza.name} onClick={() => handlePizzaClick(pizza.name)}>
              <label style={{ cursor: "pointer" }}>
                <img src={pizza.src} alt={pizza.name} />
              </label>
              <p className='product-name'>{pizza.name}</p>
              <p className='product-price'>{pizza.price}원</p>
            </li>
          ))}
        </ul>
          <div>
            <p class="menuhelpclass">도움말</p>
            <p class="menuhelp">원하시는 피자 종류를 골라주신 후 <br />
               추가로 필요하신 옵션을 클릭해 주시면 됩니다. <br />
               선택이 끝나신 후 더 필요하신 피자가 있으시면 한 번 더 클릭해서 <br />
               담아주시고 주문하기를 누르시면 다음 화면으로 넘어갑니다.
            </p>
          </div>
      </div>

      {/*  장바구니는 옵션창과 분리된 상태로 조건부 렌더링 */}
      {showCart && (
        <div id='cart'>
          <ul className='cart-list-head'>
            <li>메뉴</li>
            <li>수량</li>
            <li>가격</li>
            <li></li>
          </ul>
          <ul className="cart-list">
            {cartList.map(product => (
              <li key={product.name}>
                <div className='item-menu'>
                  <p className='product-name'>{product.name}</p>
                  {product.options && product.options.length > 0 && (
                    <ul className='menu-option'>
                      {product.options.map(opt => (
                        <li key={opt.name}>
                          + {opt.name} ({opt.price}원)
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className='item-count'>
                  <input
                    type="number"
                    min={1}
                    value={product.amount}
                    onChange={e =>
                      dispatch(amountCount({ _name: product.name, _amount: e.target.value }))
                    }
                  />
                </div>
                <p className='item-price'>
                  {(product.price + (product.options?.reduce((a, c) => a + c.price, 0) || 0)) *
                    product.amount}
                  원
                </p>
                <div className='item-remove'>
                  <button onClick={() => dispatch(removeProduct(product.name))}>X</button>
                </div>
              </li>
            ))}
          </ul>
          <div className='total-wrap'>
            <h2 className='total-price'>총 금액 <span>{totalPrice.toLocaleString()}원</span></h2>
            <div className='btn-wrap'>
              <button className='submit-btn gray' onClick={() => dispatch(clearCart())}>전체취소</button>
              <Link className='submit-btn' to="/checkout">주문하기</Link>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Option은 cart 밖에서 렌더링 */}
      {showOptions && targetPizzaName && (
        <Option
          pizzaName={targetPizzaName}
          onSelect={() => setShowCart(true)}     // 옵션 선택 완료 → 장바구니 보여주기
          onClose={() => setShowOptions(false)} // 옵션창 닫기
        />
      )}
    </>
  );
}
