![http://plugin.hnsv.com/sinhvat/ktools_demo/images/logo.png](http://plugin.hnsv.com/sinhvat/ktools_demo/images/logo.png)
kTools là gì ? Là bộ công cụ tổng hợp gồm chatbox (kChat), thông điệp yêu thương (kGift) và hàng nhiều plugin khác tích hợp sẵn hỗ trợ cho các admin forum HNSV và EAZY
Live Demo: http://designs.eazy.vn
Một số hình ảnh :
![http://a.imageshack.us/img827/8030/chiplovebiz03062012.png](http://a.imageshack.us/img827/8030/chiplovebiz03062012.png)
![http://a.imageshack.us/img35/2379/chiplovebiz03062012a.jpg](http://a.imageshack.us/img35/2379/chiplovebiz03062012a.jpg)
![http://a.imageshack.us/img835/493/chiplovebiz03062012z.jpg](http://a.imageshack.us/img835/493/chiplovebiz03062012z.jpg)
![http://a.imageshack.us/img577/8977/chiplovebiz03062012y.jpg](http://a.imageshack.us/img577/8977/chiplovebiz03062012y.jpg)


Link download: http://www.mediafire.com/?li4hbzp80265b
Xem hướng dẫn cài đặt chi tiết tại đây : viewtopic.php?f=95&t=18220
Một số lưu ý cài đặt ở phiên bản này :
- Để sửa cấu hình bạn mở file data/config.ini

```

forum_name = "kTools Demo"
forum_link = "designs.eazy.vn"
mang_admin[] = "la.sinhvat"
mang_admin[] = "Min♥Min"
mang_admin[] = "nh0kb0m"
mau_admin = "#FF0000"
mang_smod[] = "smod"
mang_smod[] = "sieuquay"
mau_smod = "#0000FF"
mang_mod[] = "mod"
mau_mod = "#0DFF00"
bool_mask_enable = true
link_mask = "[liên kết ngoài]"
email_mask = "[địa chỉ email]"
block = "chó,ngu,đéo,shit,Shit,dkm,vkl,Đm,đm,damn,shit"
```

Các bạn chỉ sửa mục forum\_link = "designs.eazy.vn" thay designs.eazy.vn thành link forum của bạn thôi, các phần còn lại cứ để yên vì có thể sửa trong ACP (sửa nhiều sẽ gấy ra lỗi)
- Chèn vào forum :
+ Với Eazy &HNSV dùng các style dựa trên prosilver (Eazy Style, ...)

```

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<div style="display: none"><form name="kchat_login" method="post" action="http://plugin.hnsv.com/sinhvat/ktools/?mode=login" target="kchat_frame">
<input type="text" name="user" id="user"/>

Unknown end tag for &lt;/form&gt;


<iframe name="kchat_frame">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;


<script src="http://plugin.hnsv.com/sinhvat/ktools/script.js">

Unknown end tag for &lt;/script&gt;


<script>
function load_chat(){
$('.forabg:eq(1)').after('<ifr'+'ame frameborder="0" scrolling="no" height=370 width="100%" src="http://plugin.hnsv.com/sinhvat/ktools/?mode=chatbox"></if'+'rame>');
}
function popup(url) {
newwindow=window.open(url,'name','height=300,width=600');
if (window.focus) {newwindow.focus()}
}


Unknown end tag for &lt;/script&gt;


<!-- kLove add -->
<script src="http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=json">

Unknown end tag for &lt;/script&gt;


<script>
$(document).ready(function(){
$.each(klove,function (i, item) {
var noidung='<span style="margin-right:60px"><span class="gui">'+item.gui+'

Unknown end tag for &lt;/span&gt;

 <span style="color:#008000">nhắn với

Unknown end tag for &lt;/span&gt;

 '+item.nhan+': <span style="color:red">"'+item.nd+'"

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

';
$('#noidung marquee').append(noidung);
});
if (!$('#noidung marquee').html()) $('#noidung marquee').html('Không có thông điệp nào');
});


Unknown end tag for &lt;/script&gt;


<style>
.gui{color:#FFF;size:4px;text-shadow:0 0 0 #111, 0 0 .5em purple, 0 0 .4em purple}
#noidung{font-weight:700}
#klove{background-color:#F3F3F3;font-family:tahoma;font-size:14px;height:18px;left:0;opacity:0.70;padding-bottom:2px;position:fixed;top:0;width:100%;z-index:10000}


Unknown end tag for &lt;/style&gt;


<div id="klove">
<table bgcolor="#000000" cellspacing="0" style="border:1px solid #ccc;height:35px;" width="100%">
<tr>
<td width="8%" valign="middle"><img src="http://forum.thptlaocai1.com/images/tdyt/tdyt_start.png" alt="Love Telling" border="0" width="30" height="28" />

Unknown end tag for &lt;/td&gt;


<td width="84%" valign="middle">
<div id="noidung">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td width="8%" valign="middle">
<a href="javascript: popup('http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=send');">
<img title="Gửi thông điệp yêu thương!" src="http://i.imgur.com/AkeLK.jpg" alt="Love Telling" border="0" width="100" height="39" />


Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;

```


+ Với Eazy & HNSV dùng style dựa trên subsilver 2 (trừ Autinhyeu - HNSV):

```

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<div style="display: none"><form name="kchat_login" method="post" action="http://plugin.hnsv.com/sinhvat/ktools/?mode=login" target="kchat_frame">
<input type="text" name="user" id="user"/>

Unknown end tag for &lt;/form&gt;


<iframe name="kchat_frame">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;


<script src="http://plugin.hnsv.com/sinhvat/ktools/script.js">

Unknown end tag for &lt;/script&gt;


<script>
function load_chat(){
$('.forabg').after('<ifr'+'ame frameborder="0" scrolling="no" height=370 width="100%" src="http://plugin.hnsv.com/sinhvat/ktools/?mode=chatbox"></if'+'rame>');
}
function popup(url) {
newwindow=window.open(url,'name','height=300,width=600');
if (window.focus) {newwindow.focus()}
}


Unknown end tag for &lt;/script&gt;


<!-- kLove add -->
<script src="http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=json">

Unknown end tag for &lt;/script&gt;


<script>
$(document).ready(function(){
$.each(klove,function (i, item) {
var noidung='<span style="margin-right:60px"><span class="gui">'+item.gui+'

Unknown end tag for &lt;/span&gt;

 <span style="color:#008000">nhắn với

Unknown end tag for &lt;/span&gt;

 '+item.nhan+': <span style="color:red">"'+item.nd+'"

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

';
$('#noidung marquee').append(noidung);
});
if (!$('#noidung marquee').html()) $('#noidung marquee').html('Không có thông điệp nào');
});


Unknown end tag for &lt;/script&gt;


<style>
.gui{color:#FFF;size:4px;text-shadow:0 0 0 #111, 0 0 .5em purple, 0 0 .4em purple}
#noidung{font-weight:700}
#klove{background-color:#F3F3F3;font-family:tahoma;font-size:14px;height:18px;left:0;opacity:0.70;padding-bottom:2px;position:fixed;top:0;width:100%;z-index:10000}


Unknown end tag for &lt;/style&gt;


<div id="klove">
<table bgcolor="#000000" cellspacing="0" style="border:1px solid #ccc;height:35px;" width="100%">
<tr>
<td width="8%" valign="middle"><img src="http://forum.thptlaocai1.com/images/tdyt/tdyt_start.png" alt="Love Telling" border="0" width="30" height="28" />

Unknown end tag for &lt;/td&gt;


<td width="84%" valign="middle">
<div id="noidung">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td width="8%" valign="middle">
<a href="javascript: popup('http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=send');">
<img title="Gửi thông điệp yêu thương!" src="http://i.imgur.com/AkeLK.jpg" alt="Love Telling" border="0" width="100" height="39" />


Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


```

+ Với HNSV dùng style Autinhyeu

```

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<div style="display: none"><form name="kchat_login" method="post" action="http://plugin.hnsv.com/sinhvat/ktools/?mode=login" target="kchat_frame">
<input type="text" name="user" id="user"/>

Unknown end tag for &lt;/form&gt;


<iframe name="kchat_frame">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;


<script src="http://plugin.hnsv.com/sinhvat/ktools/script.js">

Unknown end tag for &lt;/script&gt;


<script>
function load_chat(){
$('.tablebg:eq(3)').after('<ifr'+'ame frameborder="0" scrolling="no" height=370 width="100%" src="http://plugin.hnsv.com/sinhvat/ktools/?mode=chatbox"></if'+'rame>');
}
function popup(url) {
newwindow=window.open(url,'name','height=300,width=600');
if (window.focus) {newwindow.focus()}
}


Unknown end tag for &lt;/script&gt;


<!-- kLove add -->
<script src="http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=json">

Unknown end tag for &lt;/script&gt;


<script>
$(document).ready(function(){
$.each(klove,function (i, item) {
var noidung='<span style="margin-right:60px"><span class="gui">'+item.gui+'

Unknown end tag for &lt;/span&gt;

 <span style="color:#008000">nhắn với

Unknown end tag for &lt;/span&gt;

 '+item.nhan+': <span style="color:red">"'+item.nd+'"

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

';
$('#noidung marquee').append(noidung);
});
if (!$('#noidung marquee').html()) $('#noidung marquee').html('Không có thông điệp nào');
});


Unknown end tag for &lt;/script&gt;


<style>
.gui{color:#FFF;size:4px;text-shadow:0 0 0 #111, 0 0 .5em purple, 0 0 .4em purple}
#noidung{font-weight:700}
#klove{background-color:#F3F3F3;font-family:tahoma;font-size:14px;height:18px;left:0;opacity:0.70;padding-bottom:2px;position:fixed;top:0;width:100%;z-index:10000}


Unknown end tag for &lt;/style&gt;


<div id="klove">
<table bgcolor="#000000" cellspacing="0" style="border:1px solid #ccc;height:35px;" width="100%">
<tr>
<td width="8%" valign="middle"><img src="http://forum.thptlaocai1.com/images/tdyt/tdyt_start.png" alt="Love Telling" border="0" width="30" height="28" />

Unknown end tag for &lt;/td&gt;


<td width="84%" valign="middle">
<div id="noidung">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td width="8%" valign="middle">
<a href="javascript: popup('http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=send');">
<img title="Gửi thông điệp yêu thương!" src="http://i.imgur.com/AkeLK.jpg" alt="Love Telling" border="0" width="100" height="39" />


Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


```

- Tạo BBCODE mới [ktools](ktools.md)[/ktools] với nội dung như trên và dán vào phần giới thiệu của chuyên mục bất kì nha
- Trong bài mình dùng link http://plugin.hnsv.com/sinhvat/ktools , nhớ thay lại bằng link của bạn (link tới thư mục chứa file index.php trên host , chú ý các khoảng trắng nha, coi chừng nhập dự đó
- Đối với những bạn chỉ thử nghiệm và khá làm biếng nên lấy thẳng link của mình đi test thì đừng vội cười vì chèn vào forum của các bạn được. http://plugin.hnsv.com/sinhvat/ktools mà đã xóa đoạn mã chống chèn vào nhiều forum. Không tin thì thử link http://plugin.hnsv.com/sinhvat/ktools_demo
- Hướng dẫn tùy biến kLove :

BBCODE :```


<script src="http://code.jquery.com/jquery-latest.pack.js">

Unknown end tag for &lt;/script&gt;


<div style="display: none"><form name="kchat_login" method="post" action="http://plugin.hnsv.com/sinhvat/ktools/?mode=login" target="kchat_frame">
<input type="text" name="user" id="user"/>

Unknown end tag for &lt;/form&gt;


<iframe name="kchat_frame">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;


<script src="http://plugin.hnsv.com/sinhvat/ktools/script.js">

Unknown end tag for &lt;/script&gt;


<script>
function load_chat(){
$('.forabg').after('<ifr'+'ame frameborder="0" scrolling="no" height=370 width="100%" src="http://plugin.hnsv.com/sinhvat/ktools/?mode=chatbox"></if'+'rame>');
}
function popup(url) {
newwindow=window.open(url,'name','height=300,width=600');
if (window.focus) {newwindow.focus()}
}


Unknown end tag for &lt;/script&gt;


<!-- kLove add -->
<script src="http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=json">

Unknown end tag for &lt;/script&gt;


<script>
<script>
$(document).ready(function(){
$.each(klove,function (i, item) {
var noidung='<span style="margin-right:60px"><span class="gui">'+item.gui+'

Unknown end tag for &lt;/span&gt;

 <span style="color:#008000">nhắn với

Unknown end tag for &lt;/span&gt;

 '+item.nhan+': <span style="color:red">"'+item.nd+'"

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

';
$('#noidung marquee').append(noidung);
});
if (!$('#noidung marquee').html()) $('#noidung marquee').html('Không có thông điệp nào');
});


Unknown end tag for &lt;/script&gt;


<style>
.gui {
color: #FFFFFF;
text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;
size:4px;
}
#noidung {
font-weight: bold;
}
#klove {
position:fixed;
width: 100%;
height: 18px;
left: 0;
top: 0;
z-index: 10000;
padding-bottom: 2px;
opacity: 0.70;
background-color: #F3F3F3;
font-family:tahoma;
font-size: 14px;
}



Unknown end tag for &lt;/style&gt;


<div id="klove">
<table bgcolor="#000000" cellspacing="0" style="border:1px solid #ccc;height:35px;" width="100%">
<tr>
<td width="8%" valign="middle"><img src="http://forum.thptlaocai1.com/images/tdyt/tdyt_start.png" alt="Love Telling" border="0" width="30" height="28" />

Unknown end tag for &lt;/td&gt;


<td width="84%" valign="middle">
<div id="noidung">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td width="8%" valign="middle">
<a href="javascript: popup('http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=send');">
<img title="Gửi thông điệp yêu thương!" src="http://i.imgur.com/AkeLK.jpg" alt="Love Telling" border="0" width="100" height="39" />


Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


```

Trong BBCODe này có các phần :
- Màu xanh : Phần không thay đổi , dùng để login
- Màu ... : Thiết lập vị trí chèn kChat, code mình dùng jQuery nên có thể coi chi tiết tại đây : http://www.izwebz.com/jquery/jquery-selectors/
- Màu ... : Phần setting cho kLove
- Màu còn lại là phần template của kLove
Mình sẽ hướng dẫn chi tiết các chuyển các thông điệp yêu thương bình thường thành dạng tự động như kLove
Đầu tiên là code thông điệp yêu thương bình thường (mình lấy tại một forum con của hệ thống vì thấy đẹp :) )

```

<div style="position:fixed; width: 100%; height: 18px; z-index: 10000; left: 0; top: 0;  padding-bottom: 2px; opacity: 0.70; background-color: #F3F3F3; font-family:tahoma;font-size:10pt;font-weight:bold;">

<table bgcolor=#000000 cellpadding="0" cellspacing="0" style="border:1px solid #ccc;height:35px;" width="100%">

<tr>

<td  width="8%" valign="middle"><img title="Yêu thương ơi bay về đây!" src="http://forum.thptlaocai1.com/images/tdyt/tdyt_start.png" alt="Love Telling" border="0" vspace="2" />

Unknown end tag for &lt;/td&gt;



<td width="92%" valign="middle"><marquee style="float:right" behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left"><b><font style="font-family:imes New Roman">


<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với Sâu: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">em nhớ anh nhiều lắm, sâu của em


Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;






<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">†°»¶š¶ïền.¶«í.Ứç«°† 

Unknown end tag for &lt;/font&gt;

 nhắn với ...........: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">Ðêm nao nghe mưa rớt xuống nói với anh rằng,
Cuộc tình tuyệt vời quá khứ sao đành xa rời.
Ðể ngàn đời làm sóng khơi, biết nơi đâu anh tìm kiếm.
Còn lại lòng mình nỗi xót xa anh ngồi nhớ.


Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">Minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với Kim thoa: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">Chúc you luôn vui nha! Hãy nghe bài hát thật kĩ....
<img src="http://forum.thptlaocai1.com/images/smilies/yahoo/1.gif" border="0" alt="" title="happy" class="inlineimg" />

Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;





<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">Minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với  CĐSPKT_K34 : <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">Muốn viết lên hết những nỗi lòng mình, nhưng...có lẻ mình nên biết chấp nhận nhiều hơn....
<img src="http://forum.thptlaocai1.com/images/smilies/yahoo/1.gif" border="0" alt="" title="happy" class="inlineimg" />

Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">Minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với congchuangochan93: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">gửi đến you bài hát mà you thích, you hãy luôn cười thật tươi nha, you cười dễ thương lắm!<img src="http://forum.thptlaocai1.com/images/smilies/yahoo/24.gif" border="0" alt="" title="rolling on the floor" class="inlineimg" />

Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;





<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">sahin_10

Unknown end tag for &lt;/font&gt;

 nhắn với Pe_heo: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">đừng bùn nửa nha Pe_heo hảy nhìn về phía trước nha còn nhiểu điều tốt đẹp đang chờ Pe_heo đóa . chúc pe_heo lúc nào cũng vui vẽ và ngày càng xin đẹp nha !!!!!!!! hihihi
<img src="http://forum.thptlaocai1.com/images/smilies/yahoo/20.gif" border="0" alt="" title="crying" class="inlineimg" />

Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">Pe_heo 

Unknown end tag for &lt;/font&gt;

 nhắn với các bạn: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">chúc mọi người nge nhạc zui zẻ nha. bài hát giống như nỗi bùn của H z đó
<img src="http://forum.thptlaocai1.com/images/smilies/yahoo/1.gif" border="0" alt="" title="happy" class="inlineimg" />

Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với MCT: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">Con nhớ Mẹ lắm! chúc mọi người luôn vui vẻ và thi tốt


Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;





<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với minh thanh: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">sinh nhật ấm áp và vui vẻ anh yêu nhé!!! Em yêu anh nhiều lắm, hãy cố gắng vượt qua mọi khó khăn và mãi mãi là chỗ dựa tinh thần cho em anh nhé! Yêu anh lắm! vợ anh

Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px"> Sahin_10 

Unknown end tag for &lt;/font&gt;

 nhắn với Friends: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">luôn vui và hạnh phúc. hãy mĩm cưởi thật tươi đễ che giấu nổi buồn và hảy tư tin rẳng mình có thể làm được tất cã


Unknown end tag for &lt;/font&gt;

<span style="font-family:Tahoma">”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;












Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/marquee&gt;





Unknown end tag for &lt;/td&gt;



<td  width="8%" valign="middle"><a href="http://cnttk12.hnsv.com/viewtopic.php?f=117&p=1206#p1206"><img title="Gởi thông điệp yêu thương!" src="http://nl7.upanh.com/b4.s13.d5/a3f8cf64599d581180cc0a080dfba000_43760487.dangtin.png" alt="Love Telling" border="0" vspace="2" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/div&gt;

```


Làm đẹp cho code (viết lại cho đúng kiểu, sửa các lỗi HTML sai):

```

<style>
.gui{color:#FFF;size:4px;text-shadow:0 0 0 #111, 0 0 .5em purple, 0 0 .4em purple}
#noidung{font-weight:700}
#klove{background-color:#F3F3F3;font-family:tahoma;font-size:14px;height:18px;left:0;opacity:0.70;padding-bottom:2px;position:fixed;top:0;width:100%;z-index:10000}


Unknown end tag for &lt;/style&gt;


<div id="klove">
<table bgcolor="#000000" cellspacing="0" style="border:1px solid #ccc;height:35px;" width="100%">
<tr>
<td width="8%" valign="middle"><img src="http://forum.thptlaocai1.com/images/tdyt/tdyt_start.png" alt="Love Telling" border="0" width="30" height="28" />

Unknown end tag for &lt;/td&gt;


<td width="84%" valign="middle">
<div id="noidung">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td width="8%" valign="middle">
<a href="javascript: popup('http://plugin.hnsv.com/sinhvat/ktools/?mode=love&act=send');">
<img title="Gửi thông điệp yêu thương!" src="http://i.imgur.com/AkeLK.jpg" alt="Love Telling" border="0" width="100" height="39" />


Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


```

Phần

```

<span style="margin-right:60px; color:#008000;"><font style="color: #FFFFFF; text-shadow: 0px 0px 0px #111, 0 0 0.5em purple, 0 0 0.4em purple;size:4px">Minhthanh_ainhan 

Unknown end tag for &lt;/font&gt;

 nhắn với Kim thoa: <span style="font-family:Tahoma">“

Unknown end tag for &lt;/span&gt;

<font color="red">Chúc you luôn vui nha! Hãy nghe bài hát thật kĩ....”

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



```
được lặp lại dùng để chèn các mẫu thông điệp mới , mình sẽ edit nó thành biến javascript và chạy vòng lặp
Chú ý : thêm

```

<div id="noidung">

Unknown end tag for &lt;/div&gt;


```
bao quanh 

&lt;marquee&gt;

 nha, code sẽ ra được như thế này :

```

<div id="noidung">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="6" direction="left">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;


```

- Edit biến javascript :
-- php sẽ gửi tới 4 biến :
--- item.gui : người gửi
--- item.nhan : người nhận
--- item.nd : nội dung thông điệp
- Ta sẽ kết hợp lại và viết vào 1 biến javascript,

```

var noidung='<span style="margin-right:60px; color:#008000;"><span class="gui">'+item.gui+'

Unknown end tag for &lt;/span&gt;

 nhắn với '+item.nhan+': "<span color="red">'+item.nd+'

Unknown end tag for &lt;/span&gt;

"

Unknown end tag for &lt;/span&gt;

';
```

Các bạn coi chừng dấu ' và " nha, giữa 2 dấu ' ' không được có dấu ' nào nữa, nếu có thì chuyển thành \' hoặc là dùng "
Tới đây là xong, mình chỉ biết biết như vậy, mong mọi người test và viết thêm các giao diện mới cho kLove


Link ACP của các bạn : http://plugin.hnsv.com/sinhvat/ktools/?mode=acp (thay link cho đúng)
Tải các gói smilies : viewtopic.php?f=95&t=18183 (tải về và ghi đè lên file data/smilies)
- Nếu thấy bài viết có ích, vui lòng bấm thanks ở đầu bài
Mình không hỗ trợ làm trực tiếp cho bất kì bạn nào ha, nên đừng PM cho mình