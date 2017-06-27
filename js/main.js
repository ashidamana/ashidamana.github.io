$(document).ready(function() {
    //    随机头像
//    var base_img_url = "https://blog.mana.love/img/avatar_";
    var base_img_url = "https://ooo.0o0.ooo/2017/06/27/";
//    var base_img_url = "http://blog.mana.love/img/avatar_";
    var avatar = $('.avatar_a');
    var avatars=new Array(
    '5951e0f2c82bf','5951e11d274b9','5951e12762ccd','5951e130c2e81',
    '5951e139cd8cd','5951e1437f5c6','5951e153411e4','5951e16a1435f','5951e1732260b',
    '5951e17c39a7e','5951e18556b75','5951e18e2ee3f','5951e195f1871','5951e19dce0d3',
    '5951e1a6804cc','5951e1b0973a4','5951e1b8177f5','5951e1c034164','5951e1ca8c139','5951e1d3cc3ce');
//    var str = '<img src="' + base_img_url + parseInt(19 * Math.random()) + '.png' + '" alt="" class="avatar">';
    var str = '<img src="' + base_img_url + avatars[parseInt(19 * Math.random())] + '.png' + '" alt="" class="avatar">';
    if ($(".avatar_a>img").length == 0) {
        avatar.empty().append(str);
    } else {
        $(".avatar_a>img").attr('src', base_img_url + avatars[parseInt(19 * Math.random())] + '.png');
    }
//    非本站的链接全部新窗口打开
    var reg = /^https:\/\/blog\.mana\.love/;
//    var reg2 = /^http:\/\/blog\.mana\.love/;
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        if (!reg.test(a[i].href)) {
            a[i].target = "_blank";
        }
    }
      
});
