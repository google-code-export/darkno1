```

* Ver 1.0 :
--Form Login
--Quảng Cáo Trượt
--Like FaceBook
--Get Avatar Ra Eazy SideBar
--Get Nội Dung Từ Menu Xuống Eazy Sidebar
* Ver 2.0 :
--Đóng Mở SideBar Có Lưu Cookies ( Hiện Tại Chức Năng Này Chưa Được Hoàn Thiện Cùng Style )
--Change Backgrounds Có Lưu Cookies ( Ver 1.0 , Hiện Đang Phát Triển Sẽ Hoàn Thành Trong Thời Gian Gần Nhất )
--Cập Nhật Css Giúp Chữ Ở SideBar Giảm Kích Thước
```
Hướng Dẫn :

Tạo 1 BBCode :

Với Cách Sử Dụng BBCode :

**Có Thể Change Tên Được Nhé !**

```

[sidebar][/sidebar]

```

Và Nội Dung HTML Là :

```

<div id="fb-root">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
(function (d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s);
js.id = id;
js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1&appId=283873208395691";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//cookies js
function setCookie(e, a, b) {
var c = new Date;
c.setDate(c.getDate() + b);
a = escape(a) + (null == b ? "" : "; expires=" + c.toUTCString());
document.cookie = e + "=" + a
}

function getCookie(e) {
var a, b, c, d = document.cookie.split(";");
for (a = 0; a < d.length; a++) if (b = d[a].substr(0, d[a].indexOf("=")), c = d[a].substr(d[a].indexOf("=") + 1), b = b.replace(/^\s+|\s+$/g, ""), b == e) return unescape(c)
}

//Tổng Hợp Js Cho SideBar
$(function () {
//Hide Show SideBar
$("#eazy-main").before('<div id="hide-sidebar"><a href="javascript:void(0);" id="jk_sidebar_hide"><img src="http://tincongnghe24h.com/forum/images/misc/tab-collapsed.png"/>

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" id="jk_sidebar_show"><img src="http://tincongnghe24h.com/forum/images/misc/tab-expanded.png"/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

');
$("#jk_sidebar_hide").click(function () {
setCookie('jksidebar', 1);
$(this).hide();
$(this).next().show();
$("#eazy-sidebar").hide();
$("#eazy-main").css({
'width': '100%'
});
});
$("#jk_sidebar_show").click(function () {
setCookie('jksidebar', null);
$(this).hide();
$(this).prev().show();
$("#eazy-sidebar").show();
$("#eazy-main").css({
'width': '720px'
});
});
if (getCookie('jksidebar') == 1) {
$("#eazy-sidebar").hide();
$("#eazy-main").css({
'width': '100%'
});
$("#jk_sidebar_show").show();
$("#jk_sidebar_hide").hide();
} else {
$("#eazy-sidebar").show();
$("#eazy-main").css({
'width': '720px'
});
}

//Form login (Giữ nguyên)

if (!$("a[href*='logout']").length) {
$(".eazy-widget-header:eq(0)").text('Đăng nhập');
$(".eazy-widget-body:eq(0)").html('<form action="./ucp.php?mode=login" method="post" id="login"><table width="100%"><tr><td width="40%">Username: 

Unknown end tag for &lt;/td&gt;

<td><input type="text" tabindex="1" name="username" id="username" size="25" value="" class="inputbox autowidth" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td>Password: 

Unknown end tag for &lt;/td&gt;

<td><input type="password" tabindex="2" id="password" name="password" size="25" class="inputbox autowidth" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td><a href="./ucp.php?mode=register">Đăng ký

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/td&gt;

<td> <a href="./ucp.php?mode=sendpassword">Quên mật khẩu

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td colspan="2" align="right"><input type="submit" name="login" tabindex="6" value="Đăng nhập" class="button1" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;

');
} else {
$(".eazy-widget-body:eq(0)").html('<table width="100%"><tr><td width="60%"> - <a href="./ucp.php">Thiết lập cá nhân

Unknown end tag for &lt;/a&gt;

<br/> - <a href="./ucp.php?i=164">Sửa thông tin cá nhân

Unknown end tag for &lt;/a&gt;

<br/> - <a href="./ucp.php?i=profile&mode=signature">Sửa chữ ký cá nhân

Unknown end tag for &lt;/a&gt;

<br/> - <a href="./ucp.php?i=profile&mode=avatar">Sửa hình đại diện

Unknown end tag for &lt;/a&gt;

<br/> - <a href="./ucp.php?i=profile&mode=reg_details">Sửa thiết lập tài khoản

Unknown end tag for &lt;/a&gt;

<br/> - <a href="./ucp.php?i=pm&folder=inbox">' + $("a[href*='/ucp.php?i=pm&folder=inbox']").html() + '

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td align="right"><span id="widget_avatar">Loading avatar...

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

');
var widget_user = $("a[href*='logout']").text().split("[").pop().split("]")[0];
$(".eazy-widget-header:eq(0)").html('Logged as' + widget_user + '<a style="float:right" href="' + $("a[href*='logout']").attr('href') + '">Logout

Unknown end tag for &lt;/a&gt;

');
$("#widget_avatar").load('./ucp.php?i=profile&mode=avatar dd:first');
}

//Chỉ Hiện Ở Topic , Bài Viết Cùng Chuyên Mục
var sobaiviet = 10;
if ($(".first").length) {
$(".eazy-widget-header:eq(1)").text('Bài viết cùng chuyên mục:');
$(".eazy-widget-body:eq(1)").html('<ol start="1" id="cungchuyenmuc">

Unknown end tag for &lt;/ol&gt;

');
$.getJSON('/eazy-api.php?get=topic&num=' + sobaiviet + '&forum=' + $("a.left-box").attr('href').slice(18) + '&sortf=date&sorto=desc', function (items) {
var container = $('#cungchuyenmuc');
$(items.output).each(function (i, item) {
var html = '<li><a class="nganlai" href="/viewtopic.php?f=' + item.forum_id + '&t=' + item.topic_id + '" title="' + item.topic_title + '">' + item.topic_title + '

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

';
container.append(html);
$("a.nganlai").each(function () {
if ($(this).text().length > 35) {
$(this).text($(this).text().slice(0, 34));
$(this).append('...');
}
});
});
});
}
//Mod Change Background
$(".eazy-widget:eq(0)").after('<div class="eazy-widget"><div class="eazy-widget-header">Change background

Unknown end tag for &lt;/div&gt;

<div class="eazy-widget-body" id="cback"><a href="javascript:void(0);" id="back1"><img src="http://web.eazy.vn/images/styles/eazystyle-bigbang/bb_bg.jpg" width="65" height="65"/>

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" id="back2"><img src="http://web.eazy.vn/images/styles/eazystyle-rolex/bg_body_rolex.jpg" width="65" height="65"/>

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" id="back3"><img src="http://i1249.photobucket.com/albums/hh511/khoaqtkd/top-bg.jpg" width="65" height="65"/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');

//Chỉ Hiện Ở Trang Chủ , Like FaceBook
if ($(".online-users").length) {
$(".eazy-widget:eq(1)").after('<div class="eazy-widget"><div class="eazy-widget-header">Like us on Facebook

Unknown end tag for &lt;/div&gt;

<div class="eazy-widget-body"><iframe src="//www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/codejquery&amp;width=230&amp;height=270&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=false&amp;header=false&amp;appId=139810726043647" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:230px; height:270px;" allowTransparency="true">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');

$(".eazy-widget-header:eq(3)").text('Quảng Cáo');
$(".eazy-widget-body:eq(3)").html('<center><a href="http://forum.cuasotinhoc.vn"><img src="http://forum.cuasotinhoc.vn/ads/csth-footer.png"/>

Unknown end tag for &lt;/a&gt;

<br/><br/><a href="http://eazy.vn"><img src="http://forum.cuasotinhoc.vn/ads/hnsv-forum-footer.png"/>

Unknown end tag for &lt;/a&gt;

<br/><br/><a href="http://news.hnsv.com"><img src="http://forum.cuasotinhoc.vn/ads/hnsv-news-footer.png"/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;

');
}
//Hiện Ở Mọi Trang Trừ Trang Chủ , Quảng Cáo
if (!$(".online-users").length) {
$(".eazy-widget:eq(2)").after('<div class="eazy-widget"><div class="eazy-widget-header">Quảng Cáo

Unknown end tag for &lt;/div&gt;

<div class="eazy-widget-body" id="cback"><center><a href="http://forum.cuasotinhoc.vn"><img src="http://forum.cuasotinhoc.vn/ads/csth-footer.png"/>

Unknown end tag for &lt;/a&gt;

<br/><br/><a href="http://eazy.vn"><img src="http://forum.cuasotinhoc.vn/ads/hnsv-forum-footer.png"/>

Unknown end tag for &lt;/a&gt;

<br/><br/><a href="http://news.hnsv.com"><img src="http://forum.cuasotinhoc.vn/ads/hnsv-news-footer.png"/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
}

//Bổ Trợ Trược Quảng Cáo , Phần Dành Cho Coder Phát Triển
var truot = $(".eazy-widget:eq(3)"),
offset = truot.offset();
$(window).scroll(function () {
if ($(this).scrollTop() > offset.top) {
truot.addClass('fixed');
} else if ($(this).scrollTop() <= offset.top && truot.hasClass('fixed')) {
truot.removeClass('fixed');
};
});
//Bổ Trợ Change Background , Phần Dành Cho Coder Phát Triển
$("#cback a").each(function () {
var id = $(this).attr('id');
if (getCookie('background') == null) {
$("body").addClass('back2')
} else if (getCookie('background') == id) {
$("body").addClass(id)
}
$(this).click(function () {
setCookie('background', id);
$("body").removeClass().addClass(id)
});
});
});


Unknown end tag for &lt;/script&gt;


```


