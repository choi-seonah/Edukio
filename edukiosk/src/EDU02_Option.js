import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function Option() {
  const navigate = useNavigate();
  const { pizzaID } = useParams();
  const pizzaMenuList = useSelector((state) =>
    state.pizza.pizzaMenuList.find((p) => p.id === Number(pizzaID))
  );
  const pizzaOptionList = useSelector((state) => state.option.pizzaOptionList);
  const selectedOptions = useSelector((state) => state.option.selectedOptions);

  return (
    <div>
      <h3>추가 옵션을 선택하세요.</h3>
      <ul>
        {pizzaOptionList.map((option) => (
          <li key={option.id}>
            <input type="checkbox" value={option.id} onChange={optionChange} />
            <label for={option.id}>
              {option.name} + {option.price}원
            </label>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={optionChange}> 장바구니 추가</button>
        <button onClick={() => navigate("/menu")}>취소하기</button>
      </div>
    </div>
  );
}
