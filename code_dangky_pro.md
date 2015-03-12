```
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">//<![CDATA[
$(document).ready(function(){});//]]>

Unknown end tag for &lt;/script&gt;


<style type="text/css">
/* code dang nhap dang ki */
/* panel Tab/button */

.tab {
background: url(http://i.imgur.com/fDQkE.png) repeat-x 0 0;
height: 22px;
position: relative;
top: 0;
z-index: 999;
}




.tab ul.login {
display: block;
position: relative;
float: right;
clear: right;
height: 42px;
width: auto;
font-weight: bold;
line-height: 42px;
margin: 0;
right: 150px;
color: white;
font-size: 80%;
text-align: center;
}

.tab ul.login li.left {
background: url(http://i.imgur.com/XwNu2.png) no-repeat left 0;
height: 42px;
width: 30px;
padding: 0;
margin: 0;
display: block;
float: left;
}

.tab ul.login li.right {
background: url(http://i.imgur.com/QmQzs.png) no-repeat left 0;
height: 42px;
width: 30px;
padding: 0;
margin: 0;
display: block;
float: left;
}

.tab ul.login li {
text-align: left;
padding: 0 6px;
display: block;
float: left;
height: 42px;
background: url(http://i.imgur.com/PAFBM.png) repeat-x 0 0;
}

.tab ul.login li a {
color: #15ADFF;
}

.tab ul.login li a:hover {
color: white;
}

.tab .sep {color:#414141}

.tab a.open, .tab a.close {
height: 20px;
line-height: 20px !important;
padding-left: 30px !important;
cursor: pointer;
display: block;
width: 100px;
position: relative;
top: 11px;
width: 120px;
}

.tab a.open {background: url(http://i.imgur.com/NWFec.png) no-repeat left 0;}
.tab a.close {background: url(http://i.imgur.com/GGiBD.png) no-repeat left 0;}
.tab a:hover.open {background: url(http://i.imgur.com/mboPc.png) no-repeat left -19px;}
.tab a:hover.close {background: url(http://i.imgur.com/xztqF.png) no-repeat left -19px;}
/* sliding panel */
#toppanel1 {
position: absolute;  /*panel will overlap  content */
/*position: relative;*/  /*panel will "push" the content down */
top: 0;
width: 100%;
z-index: 999;
text-align: center;
margin-left: auto;
margin-right: auto;
}

#panel {
width: 100%;
height: 1000px;
color: #999999;
background: #272727;
overflow: hidden;
position: relative;
z-index: 3;
display: none;
}

#panel h1 {
font-size: 1.6em;
padding: 5px 0 10px;
margin: 0;
color: white;
}

#panel h2{
font-size: 1.2em;
padding: 10px 0 5px;
margin: 0;
color: white;
}

#panel p {
margin: 5px 0;
padding: 0;
}

#panel a {
text-decoration: none;
color: #15ADFF;
}

#panel a:hover {
color: white;
}

#panel a-lost-pwd {
display: block;
float: left;
}
#panel .content {
width: 960px;
height: 500px;
margin: 0 auto;
padding-top: 15px;
text-align: left;
font-size: 0.85em;
}

#panel .content .left {
width: 280px;
float: left;
padding: 0 15px;
border-left: 1px solid #333;
}

#panel .content .right {
border-right: 1px solid #333;
}

#panel .content form {
margin: 0 0 10px 0;
}

#panel .content label {
float: left;
padding-top: 2px;
clear: both;
width: 280px;
display: block;
}

#panel .content input.field {
border: 1px #1A1A1A solid;
background: #414141;
margin-right: 5px;
margin-top: 4px;
width: 200px;
color: white;
height: 16px;
}

#panel .content input:focus.field {
background: #545454;
}

/* BUTTONS */
/* Login and Register buttons */
#panel .content input.bt_login,
#panel .content input.bt_register {
display: block;
float: left;
clear: left;
height: 24px;
text-align: center;
cursor: pointer;
border: none;
font-weight: bold;
margin: 10px 0;
}

#panel .content input.bt_login {
width: 74px;
background: transparent url(http://i.imgur.com/6E0rz.png) no-repeat 0 0;
}

#panel .content input.bt_register {
width: 94px;
color: white;
background: transparent url(http://i.imgur.com/sxtfY.png) no-repeat 0 0;
}

#panel .lost-pwd {
display: block;
float:left;
clear: right;
padding: 15px 5px 0;
font-size: 0.95em;
text-decoration: underline;
}


#rep-mail-bar {
font-size: 11px;
height: 25px;
left: 0;
position: fixed;
top: 0;
width: 100%;
z-index: 999;
}
.post {
padding: 1px;
width: 80%;
background-color: #fff;
border-style: solid;
border-width: 1px;
border-color: #bfbfbf;
height: 20px;
color: black;
font-size: 1.2em;
-moz-box-shadow: 0 2px 8px #b3b3b3;
-webkit-box-shadow: 0 4px 8px #b3b3b3;
-moz-border-radius: 6px;
-webkit-border-radius:6px;
-moz-transition: all .5s ease-in-out;
-webkit-transition: all .5s ease-in-out;
}

.btnmain {
font-weight: bold;
font-size: 1.2em;
background-color: white;
border: 1px solid gray;

cursor: pointer;
padding: 6px 5px;

-moz-box-shadow: 0 2px 8px #b3b3b3;
-webkit-box-shadow: 0 4px 8px #b3b3b3;
-moz-border-radius: 6px;
-webkit-border-radius:6px;
-moz-transition: all .5s ease-in-out;
-webkit-transition: all .5s ease-in-out;

color: #ff0040;

}
.btnmain:hover
{moz-transform: scale(1.2) rotate(0deg);
-webkit-transform: scale(1.2) rotate(0deg);
position: relative;}
.genmed .gensmall {
font-variant: small-caps;
text-transform: capitalize;
font-family: Tahoma, Helvetica, Arial, sans-serif;
font-size: 12px;
margin: 0;
padding: 0;
color: #828282;
font-weight: normal;
}



Unknown end tag for &lt;/style&gt;


<script type="text/javascript" src="http://www.hotrofm.com/23827.js">

Unknown end tag for &lt;/script&gt;


<div id="rep-mail-bar">
<div id="toppanel1">
<div style="display: none; " id="panel">
<div class="content clearfix">
<div class="left"><h1>Welcome to LoveStory

Unknown end tag for &lt;/h1&gt;


<h2>Cám ơn bạn đã truy cập diễn đàn !

Unknown end tag for &lt;/h2&gt;


<p class="grey">Diễn đàn truyện - radio - blog <br>Hãy  tham gia ngay Cùng chúng tôi nhé !

Unknown end tag for &lt;/p&gt;


<h2>Lưu ý:

Unknown end tag for &lt;/h2&gt;


<p class="grey">diễn đàn Hiển thị tốt nhất trên <a title="Download Google Chrome" href="https://www.google.com/chrome/index.html?hl=vi&amp;brand=CHMA&amp;utm_campaign=vi&amp;utm_source=vi-ha-apac-vi-bk&amp;utm_medium=ha&amp;installdataindex=homepagepromo">Google Chrome

Unknown end tag for &lt;/a&gt;

 và<a title="Download FireFox" href="http://www.mozilla.org/vi/firefox/new/">  FireFox

Unknown end tag for &lt;/a&gt;


•<br><br><br>

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;


<div class="left">
<form action=" http://lovestory.eazy.vn/ucp.php?mode=login " method="post">
<h1 class="padlock">Đăng nhập

Unknown end tag for &lt;/h1&gt;


<span class="genmed">Tên thành viên:

Unknown end tag for &lt;/span&gt;

 <br><br>
<input type="text" size="10" name="username" class="post"><br><br>
<span class="genmed">Mật khẩu:

Unknown end tag for &lt;/span&gt;

 <br><br>
<input type="password" size="10" name="password" class="post"><br><br>
<span class="gensmall">Đăng nhập tự động mỗi lần ghé thăm

Unknown end tag for &lt;/span&gt;

<br><br>
<input type="checkbox" name="autologin" class="radio">
<br> <input type="submit" value="Đăng nhập" name="login" class="btnmain" checked="checked">


Unknown end tag for &lt;/form&gt;



<script type="text/javascript">//&lt;![CDATA[
$(function(){$('#login-vds').attr('action','/login?redirect='+this.location.pathname);});//]]&gt;

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;


<div class="left right">
<h1>Đăng ký nhanh !

Unknown end tag for &lt;/h1&gt;


<form action=" http://lovestory.eazy.vn/ucp.php?mode=register " method="post" name="register">

<b class="genmed">Tên thành viên: 

Unknown end tag for &lt;/b&gt;

<br><br>
<input type="text" value="" size="25" name="username" class="post"><br><br>
<b class="genmed">Địa chỉ Email: 

Unknown end tag for &lt;/b&gt;

<br><br>
<input type="text" value="" maxlength="100" size="25" name="email" class="post"><br><br>
<b class="genmed">Mật khẩu: 

Unknown end tag for &lt;/b&gt;

<br><br>
<input type="password" value="" size="25" name="new_password" class="post"><br><br>
<input type="hidden" value="0" name="change_lang">
<input type="hidden" value="2b03441a5b03b5abf697141a8ef1be54" name="confirm_id">
<input type="submit" value="Chấp nhận" id="submit" name="submit" class="btnmain">
<input type="reset" name="reset" value="Làm lại" class="btnmain">
<input type="hidden" value="1339287617" name="creation_time">
<input type="hidden" value="4e000d232cdd59c5b7e8731c9bc3cfb3f1ace04e" name="form_token">


Unknown end tag for &lt;/form&gt;





Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<!--
/login --><!--
The tab on top --><div class="tab"><ul class="login"><li class="left"> 

Unknown end tag for &lt;/li&gt;

<li>Chào bạn !

Unknown end tag for &lt;/li&gt;

<li class="sep">|

Unknown end tag for &lt;/li&gt;

<li id="toggle"><a style="display: block;" href="#" class="open" id="open">Đăng nhập | Đăng ký

Unknown end tag for &lt;/a&gt;

<a href="#" class="close" style="display: none; " id="close">Close | Đóng lại

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li class="right"> 

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

 

Unknown end tag for &lt;/div&gt;

```