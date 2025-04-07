import { useDispatch, useSelector } from "react-redux";
import { addToCartSide } from "./EDU02_Cart_Slice";
import { useState } from "react";

export default function Option({ onClose }) {
  const dispatch = useDispatch();
  const pizzaoptionList = useSelector(state => state.cart.pizzaoptionList);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (optionName) => {
    if (selectedOptions.includes(optionName)) {
      // 선택 해제
      setSelectedOptions(prev => prev.filter(name => name !== optionName));
    } else {
      // 선택 추가
      setSelectedOptions(prev => [...prev, optionName]);
    }
  };

  const handleDone = () => {
    // 선택된 옵션들만 dispatch
    selectedOptions.forEach(optionName => {
      dispatch(addToCartSide(optionName));
    });
    onClose(); // 창 닫기
  };

  console.log("🍕 옵션 리스트:", pizzaoptionList);

  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        border: "2px solid #888",
        borderRadius: "8px",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <h3>옵션 선택</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pizzaoptionList.map(option => (
          <li key={option.id} style={{ marginBottom: "8px" }}>
            <label
              style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.name)}
                onChange={() => handleCheckboxChange(option.name)}
              />
              {option.name} - {option.price}원
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleDone}>선택 완료</button>
    </div>
  );
}
