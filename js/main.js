$(document).ready(function() {
    //    随机头像
    var base_img_url = "https://blog.mana.love/img/avatar_";
    var avatar = $('.avatar_a');
    var str = '<img src="' + base_img_url + parseInt(19 * Math.random()) + '.png' + '" alt="" class="avatar">';
    if ($(".avatar_a>img").length == 0) {
        avatar.empty().append(str);
    } else {
        console.log(666);
        $(".avatar_a>img").attr('src', base_img_url + parseInt(19 * Math.random()) + '.png');
    }
    console.log(str);
});
