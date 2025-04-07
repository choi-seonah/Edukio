import { Link } from "react-router-dom";

export default function Way() {
    return (
        <>
        <div id='way' className='inner'>
            <h1 className='page-title'>식사 장소를 선택해주세요</h1>
            <ul className='select-list'>
                <li>
                    <Link to='/menu'>
                        <img className='ico' src="./media/ico_store.png"></img>
                        <p className='title'>매장에서 식사</p>
                    </Link>
                </li>
                <li>
                    <Link to='/menu'>
                        <img className='ico' src="./media/ico_togo.png"></img>
                        <p className='title'>포장 주문</p>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}