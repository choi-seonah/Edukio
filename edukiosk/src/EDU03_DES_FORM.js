import bussList from "./EDU03_LIST";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DesForm(){
    const busnavigate=useNavigate();
    const [start, setstart]=useState("");
    const [des, setdes]=useState("");
    const [date, setdate]=useState("");
    const [starttime, setstarttime]=useState("");
    const [arrivetime, setarrivetime]=useState("");

    return(
        <>
        <div>
            <h1>버스 예매하기</h1>
            <form id="busform">
                <div id="busstart">
                    <span>출발지 </span>
                    <select name="출발지" id="selectstart" 
                    value={start} onChange={(e)=>setstart(e.target.value)}>
                        <option value="" selected="select">출발지 선택</option>
                        <option value="Seoul">서울</option>
                        <option value="Busan">부산</option>
                        <option value="Daejeon">대전</option>
                        <option value="Ulsan">울산</option>
                    </select>
                </div><br/>

                <div id="busdest">
                    <span>도착지 </span>
                    <select name="도착지" id="selectdes"
                    value={des} onChange={(e)=>setdes(e.target.value)}>
                        <option value="" selected="select">도착지 선택</option>
                        <option value="Seoul">서울</option>
                        <option value="Busan">부산</option>
                        <option value="Daejeon">대전</option>
                        <option value="Ulsan">울산</option>
                        <option value="Ansan">안산</option>
                        <option value="Sokcho">속초</option>
                    </select>
                </div><br/>

                <div id="busdate">
                    <label for="busformdate">날짜 </label>
                    <input type="date" id="busformdate" value={date} onChange={(e)=>setdate(e.target.value)}></input>
                </div><br/>

                <div id="bustime">
                    <span>출발시간 </span>
                    <input type="time" value={starttime} onChange={(e)=>setstarttime(e.target.value)}></input>
                    <span> ~ </span>
                    <span>도착시간 </span>
                    <input type="time" value={arrivetime} onChange={(e)=>setarrivetime(e.target.value)}></input>
                </div><br/>
            </form>
                <button onClick={(e)=>{busnavigate("/buscheck");
                }}>검색</button>

        </div>
        </>
    );
}

