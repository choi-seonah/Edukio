import { useDispatch, useSelector } from "react-redux";
import { addToCartSide } from "./EDU02_Cart_Slice";
import { useState } from "react";

export default function Option({ onClose }) {
  const dispatch = useDispatch();
  const pizzaoptionList = useSelector(state => state.cart.pizzaoptionList);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = optionName => {
    dispatch(addToCartSide(optionName));
    setSelectedOptions([...selectedOptions, optionName]);
  };

  const handleDone = () => {
    // 옵션 선택 완료 → 창 닫기
    onClose();
  };

  return (
    <div
      style={{
        width: "300px", // ✅ 크기 줄임
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
          <li
            key={option.id}
            onClick={() => handleOptionClick(option.name)}
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "8px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "6px",
            }}
          >
            <span>{option.name}</span>
            <span>{option.price}원</span>
          </li>
        ))}
      </ul>
      <button onClick={handleDone}>선택 완료</button>
    </div>
  );
}
