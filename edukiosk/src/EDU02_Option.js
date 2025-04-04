export default function Option() {
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
