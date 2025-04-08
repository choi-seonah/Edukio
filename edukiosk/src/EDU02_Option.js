import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./EDU02_Cart_Slice";
import { useState } from "react";

export default function Option({ onClose,onSelect, pizzaName}) {
  const dispatch = useDispatch();
  const pizzaoptionList = useSelector(state => state.cart.pizzaoptionList);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (optionName) => {
    setSelectedOptions(prev =>
      prev.includes(optionName)
        ? prev.filter(name => name !== optionName)
        : [...prev, optionName]
    );
  };
  const handleDone = () => {
    dispatch(addToCart({
      pizzaName,             
      optionsName: selectedOptions  
    }));
  
    onClose();
    onSelect();
  };
  

  return (
    <div id='option' className='popup'>
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
						<span className="option-label">
							{option.name}
							<span className='option-price'>+{option.price.toLocaleString()}원</span>
						</span>
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
