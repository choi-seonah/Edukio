import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const pizzaMenuList = useSelector((state) => state.pizza.pizzaMenuList);
  const pizzaClick = (id) => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div>
      <h1>🍕Pizza Menu🍕</h1>
      <ul>
        {pizzaMenuList.map((pizza) => (
          <li key={pizza.id} onClick={() => pizzaClick(pizza.id)}>
            <img src={pizza.src} alt={pizza.name} width={300} />
            <h3>{pizza.name}</h3>
            <p>{pizza.price}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
