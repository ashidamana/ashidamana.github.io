$(document).ready(function() {
    var base_img_url="https://blog.mana.love/img/avatar_";
    var avatar=$('.avatar');
//    随机头像
    avatar.attr('src',base_img_url+parseInt(19*Math.random())+'.png');
//    console.log(avatar);
});