Vào Add Vào Cuối Kiểu Dáng Các Bạn :

```

.eazy-widget-body table {font-size: 11px;}

#jk_sidebar_show {display:none}

#hide-sidebar {
position: absolute;
margin-left: 980px;
margin-top: 45px;
}

#cback a{padding:5px}
.back1 {background:#032F54 url('http://web.eazy.vn/images/styles/eazystyle-bigbang/bb_bg.jpg') center 0 no-repeat;background-attachment:fixed}
.back2 {background:url(http://web.eazy.vn/images/styles/eazystyle-rolex/bg_body_rolex.jpg) 50% 0 no-repeat,white url(http://web.eazy.vn/images/styles/eazystyle-rolex/background3.jpg) repeat}
.back3 {background: url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/itop_shadow.png') center 250px no-repeat,url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/top-bg.jpg') top center no-repeat, url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/top-gradient.jpg') 0 0 repeat-x,url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/noise-bg.jpg') 0 -102px repeat-x, url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/bg_iforum.png');}

.fixed {position:fixed;top:5px;width: 237px;}

```

Hướng Dẫn Tùy Biến :

**Tùy Biến FaceBook :**

Trong BBCode Find :

```

//www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/codejquery&amp;width=230&amp;height=270&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=false&amp;header=false&amp;appId=139810726043647
```


