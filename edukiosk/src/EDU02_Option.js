import { useParams } from "react-router-dom";

export default function Option() {

  const { pizzaID } = useParams();

  const pizzamenuList = [
    { id: 1, name: "bacon", src: "/media/bacon.jpg", price: 18000 },
    { id: 2, name: "pepporoni", src: "/media/pepporoni.jpg", price: 16000 },
    { id: 3, name: "hawaiian", src: "/media/hawaiian.jpg", price: 21000 },
    { id: 4, name: "margherita", src: "/media/margherita.jpg", price: 17000 },
    { id: 5, name: "bulgogi", src: "/media/bulgogi.jpg", price: 20000 },
    { id: 6, name: "sweetpotato", src: "/media/sweetpotato.jpg", price: 15000 }
  ];

  return (
    <>
      <form>
        <h2>고구마 피자</h2>
        <p>추가 옵션을 선택하세요.</p>
        <ul>
          <li>
            <input id="bacon" type="checkbox" name="pizzaoption" />
            <label for="bacon">베이컨 토핑 +price원</label>
          </li>
          <li>
            <input id="olive" type="checkbox" name="pizzaoption" />
            <label for="olive">올리브 토핑 +price원</label>
          </li>
        </ul>
        <div>
          <button>취소하기</button>
          <button>선택완료</button>
        </div>
      </form>
    </>
  );
}
