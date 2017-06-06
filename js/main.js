$(document).ready(function() {
    //    随机头像
    var base_img_url = "https://blog.mana.love/img/avatar_";
    var avatar = $('.avatar_a');
    var str = '<img src="' + base_img_url + parseInt(19 * Math.random()) + '.png' + '" alt="" class="avatar">';
    if ($(".avatar_a>img").length == 0) {
        avatar.empty().append(str);
    } else {
        $(".avatar_a>img").attr('src', base_img_url + parseInt(19 * Math.random()) + '.png');
    }
//    非本站的链接全部新窗口打开
    var reg = /^https:\/\/blog\.mana\.love/;
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        if (!reg.test(a[i].href)) {
            a[i].target = "_blank";
        }
    }
      
});
