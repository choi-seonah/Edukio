import { Link } from "react-router-dom";

export default function Way() {
    return (
        <>
        <div id='way'>
            <h1>선택해주세요</h1>
            <ul>
                <li><Link to='/menu'>매장에서 식사</Link></li>
                <li><Link to='/menu'>포장 주문</Link></li>
            </ul>
        </div>
        </>
    );
}