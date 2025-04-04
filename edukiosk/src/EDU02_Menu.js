import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();
    const pizzaMenuList = useSelector((state) => state.pizza.pizzaMenuList);
    const totalPrice = useSelector((state) => state.pizza.totalPrice);
    const cartList = useSelector((state) => state.pizza.cartList);


    const pizzaClick = (id) => {
        navigate(`/pizza/${id}`);
    };

    return (
        <div>
            <h1>Pizza Menu</h1>
            <ul>
                {pizzaMenuList.map(pizza => (
                    <li key={pizza.id} onClick={() => pizzaClick(pizza.id)}>
                        <img src={pizza.src} alt={pizza.name} width={300} />
                        <h3>{pizza.name}</h3>
                        <p>{pizza.price}원</p>
                    </li>
                ))}
            </ul>

            <h2>장바구니 총 금액: {totalPrice}원</h2>
            <h3>장바구니 목록:</h3>
            <ul>
                {cartList.map((item, index) => (
                    <li key={index}>
                        <h4>{item.pizza.name}</h4>
                        <p>옵션: {item.options}</p>
                        <p>가격: {item.totalPrice}원</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

