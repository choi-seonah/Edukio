import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    const pizzamenuList = [
        { id: 1, name: "bacon", src: "/media/bacon.jpg", price: 18000 },
        { id: 2, name: "pepporoni", src: "/media/pepporoni.jpg", price: 16000 },
        { id: 3, name: "hawaiian", src: "/media/hawaiian.jpg", price: 21000 },
        { id: 4, name: "margherita", src: "/media/margherita.jpg", price: 17000 },
        { id: 5, name: "bulgogi", src: "/media/bulgogi.jpg", price: 20000 },
        { id: 6, name: "sweetpotato", src: "/media/sweetpotato.jpg", price: 15000 }
    ];

    const pizzaClick = (id) => {
        // 예: /pizza/1 으로 해당 피자 ID를 URL 파라미터로 전달
        navigate(`/pizza/${id}`);
    };

    return (
        <div>
            <h1>Pizza Menu</h1>
            <ul>
                {pizzamenuList.map(pizza => (
                    <li key={pizza.id} onClick={() => pizzaClick(pizza.id)}>
                        <img src={pizza.src} alt={pizza.name} width={300} />
                        <h3>{pizza.name}</h3>
                        <p>{pizza.price}원</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
