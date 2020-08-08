//initialization
const elAvatar = document.getElementById('avatar')
const elFans = document.getElementById('fans')
const elScript = document.getElementById('script')
const elSep = document.getElementById('sep')
const elName = document.getElementById('name')
const elMid = document.getElementById('mid')
//getting UID, refresh time && iden(for debug)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let userID = urlParams.get('uid')
let cloc = urlParams.get('refresh-time')
let iden = urlParams.get('iden')
cloc *= 1000
if (cloc <= 10000 && iden != "FFEE_CO") {
	cloc = 10000
}
if (userID.length) {
	localStorage.setItem('userID', userID)
}
else if (localStorage.getItem('userID')) {
	userID = localStorage.getItem('userID')
}
//MID, Avatar and Fans output to html
const showFansCount = (json) => {
	elFans.innerText = Number(json.data.follower).toLocaleString()
	elMid.innerText = Number(json.data.card.mid).toLocaleString()
	elName.innerText = json.data.card.name.toLocaleString()
	elAvatar.src = json.data.card.face.replace(/^http:/, 'https:')
}
function returnAvatar() {
	elAvatar.src = json.data.card.face.replace(/^http:/, 'https:')
	return elAvatar.src.toString()
}
//get jsonp
let elScriptChild
const appendScript = () => {
	const url = "https://wild-bonus-e3a8.ao3ffee.workers.dev/?callback=showFansCount&url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fcard%3Fmid%3D" + userID//"https://json2jsonp.com/?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fcard%3Fmid%3D" + userID + '&spam=' + Number(new Date) + "&callback=showFansCount"//"https://jsonp.afeld.me/?callback=showFansCount&url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fcard%3Fmid%3D"+userID+'&spam='+Number(new Date)
	elScriptChild = document.createElement('script')
	elScriptChild.setAttribute('src', url)
	elScript.appendChild(elScriptChild)
}
appendScript()
//redo after timeout
const getData = () => {
	elScript.removeChild(elScriptChild)
	appendScript()
}
window.setInterval(getData, cloc)
//font size and stuff
const resize = () => {
	elFans.style.fontSize = document.getElementById('main').clientWidth * 0.03 + 'px'
	elName.style.fontSize = document.getElementById('main').clientWidth * 0.03 + 'px'
	elMid.style.fontSize = document.getElementById('main').clientWidth * 0.03 + 'px'
}
resize()
window.onresize = resize
//Time from https://blog.csdn.net/HZR_497/java/article/details/92084546

setInterval(function () {
	let show_day = new Array('星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日');
	let time = new Date();
	let year = time.getFullYear();
	let month = time.getMonth();
	let date = time.getDate();
	let day = time.getDay();
	let hour = time.getHours();
	let minutes = time.getMinutes();
	let second = time.getSeconds();
	month = month * 1 + 1;
	month < 10 ? month = '0' + month : month;

	hour < 10 ? hour = '0' + hour : hour;
	minutes < 10 ? minutes = '0' + minutes : minutes;
	second < 10 ? second = '0' + second : second;

	//let now_time = year + '年' + month + '月' + date + '日' + ' ' + ' ' + hour + ':' + minutes + ':' + second + "  " + show_day[day - 1];
	let now_time = year + '年' + month + '月' + date + '日' + ' ' + ' ' + hour + ':' + minutes + ':' + second + "  ";//不显示星期
	document.getElementById('showtime').innerHTML = now_time;
}, 1000);
