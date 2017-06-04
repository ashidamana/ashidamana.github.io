$(document).ready(function() {
    //    随机头像
    var base_img_url="https://blog.mana.love/img/avatar_";
    var avatar=$('.avatar_a');
    var str='<img src="'+base_img_url+parseInt(19*Math.random())+'.png'+'" alt="" class="avatar">';
    avatar.empty().append(str);
    console.log(str);
});
