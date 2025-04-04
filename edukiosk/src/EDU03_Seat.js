export default function Seat() {
    // 좌석 선택창

    const blankSeat = [];
    // let count = 0; 나중에 결제할때 *count 로 계산
    for (let k = 0; k < 10; k++) {
        const blank = [];
        for (let i = 0; i < 4; i++) {
            blank.push(<span>{i}</span>);
            // count++
        }

        blankSeat.push(
            <div>
                {blank}
            </div>
        )

    }
    return (
        <>
            <h2>좌석 현황</h2>
            {blankSeat}
        </>
    );


}