//<header> 상단 오른쪽 id=todayDate 날짜 고치기
//HTML 요소 찾기
//자바스크립트에서 HTML 요소 찾기 COM필요
const todayDate = document.querySelector("#todayDate");

//시작할때 화면에 날짜 표시

//현재 날짜 가져오기 함수만들기
function showToday(){
	const now = new Date(); // 새로운 날짜를 만들어라
	//이전 textDate의 속성textContext에 값을 지금 날짜로 수정
	//intl : 세계문화권 함수 라이브러리
	//DateTimeFormat : 날짜/시간을 담당하는 클래스
	todayDate.textContent = new intl.DateTimeFormat("ko-KR", {
		year: "numeric", month: "long", day: "numeric", weekday: "long"
	}).format(now);
}
