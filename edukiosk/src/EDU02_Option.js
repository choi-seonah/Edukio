import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOption, setTotalPrice } from "./EDU02_PIZZA_SLICE";

export default function Option() {
  const { pizzaID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pizzaMenuList = useSelector((state) => state.pizza.pizzaMenuList);
  const pizzaOptionList = useSelector((state) => state.pizza.pizzaOptionList);


  const pizza = pizzaMenuList.find((pizza) => pizza.id === Number(pizzaID));

  const [selectedOptions, setSelectedOptions] = useState([]);

  // 체크박스를 클릭할 때마다 상태 업데이트
  const optionChange = (e) => {
    const optionId = Number(e.target.value);  // 체크박스의 값 (옵션 ID)을 가져옴
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, optionId]);  // 선택한 옵션을 배열에 추가
    } else {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));  // 선택 해제 시, 배열에서 제거
    }
  };

  const getTotalPrice = () => {
    let optionPrice = 0;

    selectedOptions.forEach((optionId) => {
      const option = pizzaOptionList.find(opt => opt.id === optionId);
      if (option) {
        optionPrice += option.price;
      }
    });

    // 피자 객체가 있을 때만 가격을 계산하고, 없으면 0을 반환
    if (pizza) return pizza.price + optionPrice;
  };

  return (
    <div>
      <h2>{pizza.name} 피자</h2>
      <img src={pizza.src} alt={pizza.name} />
      <p>가격: {pizza.price}원</p>

      <h3>추가 옵션을 선택하세요.</h3>
      <ul>
        {pizzaOptionList.map((option) => (
          <li key={option.id}>
            <input
              id={option.name}
              type="checkbox"
              value={option.id}
              onChange={optionChange}
            />
            <label for={option.name}>
              {option.name} + {option.price}원
            </label>
          </li>
        ))}
      </ul>

      <h3>총 가격: {getTotalPrice()}원</h3>

      <div>
        <button type="button" onClick={() => navigate("/menu")}>취소하기</button>
        <button type="button" onClick={addToCart}>장바구니 추가</button>
      </div>
    </div>
  );
}