Thay Link https://www.facebook.com/codejquery Thành Link FaceBook Bạn Muốn !

**Tùy Biến change Background :**

```

<a href="javascript:void(0);" id="back1"><img src="http://web.eazy.vn/images/styles/eazystyle-bigbang/bb_bg.jpg" width="65" height="65"/>

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" id="back2"><img src="http://web.eazy.vn/images/styles/eazystyle-rolex/bg_body_rolex.jpg" width="65" height="65"/>

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" id="back3"><img src="http://i1249.photobucket.com/albums/hh511/khoaqtkd/top-bg.jpg" width="65" height="65"/>

Unknown end tag for &lt;/a&gt;


```


Thay Các Link Ảnh :

http://web.eazy.vn/images/styles/eazyst ... /bb\_bg.jpg ( 1 )

http://web.eazy.vn/images/styles/eazyst ... _rolex.jpg ( 2 )_

http://i1249.photobucket.com/albums/hh5 ... top-bg.jpg ( 3 )

Trong Css Find :

```

.back1 {background:#032F54 url('http://web.eazy.vn/images/styles/eazystyle-bigbang/bb_bg.jpg') center 0 no-repeat;background-attachment:fixed}
.back2 {background:url('http://web.eazy.vn/images/styles/eazystyle-rolex/bg_body_rolex.jpg') 50% 0 no-repeat,white url('http://web.eazy.vn/images/styles/eazystyle-rolex/background3.jpg') repeat}
.back3 {background: url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/itop_shadow.png') center 250px no-repeat,url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/top-bg.jpg') top center no-repeat, url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/top-gradient.jpg') 0 0 repeat-x,url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/noise-bg.jpg') 0 -102px repeat-x, url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/bg_iforum.png');}


```
Thay Phần ( 1 ) , ( 2 ) , ( 3 ) Link Ảnh Bạn Đã Change Ở Trên Vào Đúng Vị Trí , Thứ Tự Như Sau ( Phần Màu Đỏ ) :
```

url('http://web.eazy.vn/images/styles/eazystyle-bigbang/bb_bg.jpg') ( 1 )

url('http://web.eazy.vn/images/styles/eazystyle-rolex/bg_body_rolex.jpg') ( 2 )

url('http://i1249.photobucket.com/albums/hh511/khoaqtkd/itop_shadow.png') ( 3 )
```
Còn Các Phần Còn Lại Là Tùy Thuộc Css Body Của Các Bạn !

Nói Cho Dễ Hiểu Hơn :
```

.back1 {...} ( Là Css Background Thứ Nhất )
.back2 {...} ( Là Css Background Thứ Hai )
.back3 {...} ( Là Css Background Thứ Ba )
```
Phần Link Ảnh Trong Các Css Background Trong Từng Phần Trên BBCode Tương Ứng Vị Trí ( 1 ) ( 2 ) Và ( 3 ) , Các Bạn Cần Change Hình Trên BBCode Tương Ứng Hình Trong Css Mỗi Phần Là Được .

Mọi Error Xin Vui Lòng Reply Tại Topic Này , Jokerteam Sẽ Fix Sớm Hết Sức Có Thể , Cám Ơn Các Bạn Đã Đọc Bài Viết Này ,

Thân Songoku !