// 初始化元素常量
    const elAvatar = document.getElementById('avatar')
    const elFans = document.getElementById('fans')
    const elScript = document.getElementById('script')
    const elSep = document.getElementById('sep')
    const elName = document.getElementById('name')
    const elMid = document.getElementById('mid')
    // 获取用户 id
    let userID = window.location.hash.replace(/^#/, '')
    if(userID.length){
      localStorage.setItem('userID', userID)
    }else if(localStorage.getItem('userID')){
      userID = localStorage.getItem('userID')
    }
    // 显示头像和粉丝数
    const showFansCount = (json)=>{
      elFans.innerText = Number( json.data.follower ).toLocaleString()
      elMid.innerText = Number( json.data.card.mid ).toLocaleString()
      elName.innerText = json.data.card.name.toLocaleString()
      elAvatar.src = json.data.card.face.replace(/^http:/,'https:')
    }
    // 创建数据地址并添加元素
    let elScriptChild
    const appendScript = ()=>{
      const url = "https://jsonp.afeld.me/?callback=showFansCount&url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fcard%3Fmid%3D"+userID+'&spam='+Number(new Date)
      elScriptChild = document.createElement('script')
      elScriptChild.setAttribute('src', url)
      elScript.appendChild(elScriptChild)
    }
    appendScript()
    // 重复数据获取操作
    const getData = ()=>{
      elScript.removeChild(elScriptChild)
      appendScript()
    }
    window.setInterval(getData, 60000)
    // 页面元素定位
    const resize = ()=>{
      elFans.style.fontSize = document.getElementById('main').clientWidth*0.03+'px'
      elName.style.fontSize = document.getElementById('main').clientWidth*0.03+'px'
      elMid.style.fontSize = document.getElementById('main').clientWidth*0.03+'px'
    }
    resize()
    window.onresize = resize