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
  const url = "https://json2jsonp.com/?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fcard%3Fmid%3D" + userID + '&spam=' + Number(new Date) + "&callback=showFansCount"//"https://jsonp.afeld.me/?callback=showFansCount&url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fcard%3Fmid%3D"+userID+'&spam='+Number(new Date)
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