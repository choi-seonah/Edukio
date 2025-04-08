import busList from "./EDU03_List";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function DesForm(){
    const busnavigate=useNavigate();
    const [start, setstart]=useState("");
    const [des, setdes]=useState("");
    const [date, setdate]=useState("");
    const [starttime, setstarttime]=useState("");
    const [arrivetime, setarrivetime]=useState("");

    const Searchbus = () => {
        const parseTime = (timeStr) => {
            const [hours, minutes] = timeStr.split(":").map(Number);
            return new Date(0, 0, 0, hours, minutes); // 시간 비교를 위해 Date 객체로 변환
        };
    
        const searchbuses = busList.filter(bus => {
            const busTime = parseTime(bus.time);
            const inputStartTime = parseTime(starttime);
            const inputArriveTime = parseTime(arrivetime);
    
            return (
                bus.start === start &&
                bus.des === des &&
                bus.date === date && // 날짜 비교
                busTime >= inputStartTime && // 출발 시간이 선택한 시간 이후
                busTime <= inputArriveTime   // 출발 시간이 선택한 시간 이전
            );
        });
        console.log("검색된 버스:", searchbuses);
        busnavigate("/busselect/busdes/buscheck", { state: { buses: searchbuses } });
    };

    return(
        <>
        <div id='bus-des' className="inner">
			<h1 className='page-title'>버스 예매하기</h1>
            <form className="busform">
				<ul className='bussquare box'>
					<li>
						<p className="title">출발</p>
						<select name="출발지" value={start} onChange={(e)=>setstart(e.target.value)} required>
							<option value="" selected disabled hidden>출발지 선택</option>
							<option value="Seoul">서울</option>
							<option value="Busan">부산</option>
							<option value="Daejeon">대전</option>
							<option value="Ulsan">울산</option>
						</select>
					</li>
					<li>
						<p className="title">도착</p>
						<select name="도착지" value={des} onChange={(e)=>setdes(e.target.value)} required>
							<option value="" selected disabled hidden>도착지 선택</option>
							<option value="Seoul">서울</option>
							<option value="Busan">부산</option>
							<option value="Daejeon">대전</option>
							<option value="Ulsan">울산</option>
							<option value="Ansan">안산</option>
							<option value="Sokcho">속초</option>
						</select>
					</li>
				</ul>
				
                <div className='busdate box'>
                    <input className="desselect" type="date" id="busformdate" value={date} onChange={(e)=>setdate(e.target.value)}></input>
                </div>

                <div id="bustime" className='bustime box'>
                    <input className="desselect" type="time" value={starttime} onChange={(e)=>setstarttime(e.target.value)}></input>
                    <span> ~ </span>
                    <input type="time" value={arrivetime} onChange={(e)=>setarrivetime(e.target.value)}></input>
                </div><br/>
            </form>

			<div className="btn-wrap">
                <button className="submit-btn wd-full" onClick={(e)=>{Searchbus()}}>검색</button>
            </div>

			<div className='help-wrap'>
				<p className="help-title">도움말</p>
				
				<div className="des-help">
					<p>원하시는 출발,도착장소와 탑승하실 날짜를 정해주세요.</p>
					<p>버스 시간조회는 고르신 날짜에 입력하신 시간에 있는 버스를 찾아드립니다.</p>
					<p>선택후에 검색버튼을 눌러주시면 맞는 조건의 버스를 찾아드립니다.</p>
					<p>검색된 버스가 없으면 조건을 재설정하시고 다시 검색해주세요.</p>
				</div>
			</div>
        </div>
        </>
    );
}

