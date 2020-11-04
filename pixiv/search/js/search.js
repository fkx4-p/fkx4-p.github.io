const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let keywrd = urlParams.get('keyword')
// if (keywrd.length) {
// 	localStorage.setItem('keywrd', keywrd)
// }
// else if (localStorage.getItem('keywrd')) {
// 	keywrd = localStorage.getItem('keywrd')
// }
const url = "https://api.peer.ink/api/v1/pixiv/search/popular?keyword=" + keywrd
fetch(url)
    .then(async e => {
        const obj = JSON.parse(await e.text())
        // console.log(obj)
        var htmtemp = " ";
        Object.keys(obj.result).forEach(i => {
            const tmp = obj.result[i];
            var small_square_img = tmp.image_urls.square_medium.replace('i.pximg.net','i.pixiv.cat');
//            var tmp3 = small_tmp.replace('i.pximg.net','i.pixiv.cat');
            // wrapper.innerHTML += '<div class="mdui-card">' + '</div>';
            if(tmp.meta_single_page.meta_pages != undefined) console.log(tmp.meta_single_page.meta_pages);
            if(tmp.meta_single_page.original_image_url != undefined && tmp.sanity_level <= 3)
            {
            //    wrapper.innerHTML += '<div class="mdui-col-sm-6 mdui-col-md-4">' + '<div class="mdui-card">' + '<div style="margin: 20px">' + '<div class="mdui-card-media">' + '<img src="' + small_square_img + '"\/>' + '</div>' + '<div class="mdui-card-primary">' +'<div class="mdui-card-primary-title">' + tmp.title + '</div>' + '</div>' + '<div class="mdui-card-content">id:' + tmp.id.toString() + '</div>' + '<div class="mdui-card-content">view:' + tmp.total_view.toString() + '</div>' + '<div class="mdui-card-content">fav:' + tmp.total_bookmarks.toString() + '<div class="mdui-card-actions">' + '<a href="' +tmp.meta_single_page.original_image_url.replace('i.pximg.net','i.pixiv.cat') + '">' + '<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">Original</button></a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'; 
               htmtemp += '<div class="mdui-col-sm-6 mdui-col-md-4">' + '<div class="mdui-card" style="margin-bottom: 10px">' + '<div style="margin: 20px">' + '<div class="mdui-card-media">' + '<img src="' + small_square_img + '"\/>' + '</div>' + '<div class="mdui-card-primary">' +'<div class="mdui-card-primary-title">' + tmp.title + '</div>' + '</div>' + '<div class="mdui-card-content">id:' + tmp.id.toString() + '</div>' + '<div class="mdui-card-content">view:' + tmp.total_view.toString() + '</div>' + '<div class="mdui-card-content">fav:' + tmp.total_bookmarks.toString() + '<div class="mdui-card-actions">' + '<a href="' +tmp.meta_single_page.original_image_url.replace('i.pximg.net','i.pixiv.cat') + '">' + '<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">Original</button></a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'; 
    		
            //    wrapper.innerHTML += '\n';
               htmtemp += '\n';
            } 
            if(tmp.meta_single_page.original_image_url == undefined && tmp.sanity_level <= 3){
                // wrapper.innerHTML += '<div class="mdui-col-sm-6 mdui-col-md-4">' + '<div class="mdui-card">' + '<div style="margin: 20px">' + '<div class="mdui-card-media">' + '<img src="' + small_square_img + '"\/>' + '</div>' + '<div class="mdui-card-primary">' +'<div class="mdui-card-primary-title">' + tmp.title + '</div>' + '</div>' + '<div class="mdui-card-content">id:' + tmp.id.toString() + '</div>' + '<div class="mdui-card-content">view:' + tmp.total_view.toString() + '</div>' + '<div class="mdui-card-content">fav:' + tmp.total_bookmarks.toString() + '<div class="mdui-card-actions">' + '<a href=https://pixivic.com/illusts/' + tmp.id.toString() + '>' + '<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">Original</button></a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'; 
                htmtemp += '<div class="mdui-col-sm-6 mdui-col-md-4">' + '<div class="mdui-card" style="margin-bottom: 10px">' + '<div style="margin: 20px">' + '<div class="mdui-card-media">' + '<img src="' + small_square_img + '"\/>' + '</div>' + '<div class="mdui-card-primary">' +'<div class="mdui-card-primary-title">' + tmp.title + '</div>' + '</div>' + '<div class="mdui-card-content">id:' + tmp.id.toString() + '</div>' + '<div class="mdui-card-content">view:' + tmp.total_view.toString() + '</div>' + '<div class="mdui-card-content">fav:' + tmp.total_bookmarks.toString() + '<div class="mdui-card-actions">' + '<a href=https://pixivic.com/illusts/' + tmp.id.toString() + '>' + '<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">Original</button></a>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'; 
                htmtemp += '\n';
             }
            //console.log(tmp);
        })
        wrapper.innerHTML += htmtemp;
    })
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (obj) {
    //     Object.keys(obj).forEach(i => {
    //         const e = obj[i];
    //         var tmp = JSON.stringify(e);
    //         var datas = JSON.parse(tmp);
    //         // wrapper.innerHTML += '<div class="mdui-card">';
    //         // wrapper.innerHTML += '<div class="mdui-card-media">' + '<img src="' + e.image_urls.square_medium + '"/>';
    //         // wrapper.innerHTML += '</div>';
    //         // wrapper.innerHTML += '\n';
    //         console.log(datas);
    //     })
    //     console.log(obj);
    // });
