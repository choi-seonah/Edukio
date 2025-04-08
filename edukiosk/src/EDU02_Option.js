import { useDispatch, useSelector } from "react-redux";
import { addToCartSide } from "./EDU02_Cart_Slice";
import { useState } from "react";

export default function Option({ onClose,onSelect ,pizzaName}) {
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
	selectedOptions.forEach(optionName => {
	  dispatch(addToCartSide(optionName));
	});
	onClose();
	onSelect();
  };

  return (
    <div id='Option' className='popup'>
        <div className='dim'></div>
        <div className='popup-content'>
            <h3 className='page-title'>옵션을 선택해주세요</h3>
            
            <ul className='option-list'>
                {pizzaoptionList.map(option => (
                <li key={option.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option.name)}
                            onChange={() => handleCheckboxChange(option.name)}
                        />
                        {option.name}<span className='option-price'>+{option.price}원</span>
                    </label>
                </li>
                ))}
            </ul>
            <div className='btn-wrap'>
                <button className='submit-btn wd-full' onClick={handleDone}>선택 완료</button>
            </div>
        </div>
    </div>
  );
}
