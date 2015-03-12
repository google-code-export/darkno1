Bản quyền:
Queryloader version 2.1 - Gaya Kessler (11-1-2011) http://www.gayadesign.com
Mousewheel version 3.0.6 - Brandon Aaron (2011) http://brandonaaron.net
FancyBox version 2.1.3 Fancyapps http://fancyapps.com/fancybox/
Buttons helper for fancyBox version 1.0.5 (15-10-2012)
Youtube api version 3 - Youtube (19-7-2012) https://developers.google.com/youtube/
Mod & Style by baivong - fmvi (2012) http://www.fmvi.vn

Chức năng:
Hiện tiến trình tải trang bằng queryloader2.
Nhóm các ảnh và link ảnh cùng bài viết vào một slideshow. Thông tin ảnh: Thứ tự ảnh / Tổng ảnh trong bài. Hỗ trợ chế độ xem toàn màn hình cho trình duyệt Firefox, các phiên bản của Firefox và các trình duyệt sử dụng chuẩn webkit (Chrome, Safari).
BBcode youtube, hỗ trợ youtube video playlist. Nhóm các video youtube trong cùng bài viết vào một playlist (kể cả youtube video playlist). Không hỗ trợ video youtube đăng bằng BBcode khác.
Demo:
```

http://i12.servimg.com/u/f12/17/70/81/78/12-28-10.png
http://i15.servimg.com/u/f15/16/58/89/73/1-11-210.jpg
http://i12.servimg.com/u/f12/17/70/81/78/12-29-11.jpg
Xem ảnh: http://design.eazy.vn/viewtopic.php?f=78&t=109
Youtube: http://design.eazy.vn/viewtopic.php?f=78&t=110
```
Hướng dẫn:

Bước 1: Thêm vào cuối CSS:
ACP >> Giao điện >> Kiểu dáng >> Sửa:

```

/* Ứng dụng facybox2 cho Eazy - Chipteam */
.fancybox-wrap,.fancybox-skin,.fancybox-outer,.fancybox-inner,.fancybox-image,.fancybox-wrap iframe,.fancybox-wrap object,.fancybox-nav,.fancybox-nav span,.fancybox-tmp{border:0;outline:none;vertical-align:top;margin:0;padding:0}
.fancybox-wrap{position:absolute;top:0;left:0;z-index:8020}
.fancybox-skin{position:relative;background:#f9f9f9;color:#444;text-shadow:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}
.fancybox-opened{z-index:8030}
.fancybox-opened .fancybox-skin{-webkit-box-shadow:0 10px 25px rgba(0,0,0,0.5);-moz-box-shadow:0 10px 25px rgba(0,0,0,0.5);box-shadow:0 10px 25px rgba(0,0,0,0.5)}
.fancybox-outer,.fancybox-inner{position:relative}
.fancybox-type-iframe .fancybox-inner{-webkit-overflow-scrolling:touch}
.fancybox-error{color:#444;font:14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;white-space:nowrap;margin:0;padding:15px}
.fancybox-image,.fancybox-iframe{display:block;width:100%;height:100%}
.fancybox-image{max-width:100%;max-height:100%}
#fancybox-loading,.fancybox-close,.fancybox-prev span,.fancybox-next span{background-image:url(http://i12.servimg.com/u/f12/17/70/81/78/fancyb11.png)}
#fancybox-loading{position:fixed;top:50%;left:50%;margin-top:-22px;margin-left:-22px;background-position:0 -108px;opacity:0.8;cursor:pointer;z-index:8060}
#fancybox-loading div{width:44px;height:44px;background:url(http://i12.servimg.com/u/f12/17/70/81/78/fancyb10.gif) center center no-repeat}
.fancybox-close{position:absolute;top:-18px;right:-18px;width:36px;height:36px;cursor:pointer;z-index:8040}
.fancybox-nav{position:absolute;top:0;width:50%;height:100%;cursor:pointer;text-decoration:none;background:transparent url(http://i12.servimg.com/u/f12/17/70/81/78/blank10.gif);-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:8040}
.fancybox-prev{left:0}
.fancybox-next{right:0}
.fancybox-nav span{position:absolute;top:50%;width:36px;height:34px;margin-top:-18px;cursor:pointer;z-index: 999;visibility:hidden}
.fancybox-prev span{left:10px;background-position:0 -36px}
.fancybox-next span{right:10px;background-position:0 -72px}
.fancybox-tmp{position:absolute;top:-99999px;left:-99999px;visibility:hidden;max-width:99999px;max-height:99999px;overflow:visible!important}
.fancybox-overlay{position:absolute;top:0;left:0;overflow:hidden;display:none;z-index: 999;background:url(http://i12.servimg.com/u/f12/17/70/81/78/fancyb12.png)}
.fancybox-overlay-fixed{position:fixed;bottom:0;right:0}
.fancybox-lock .fancybox-overlay{overflow:auto;}
.fancybox-title{display:none;visibility:hidden;font:normal 13px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;position:relative;text-shadow:none;z-index:8050}
.fancybox-title-float-wrap{position:absolute;bottom:0;right:50%;margin-bottom:-35px;z-index: 999;text-align:center}
.fancybox-title-float-wrap .child{display:inline-block;margin-right:-100%;background:rgba(0,0,0,0.8);-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;text-shadow:0 1px 2px #222;color:#FFF;font-weight:700;line-height:24px;white-space:nowrap;padding:2px 20px}
.fancybox-title-outside-wrap{position:relative;margin-top:10px;color:#fff}
.fancybox-title-inside-wrap{padding-top:10px}
.fancybox-title-over-wrap{position:absolute;bottom:0;left:0;color:#fff;background:rgba(0,0,0,.8);padding:10px}
.fancybox-inner,.fancybox-lock{overflow:hidden}
.fancybox-nav:hover span,.fancybox-opened .fancybox-title{visibility:visible}
.fancybox-wrap:hover .fancybox-title{display:block}
#fancybox-buttons{position:fixed;left:0;width:100%;z-index:999}
#fancybox-buttons.top{top:10px}
#fancybox-buttons.bottom{bottom:10px}
#fancybox-buttons ul{background-color:#292626;border:1px solid #111;border-radius:3px 3px 3px 3px;box-shadow:0 0 0 1px rgba(255,255,255,0.05) inset;display:block;height:30px;left:50%;list-style:none outside none;margin-left:-93px;position:absolute;padding:3px 0}
#fancybox-buttons ul li{float:left;margin:0;padding:0}
#fancybox-buttons a{display:block;width:30px;height:30px;text-indent:-9999px;background-image:url(http://i12.servimg.com/u/f12/17/70/81/78/fancyb10.png);background-repeat:no-repeat;outline:none;opacity:0.8}
#fancybox-buttons a:hover{opacity:1}
#fancybox-buttons a.btnPrev{background-position:5px 0}
#fancybox-buttons a.btnNext{background-position:-33px 0;border-right:1px solid #3e3e3e}
#fancybox-buttons a.btnPlay{background-position:0 -30px}
#fancybox-buttons a.btnPlayOn{background-position:-30px -30px}
#fancybox-buttons a.btnToggle{background-position:3px -60px;border-left:1px solid #111;border-right:1px solid #3e3e3e;width:35px}
#fancybox-buttons a.btnToggleOn{background-position:-27px -60px}
#fancybox-buttons a.btnClose{border-right:1px solid #3E3E3E;border-left:1px solid #111;width:35px;background-position:-56px 0}
#fancybox-buttons a.btnDisabled{opacity:0.4;cursor:default}
.fancy-ytb{position:relative;text-align:center;height:260px}
.fancy-ytb img{width:450px}
#fancybox-buttons.bottom ul{margin-top:-30px}
.fancy-ytb span{display:block;height:50px;width:50px;background:url(http://i12.servimg.com/u/f12/17/70/81/78/icon_c10.png) no-repeat scroll center center transparent;position:absolute;top:0;left:50%;margin-left:-220px}
.iconPlayer{background:url(http://i12.servimg.com/u/f12/17/70/81/78/play-o10.png) no-repeat scroll center center transparent;display:block;height:80px;left:50%;margin-left:-40px;margin-top:-40px;position:absolute;top:50%;width:80px;z-index:99}
:full-screen .fancybox-overlay{background-image:none;background-color:#000}
:-moz-full-screen .fancybox-overlay{background-image:none;background-color:#000}
:-webkit-full-screen .fancybox-overlay{background-image:none;background-color:#000}
:-o-full-screen .fancybox-overlay{background-image:none;background-color:#000}
:-ms-full-screen .fancybox-overlay{background-image:none;background-color:#000}
:full-screen .btnClose{display:none!important}
:-moz-full-screen .btnClose{display:none!important}
:-webkit-full-screen .btnClose{display:none!important}
:-o-full-full-screen .btnClose{display:none!important}
:-ms-full-screen .btnClose{display:none!important}
.btnFullscreen{background:url(http://i15.servimg.com/u/f15/16/58/89/73/fullsc15.png) no-repeat scroll center center transparent!important;border-left:1px solid #111;width:35px!important}
:full-screen .btnFullscreen{background-image:url(http://i15.servimg.com/u/f15/16/58/89/73/fullsc16.png)!important}
:-moz-full-screen .btnFullscreen{background-image:url(http://i15.servimg.com/u/f15/16/58/89/73/fullsc16.png)!important}
:-webkit-full-screen .btnFullscreen{background-image:url(http://i15.servimg.com/u/f15/16/58/89/73/fullsc16.png)!important}
:-o-full-screen .btnFullscreen{background-image:url(http://i15.servimg.com/u/f15/16/58/89/73/fullsc16.png)!important}
:-ms-full-screen .btnFullscreen{background-image:url(http://i15.servimg.com/u/f15/16/58/89/73/fullsc16.png)!important}
#qLoverlay{width:100%;position:fixed;z-index: 999;height:5px;left:0;bottom:0;background-color:#000}
#qLbar{overflow:hidden;height:3px;background-color:red;width:0;min-width:0;margin:1px 0}
#qLtip{position:absolute;text-align:center;background:url("http://i15.servimg.com/u/f15/16/58/89/73/12-28-10.png") no-repeat scroll left top transparent;width:35px;height:32px;top:-32px;color:#fff;font-size:.8em;line-height:25px;margin-left:-17px;display:none;left:0}

<code>

Bước 2: Tạo BBcode javascript và BBcode youtube
ACP >> Gửi bài viết >> Tùy biến thẻ BBCode >> Tạo thẻ BBcode mới
BBcode Youtube: Nếu chưa có thì tạo mới, nếu đã có thì bạn sửa lại BBcode youtube như hướng dẫn dưới đây.
Cách sử dụng thẻ BBCode:

<code>
[youtube]{URL}[/youtube]

```
Mã HTML thay thế:

```

<p class="fancy-ytb"><a target="_blank" href="{URL}" class="iconPlayer fancybox.iframe">

Unknown end tag for &lt;/a&gt;

<img width="480" height="260" src="http://i3.ytimg.com/vi/Y7dpJ0oseIA/0.jpg" alt="youtube">

Unknown end tag for &lt;/p&gt;



```

Không check vào Hiện trên trang gửi bài
BBcode Javascript: Nếu trùng thì đặt lại tên BBcode khác
Cách sử dụng thẻ BBCode:

```

[javascript][/javascript]
```

Mã HTML thay thế:

```

<script type="text/javascript">
(function () {
var f = document.createElement("script");
f.type = "text/javascript";
f.async = true;
f.src = "http://dl.dropbox.com/u/126946313/Eazy/chipteam.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(f, s);
})();


Unknown end tag for &lt;/script&gt;


```

Không check vào Hiện trên trang gửi bài
Trong code trên có file http://dl.dropbox.com/u/126946313/Eazy/chipteam.js file này mình có thể xóa bất kỳ lúc nào, bạn nên download file đính kèm dưới đây để sử dụng, tốt nhất là dùng dropbox để tiện sửa chữa, hoặc các dịch vụ khác như google code.

```

var CopyrightNoticeEn = 'Copyright ©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong (webmaster@fmvi.vn). This entire copyright notice must remain in the original, copied, or modified script';
var CopyrightNoticeVi = 'Bản quyền © FmVi. Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ baivong (webmaster@fmvi.vn) là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi';

(function (d) {
function e(a) {
var b = a || window.event,
c = [].slice.call(arguments, 1),
f = 0,
e = 0,
g = 0,
a = d.event.fix(b);
a.type = "mousewheel";
b.wheelDelta && (f = b.wheelDelta / 120);
b.detail && (f = -b.detail / 3);
g = f;
b.axis !== void 0 && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f);
b.wheelDeltaY !== void 0 && (g = b.wheelDeltaY / 120);
b.wheelDeltaX !== void 0 && (e = -1 * b.wheelDeltaX / 120);
c.unshift(a, f, e, g);
return (d.event.dispatch || d.event.handle).apply(this, c)
}
var c = ["DOMMouseScroll", "mousewheel"];
if (d.event.fixHooks) for (var h = c.length; h;) d.event.fixHooks[c[--h]] = d.event.mouseHooks;
d.event.special.mousewheel = {
setup: function () {
if (this.addEventListener) for (var a = c.length; a;) this.addEventListener(c[--a], e, false);
else this.onmousewheel = e
},
teardown: function () {
if (this.removeEventListener) for (var a = c.length; a;) this.removeEventListener(c[--a], e, false);
else this.onmousewheel = null
}
};
d.fn.extend({
mousewheel: function (a) {
return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
},
unmousewheel: function (a) {
return this.unbind("mousewheel", a)
}
})
})(jQuery);

(function ($) {
if (!Array.prototype.indexOf) {
Array.prototype.indexOf = function (elt) {
var len = this.length >>> 0;
var from = Number(arguments[1]) || 0;
from = (from < 0) ? Math.ceil(from) : Math.floor(from);
if (from < 0) from += len;
for (; from < len; from++) {
if (from in this && this[from] === elt) return from
}
return -1
}
}
var qLimages = new Array;
var qLdone = 0;
var qLdestroyed = false;
var qLimageContainer = "";
var qLoverlay = "";
var qLbar = "";
var qLimageCounter = 0;
var qLstart = 0;
var qLoptions = {
onComplete: function () {},
percentage: true,
deepSearch: true,
minimumTime: 500,
onLoadComplete: function () {
$(qLoverlay).fadeOut(500, function () {
$("img").error(function () {
$(this).replaceWith('<img src="http://i48.servimg.com/u/f48/16/58/89/73/error_10.jpg" alt="fmvi.vn" />')
});
$(qLoverlay).remove();
qLoptions.onComplete()
})
}
};
var afterEach = function () {
var currentTime = new Date();
qLstart = currentTime.getTime();
createPreloadContainer();
createOverlayLoader()
};
var createPreloadContainer = function () {
for (var i = 0; qLimages.length > i; i++) {
if (!qLdestroyed) {
qLimageCounter++;
addImageForPreload(qLimages[i])
}
}
};
var addImageForPreload = function (url) {
var image = $("<img />").attr("src", url).error(function () {
$(this).attr("src", "http://i48.servimg.com/u/f48/16/58/89/73/logofm12.png")
}).bind("load", function () {
completeImageLoading()
}).appendTo(qLimageContainer)
};
var completeImageLoading = function () {
qLdone++;
var percentage = (qLdone / qLimageCounter) * 100;
$(qLbar).stop().animate({
width: percentage + "%",
minWidth: percentage + "%"
}, 200);
if (qLoptions.percentage == true) {
$("#qLtip").text(Math.round(percentage) + "%");
$("#qLtip").stop().animate({
left: percentage + "%"
}, 200)
}
if (qLdone == qLimageCounter) {
destroyQueryLoader()
}
};
var destroyQueryLoader = function () {
$(qLimageContainer).remove();
qLoptions.onLoadComplete();
qLdestroyed = true
};
var createOverlayLoader = function () {
qLoverlay = $("#qLoverlay");
qLbar = $("#qLbar");
if (qLoptions.percentage == true) {
$("#qLtip").show()
}
};
var findImageInElement = function (element) {
var url = "";
if ($(element).css("background-image") != "none") {
var url = $(element).css("background-image")
} else if (typeof ($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
var url = $(element).attr("src")
}
if (url.indexOf("gradient") == -1) {
url = url.replace(/url\(\"/g, "");
url = url.replace(/url\(/g, "");
url = url.replace(/\"\)/g, "");
url = url.replace(/\)/g, "");
var urls = url.split(", ");
for (var i = 0; i < urls.length; i++) {
if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1) {
var extra = "";
if ($.browser.msie && $.browser.version < 9) {
extra = "?" + Math.floor(Math.random() * 3000)
}
qLimages.push(urls[i] + extra)
}
}
}
};
$.fn.queryLoader2 = function (options) {
if (options) {
$.extend(qLoptions, options)
}
this.each(function () {
findImageInElement(this);
if (qLoptions.deepSearch == true) {
$(this).find("*:not(script)").each(function () {
findImageInElement(this)
})
}
});
afterEach();
return this
}
})(jQuery);
(function (B, x, f, q) {
var r = f(B),
m = f(x),
b = f.fancybox = function () {
b.open.apply(this, arguments)
}, u = null,
n = x.createTouch !== q,
s = function (a) {
return a && a.hasOwnProperty && a instanceof f
}, p = function (a) {
return a && "string" === f.type(a)
}, E = function (a) {
return p(a) && 0 < a.indexOf("%")
}, k = function (a, d) {
var e = parseInt(a, 10) || 0;
d && E(a) && (e *= b.getViewport()[d] / 100);
return Math.ceil(e)
}, v = function (a, b) {
return k(a, b) + "px"
};
f.extend(b, {
version: "2.1.3",
defaults: {
padding: 15,
margin: 20,
width: 800,
height: 600,
minWidth: 100,
minHeight: 100,
maxWidth: 9999,
maxHeight: 9999,
autoSize: !0,
autoHeight: !1,
autoWidth: !1,
autoResize: !0,
autoCenter: !n,
fitToView: !0,
aspectRatio: !1,
topRatio: 0.5,
leftRatio: 0.5,
scrolling: "auto",
wrapCSS: "",
arrows: !0,
closeBtn: !0,
closeClick: !1,
nextClick: !1,
mouseWheel: !0,
autoPlay: !1,
playSpeed: 3E3,
preload: 3,
modal: !1,
loop: !0,
ajax: {
dataType: "html",
headers: {
"X-fancyBox": !0
}
},
iframe: {
scrolling: "auto",
preload: !0
},
swf: {
wmode: "transparent",
allowfullscreen: "true",
allowscriptaccess: "always"
},
keys: {
next: {
13: "left",
34: "up",
39: "left",
40: "up"
},
prev: {
8: "right",
33: "down",
37: "right",
38: "down"
},
close: [27],
play: [32],
toggle: [70]
},
direction: {
next: "left",
prev: "right"
},
scrollOutside: !0,
index: 0,
type: null,
href: null,
content: null,
title: null,
tpl: {
wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

',
image: '<img class="fancybox-image" src="{href}" alt="" />',
iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (f.browser.msie ? ' allowtransparency="true"' : "") + ">

Unknown end tag for &lt;/iframe&gt;

",
error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.

Unknown end tag for &lt;/p&gt;

',
closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">

Unknown end tag for &lt;/a&gt;

',
next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

',
prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

'
},
openEffect: "fade",
openSpeed: 250,
openEasing: "swing",
openOpacity: !0,
openMethod: "zoomIn",
closeEffect: "fade",
closeSpeed: 250,
closeEasing: "swing",
closeOpacity: !0,
closeMethod: "zoomOut",
nextEffect: "elastic",
nextSpeed: 250,
nextEasing: "swing",
nextMethod: "changeIn",
prevEffect: "elastic",
prevSpeed: 250,
prevEasing: "swing",
prevMethod: "changeOut",
helpers: {
overlay: !0,
title: !0
},
onCancel: f.noop,
beforeLoad: f.noop,
afterLoad: f.noop,
beforeShow: f.noop,
afterShow: f.noop,
beforeChange: f.noop,
beforeClose: f.noop,
afterClose: f.noop
},
group: {},
opts: {},
previous: null,
coming: null,
current: null,
isActive: !1,
isOpen: !1,
isOpened: !1,
wrap: null,
skin: null,
outer: null,
inner: null,
player: {
timer: null,
isActive: !1
},
ajaxLoad: null,
imgPreload: null,
transitions: {},
helpers: {},
open: function (a, d) {
if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = s(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
var j = {}, g, h, i, l, k;
"object" === f.type(c) && (c.nodeType && (c = f(c)), s(c) ? (j = {
href: c.data("fancybox-href") || c.attr("href"),
title: c.data("fancybox-title") || c.attr("title"),
isDom: !0,
element: c
}, f.metadata && f.extend(!0, j, c.metadata())) : j = c);
g = d.href || j.href || (p(c) ? c : null);
h = d.title !== q ? d.title : j.title || "";
l = (i = d.content || j.content) ? "html" : d.type || j.type;
!l && j.isDom && (l = c.data("fancybox-type"), l || (l = (l = c.prop("class").match(/fancybox\.(\w+)/)) ? l[1] : null));
p(g) && (l || (b.isImage(g) ? l = "image" : b.isSWF(g) ? l = "swf" : "#" === g.charAt(0) ? l = "inline" : p(c) && (l = "html", i = c)), "ajax" === l && (k = g.split(/\s+/, 2), g = k.shift(), k = k.shift()));
i || ("inline" === l ? g ? i = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : j.isDom && (i = c) : "html" === l ? i = g : !l && (!g && j.isDom) && (l = "inline", i = c));
f.extend(j, {
href: g,
type: l,
content: i,
title: h,
selector: k
});
a[e] = j
}), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== q && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
},
cancel: function () {
var a = b.coming;
a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
},
close: function (a) {
b.cancel();
!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
},
play: function (a) {
var d = function () {
clearTimeout(b.player.timer)
}, e = function () {
d();
b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
}, c = function () {
d();
f("body").unbind(".player");
b.player.isActive = !1;
b.trigger("onPlayEnd")
};
if (!0 === a || !b.player.isActive && !1 !== a) {
if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, f("body").bind({
"afterShow.player onUpdate.player": e,
"onCancel.player beforeClose.player": c,
"beforeLoad.player": d
}), e(), b.trigger("onPlayStart")
} else c()
},
next: function (a) {
var d = b.current;
d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
},
prev: function (a) {
var d = b.current;
d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
},
jumpto: function (a, d, e) {
var c = b.current;
c && (a = k(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== q && (b.cancel(), b._start(a)))
},
reposition: function (a, d) {
var e = b.current,
c = e ? e.wrap : null,
j;
c && (j = b._getPosition(d), a && "scroll" === a.type ? (delete j.position, c.stop(!0, !0).animate(j, 200)) : (c.css(j), e.pos = f.extend({}, e.dim, j)))
},
update: function (a) {
var d = a && a.type,
e = !d || "orientationchange" === d;
e && (clearTimeout(u), u = null);
b.isOpen && !u && (u = setTimeout(function () {
var c = b.current;
c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), u = null)
}, e && !n ? 0 : 300))
},
toggle: function (a) {
b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, n && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
},
hideLoading: function () {
m.unbind(".loading");
f("#fancybox-loading").remove()
},
showLoading: function () {
var a, d;
b.hideLoading();
a = f('<div id="fancybox-loading"><div>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').click(b.cancel).appendTo("body");
m.bind("keydown.loading", function (a) {
if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
});
b.defaults.fixed || (d = b.getViewport(), a.css({
position: "absolute",
top: 0.5 * d.h + d.y,
left: 0.5 * d.w + d.x
}))
},
getViewport: function () {
var a = b.current && b.current.locked || !1,
d = {
x: r.scrollLeft(),
y: r.scrollTop()
};
a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = n && B.innerWidth ? B.innerWidth : r.width(), d.h = n && B.innerHeight ? B.innerHeight : r.height());
return d
},
unbindEvents: function () {
b.wrap && s(b.wrap) && b.wrap.unbind(".fb");
m.unbind(".fb");
r.unbind(".fb")
},
bindEvents: function () {
var a = b.current,
d;
a && (r.bind("orientationchange.fb" + (n ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && m.bind("keydown.fb", function (e) {
var c = e.which || e.keyCode,
j = e.target || e.srcElement;
if (27 === c && b.coming) return !1;
!e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!j || !j.type && !f(j).is("[contenteditable]"))) && f.each(d, function (d, j) {
if (1 < a.group.length && j[c] !== q) return b[d](j[c]), e.preventDefault(), !1;
if (-1 < f.inArray(c, j)) return b[d](), e.preventDefault(), !1
})
}), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, j, g) {
for (var h = f(d.target || null), i = !1; h.length && !i && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) i = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
if (0 !== c && !i && 1 < b.group.length && !a.canShrink) {
if (0 < g || 0 < j) b.prev(0 < g ? "down" : "left");
else if (0 > g || 0 > j) b.next(0 > g ? "up" : "right");
d.preventDefault()
}
}))
},
trigger: function (a, d) {
var e, c = d || b.coming || b.current;
if (c) {
f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
if (!1 === e) return !1;
c.helpers && f.each(c.helpers, function (d, e) {
e && (b.helpers[d] && f.isFunction(b.helpers[d][a])) && (e = f.extend(!0, {}, b.helpers[d].defaults, e), b.helpers[d][a](e, c))
});
f.event.trigger(a + ".fb")
}
},
isImage: function (a) {
return p(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
},
isSWF: function (a) {
return p(a) && a.match(/\.(swf)((\?|#).*)?$/i)
},
_start: function (a) {
var d = {}, e, c, a = k(a);
e = b.group[a] || null;
if (!e) return !1;
d = f.extend(!0, {}, b.opts, e);
e = d.margin;
c = d.padding;
"number" === f.type(e) && (d.margin = [e, e, e, e]);
"number" === f.type(c) && (d.padding = [c, c, c, c]);
d.modal && f.extend(!0, d, {
closeBtn: !1,
closeClick: !1,
nextClick: !1,
arrows: !1,
mouseWheel: !1,
keys: null,
helpers: {
overlay: {
closeClick: !1
}
}
});
d.autoSize && (d.autoWidth = d.autoHeight = !0);
"auto" === d.width && (d.autoWidth = !0);
"auto" === d.height && (d.autoHeight = !0);
d.group = b.group;
d.index = a;
b.coming = d;
if (!1 === b.trigger("beforeLoad")) b.coming = null;
else {
c = d.type;
e = d.href;
if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
b.isActive = !0;
if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
"image" === c && (d.aspectRatio = !0);
"iframe" === c && n && (d.scrolling = "scroll");
d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (n ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
f.extend(d, {
skin: f(".fancybox-skin", d.wrap),
outer: f(".fancybox-outer", d.wrap),
inner: f(".fancybox-inner", d.wrap)
});
f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
d.skin.css("padding" + b, v(d.padding[a]))
});
b.trigger("onReady");
if ("inline" === c || "html" === c) {
if (!d.content || !d.content.length) return b._error("content")
} else if (!e) return b._error("href");
"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
}
},
_error: function (a) {
f.extend(b.coming, {
type: "html",
autoWidth: !0,
autoHeight: !0,
minWidth: 0,
minHeight: 0,
scrolling: "no",
hasError: a,
content: b.coming.tpl.error
});
b._afterLoad()
},
_loadImage: function () {
var a = b.imgPreload = new Image;
a.onload = function () {
this.onload = this.onerror = null;
b.coming.width = this.width;
b.coming.height = this.height;
b._afterLoad()
};
a.onerror = function () {
this.onload = this.onerror = null;
b._error("image")
};
a.src = b.coming.href;
!0 !== a.complete && b.showLoading()
},
_loadAjax: function () {
var a = b.coming;
b.showLoading();
b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
url: a.href,
error: function (a, e) {
b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
},
success: function (d, e) {
"success" === e && (a.content = d, b._afterLoad())
}
}))
},
_loadIframe: function () {
var a = b.coming,
d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n ? "auto" : a.iframe.scrolling).attr("src", a.href);
f(a.wrap).bind("onReset", function () {
try {
f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
} catch (a) {}
});
a.iframe.preload && (b.showLoading(), d.one("load", function () {
f(this).data("ready", 1);
n || f(this).bind("load.fb", b.update);
f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
b._afterLoad()
}));
a.content = d.appendTo(a.inner);
a.iframe.preload || b._afterLoad()
},
_preloadImages: function () {
var a = b.group,
d = b.current,
e = a.length,
c = d.preload ? Math.min(d.preload, e - 1) : 0,
f, g;
for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
},
_afterLoad: function () {
var a = b.coming,
d = b.current,
e, c, j, g, h;
b.hideLoading();
if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
else {
d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();
e = a.content;
c = a.type;
j = a.scrolling;
f.extend(b, {
wrap: a.wrap,
skin: a.skin,
outer: a.outer,
inner: a.inner,
current: a,
previous: d
});
g = a.href;
switch (c) {
case "inline":
case "ajax":
case "html":
a.selector ? e = f("<div>").html(e).find(a.selector) : s(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder">

Unknown end tag for &lt;/div&gt;

').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
}));
break;
case "image":
e = a.tpl.image.replace("{href}", g);
break;
case "swf":
e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '">

Unknown end tag for &lt;/param&gt;

', h = "", f.each(a.swf, function (a, b) {
e += '<param name="' + a + '" value="' + b + '">

Unknown end tag for &lt;/param&gt;

';
h += " " + a + '="' + b + '"'
}), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + ">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;

"
}(!s(e) || !e.parent().is(a.inner)) && a.inner.append(e);
b.trigger("beforeShow");
a.inner.css("overflow", "yes" === j ? "scroll" : "no" === j ? "hidden" : j);
b._setDimension();
b.reposition();
b.isOpen = !1;
b.coming = null;
b.bindEvents();
if (b.isOpened) {
if (d.prevMethod) b.transitions[d.prevMethod]()
} else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
b._preloadImages()
}
},
_setDimension: function () {
var a = b.getViewport(),
d = 0,
e = !1,
c = !1,
e = b.wrap,
j = b.skin,
g = b.inner,
h = b.current,
c = h.width,
i = h.height,
l = h.minWidth,
t = h.minHeight,
m = h.maxWidth,
n = h.maxHeight,
r = h.scrolling,
p = h.scrollOutside ? h.scrollbarWidth : 0,
w = h.margin,
y = k(w[1] + w[3]),
q = k(w[0] + w[2]),
x, z, s, C, A, F, B, D, u;
e.add(j).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
w = k(j.outerWidth(!0) - j.width());
x = k(j.outerHeight(!0) - j.height());
z = y + w;
s = q + x;
C = E(c) ? (a.w - z) * k(c) / 100 : c;
A = E(i) ? (a.h - s) * k(i) / 100 : i;
if ("iframe" === h.type) {
if (u = h.content, h.autoHeight && 1 === u.data("ready")) try {
u[0].contentWindow.document.location && (g.width(C).height(9999), F = u.contents().find("body"), p && F.css("overflow-x", "hidden"), A = F.height())
} catch (G) {}
} else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
c = k(C);
i = k(A);
D = C / A;
l = k(E(l) ? k(l, "w") - z : l);
m = k(E(m) ? k(m, "w") - z : m);
t = k(E(t) ? k(t, "h") - s : t);
n = k(E(n) ? k(n, "h") - s : n);
F = m;
B = n;
h.fitToView && (m = Math.min(a.w - z, m), n = Math.min(a.h - s, n));
z = a.w - y;
q = a.h - q;
h.aspectRatio ? (c > m && (c = m, i = k(c / D)), i > n && (i = n, c = k(i * D)), c < l && (c = l, i = k(c / D)), i < t && (i = t, c = k(i * D))) : (c = Math.max(l, Math.min(c, m)), h.autoHeight && "iframe" !== h.type && (g.width(c), i = g.height()), i = Math.max(t, Math.min(i, n)));
if (h.fitToView) if (g.width(c).height(i), e.width(c + w), a = e.width(), y = e.height(), h.aspectRatio) for (;
(a > z || y > q) && (c > l && i > t) && !(19 < d++);) i = Math.max(t, Math.min(n, i - 10)), c = k(i * D), c < l && (c = l, i = k(c / D)), c > m && (c = m, i = k(c / D)), g.width(c).height(i), e.width(c + w), a = e.width(), y = e.height();
else c = Math.max(l, Math.min(c, c - (a - z))), i = Math.max(t, Math.min(i, i - (y - q)));
p && ("auto" === r && i < A && c + w + p < z) && (c += p);
g.width(c).height(i);
e.width(c + w);
a = e.width();
y = e.height();
e = (a > z || y > q) && c > l && i > t;
c = h.aspectRatio ? c < F && i < B && c < C && i < A : (c < F || i < B) && (c < C || i < A);
f.extend(h, {
dim: {
width: v(a),
height: v(y)
},
origWidth: C,
origHeight: A,
canShrink: e,
canExpand: c,
wPadding: w,
hPadding: x,
wrapSpace: y - j.outerHeight(!0),
skinSpace: j.height() - i
});
!u && (h.autoHeight && i > t && i < n && !c) && g.height("auto")
},
_getPosition: function (a) {
var d = b.current,
e = b.getViewport(),
c = d.margin,
f = b.wrap.width() + c[1] + c[3],
g = b.wrap.height() + c[0] + c[2],
c = {
position: "absolute",
top: c[0],
left: c[3]
};
d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
c.top = v(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
c.left = v(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
return c
},
_afterZoomIn: function () {
var a = b.current;
a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
!f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
}), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind(n ? "touchstart.fb" : "click.fb", function (a) {
a.preventDefault();
b.close()
}), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
},
_afterZoomOut: function (a) {
a = a || b.current;
f(".fancybox-wrap").trigger("onReset").remove();
f.extend(b, {
group: {},
opts: {},
router: !1,
current: null,
isActive: !1,
isOpened: !1,
isOpen: !1,
isClosing: !1,
wrap: null,
skin: null,
outer: null,
inner: null
});
b.trigger("afterClose", a)
}
});
b.transitions = {
getOrigPosition: function () {
var a = b.current,
d = a.element,
e = a.orig,
c = {}, f = 50,
g = 50,
h = a.hPadding,
i = a.wPadding,
l = b.getViewport();
!e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
s(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = l.y + (l.h - g) * a.topRatio, c.left = l.x + (l.w - f) * a.leftRatio);
if ("fixed" === b.wrap.css("position") || a.locked) c.top -= l.y, c.left -= l.x;
return c = {
top: v(c.top - h * a.topRatio),
left: v(c.left - i * a.leftRatio),
width: v(f + i),
height: v(g + h)
}
},
step: function (a, d) {
var e, c, f = d.prop;
c = b.current;
var g = c.wrapSpace,
h = c.skinSpace;
if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](k("width" === f ? c : c - g * e)), b.inner[f](k("width" === f ? c : c - g * e - h * e))
},
zoomIn: function () {
var a = b.current,
d = a.pos,
e = a.openEffect,
c = "elastic" === e,
j = f.extend({
opacity: 1
}, d);
delete j.position;
c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
b.wrap.css(d).animate(j, {
duration: "none" === e ? 0 : a.openSpeed,
easing: a.openEasing,
step: c ? this.step : null,
complete: b._afterZoomIn
})
},
zoomOut: function () {
var a = b.current,
d = a.closeEffect,
e = "elastic" === d,
c = {
opacity: 0.1
};
e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
b.wrap.animate(c, {
duration: "none" === d ? 0 : a.closeSpeed,
easing: a.closeEasing,
step: e ? this.step : null,
complete: b._afterZoomOut
})
},
changeIn: function () {
var a = b.current,
d = a.nextEffect,
e = a.pos,
c = {
opacity: 1
}, f = b.direction,
g;
e.opacity = 0.1;
"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = v(k(e[g]) - 200), c[g] = "+=200px") : (e[g] = v(k(e[g]) + 200), c[g] = "-=200px"));
"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
duration: a.nextSpeed,
easing: a.nextEasing,
complete: function () {
setTimeout(b._afterZoomIn, 20)
}
})
},
changeOut: function () {
var a = b.previous,
d = a.prevEffect,
e = {
opacity: 0.1
}, c = b.direction;
"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
a.wrap.animate(e, {
duration: "none" === d ? 0 : a.prevSpeed,
easing: a.prevEasing,
complete: function () {
f(this).trigger("onReset").remove()
}
})
}
};
b.helpers.overlay = {
defaults: {
closeClick: !0,
speedOut: 200,
showEarly: !0,
css: {},
locked: !n,
fixed: !0
},
overlay: null,
fixed: !1,
create: function (a) {
a = f.extend({}, this.defaults, a);
this.overlay && this.close();
this.overlay = f('<div class="fancybox-overlay">

Unknown end tag for &lt;/div&gt;

').appendTo("body");
this.fixed = !1;
a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
},
open: function (a) {
var d = this,
a = f.extend({}, this.defaults, a);
this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
this.fixed || (r.bind("resize.overlay", f.proxy(this.update, this)), this.update());
a.closeClick && this.overlay.bind("click.overlay", function (a) {
f(a.target).hasClass("fancybox-overlay") && (b.isActive ? b.close() : d.close())
});
this.overlay.css(a.css).show()
},
close: function () {
f(".fancybox-overlay").remove();
r.unbind("resize.overlay");
this.overlay = null;
!1 !== this.margin && (f("body").css("margin-right", this.margin), this.margin = !1);
this.el && this.el.removeClass("fancybox-lock")
},
update: function () {
var a = "100%",
b;
this.overlay.width(a).height("100%");
f.browser.msie ? (b = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth), m.width() > b && (a = m.width())) : m.width() > r.width() && (a = m.width());
this.overlay.width(a).height(m.height())
},
onReady: function (a, b) {
f(".fancybox-overlay").stop(!0, !0);
this.overlay || (this.margin = m.height() > r.height() || "scroll" === f("body").css("overflow-y") ? f("body").css("margin-right") : !1, this.el = x.all && !x.querySelector ? f("html") : f("body"), this.create(a));
a.locked && this.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
!0 === a.showEarly && this.beforeShow.apply(this, arguments)
},
beforeShow: function (a, b) {
b.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && f("body").css("margin-right", k(this.margin) + b.scrollbarWidth));
this.open(a)
},
onUpdate: function () {
this.fixed || this.update()
},
afterClose: function (a) {
this.overlay && !b.isActive && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
}
};
b.helpers.title = {
defaults: {
type: "float",
position: "bottom"
},
beforeShow: function (a) {
var d = b.current,
e = d.title,
c = a.type;
f.isFunction(e) && (e = e.call(d.element, d));
if (p(e) && "" !== f.trim(e)) {
d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "

Unknown end tag for &lt;/div&gt;

");
switch (c) {
case "inside":
c = b.skin;
break;
case "outside":
c = b.wrap;
break;
case "over":
c = b.inner;
break;
default:
c = b.skin, d.appendTo("body"), f.browser.msie && d.width(d.width()), d.wrapInner('<span class="child">

Unknown end tag for &lt;/span&gt;

'), b.current.margin[2] += Math.abs(k(d.css("margin-bottom")))
}
d["top" === a.position ? "prependTo" : "appendTo"](c)
}
}
};
f.fn.fancybox = function (a) {
var d, e = f(this),
c = this.selector || "",
j = function (g) {
var h = f(this).blur(),
i = d,
j, k;
!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (j = a.groupAttr || "data-fancybox-group", k = h.attr(j), k || (j = "rel", k = h.get(0)[j]), k && ("" !== k && "nofollow" !== k) && (h = c.length ? f(c) : e, h = h.filter("[" + j + '="' + k + '"]'), i = h.index(this)), a.index = i, !1 !== b.open(h, a) && g.preventDefault())
}, a = a || {};
d = a.index || 0;
!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", j) : m.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", j);
this.filter("[data-fancybox-start=1]").trigger("click");
return this
};
m.ready(function () {
f.scrollbarWidth === q && (f.scrollbarWidth = function () {
var a = f('<div style="width:50px;height:50px;overflow:auto"><div/>

Unknown end tag for &lt;/div&gt;

').appendTo("body"),
b = a.children(),
b = b.innerWidth() - b.height(99).innerWidth();
a.remove();
return b
});
if (f.support.fixedPosition === q) {
var a = f.support,
d = f('<div style="position:fixed;top:20px;">

Unknown end tag for &lt;/div&gt;

').appendTo("body"),
e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
d.remove();
a.fixedPosition = e
}
f.extend(b.defaults, {
scrollbarWidth: f.scrollbarWidth(),
fixed: f.support.fixedPosition,
parent: f("body")
})
})
})(window, document, jQuery);
(function ($) {
var F = $.fancybox;
F.helpers.buttons = {
defaults: {
skipSingle: false,
position: 'top',
tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnPlay" title="Start slideshow" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnNext" title="Next" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnToggle" title="Toggle size" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

'
},
list: null,
buttons: null,
beforeLoad: function (opts, obj) {
if (opts.skipSingle && obj.group.length < 2) {
obj.helpers.buttons = false;
obj.closeBtn = true;
return
}
obj.margin[opts.position === 'bottom' ? 2 : 0] += 30
},
onPlayStart: function () {
if (this.buttons) {
this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn')
}
},
onPlayEnd: function () {
if (this.buttons) {
this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn')
}
},
afterShow: function (opts, obj) {
var buttons = this.buttons;
if (!buttons) {
this.list = $(opts.tpl).addClass(opts.position).appendTo('body');
buttons = {
prev: this.list.find('.btnPrev').click(F.prev),
next: this.list.find('.btnNext').click(F.next),
play: this.list.find('.btnPlay').click(F.play),
toggle: this.list.find('.btnToggle').click(F.toggle)
}
}
if (obj.index > 0 || obj.loop) {
buttons.prev.removeClass('btnDisabled')
} else {
buttons.prev.addClass('btnDisabled')
}
if (obj.loop || obj.index < obj.group.length - 1) {
buttons.next.removeClass('btnDisabled');
buttons.play.removeClass('btnDisabled')
} else {
buttons.next.addClass('btnDisabled');
buttons.play.addClass('btnDisabled')
}
this.buttons = buttons;
this.onUpdate(opts, obj)
},
onUpdate: function (opts, obj) {
var toggle;
if (!this.buttons) {
return
}
toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');
if (obj.canShrink) {
toggle.addClass('btnToggleOn')
} else if (!obj.canExpand) {
toggle.addClass('btnDisabled')
}
},
beforeClose: function () {
if (this.list) {
this.list.remove()
}
this.list = null;
this.buttons = null
}
}
}(jQuery));
function fullscreenFancy() {
if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
RunPrefixMethod(document, "CancelFullScreen")
} else {
RunPrefixMethod(document.body, "RequestFullScreen")
}
}
var pfx = ["webkit", "moz", "ms", "o", ""];

function RunPrefixMethod(obj, method) {
var p = 0,
m, t;
while (p < pfx.length && !obj[m]) {
m = method;
if (pfx[p] == "") {
m = m.substr(0, 1).toLowerCase() + m.substr(1)
}
m = pfx[p] + m;
t = typeof obj[m];
if (t != "undefined") {
pfx = [pfx[p]];
return (t == "function" ? obj[m]() : obj[m])
}
p++
}
}
function fmviparam(a, b) {
var d = RegExp(a + "=([^&]+)", "i").exec(b);
null == d && (d = RegExp(a + "=(.+)", "i").exec(b));
if (null == d) return null;
result = (d + "").split(",");
return result[1]
}
function onPlayerReady(event) {
event.target.playVideo()
}
function onPlayerStateChange(event) {
if (event.data === 0) {
$.fancybox.next()
}
}
function onYouTubePlayerAPIReady() {
$(".iconPlayer").each(function () {
var az = fmviparam("v", $(this).attr("href"));
if (/list=/.test($(this).attr("href"))) {
var b = "&list=" + fmviparam("list", $(this).attr("href"));
var d = "<span>

Unknown end tag for &lt;/span&gt;

"
} else {
var b = d = ""
}
var c = 'http://www.youtube.com/embed/' + az + '?autoplay=1&wmode=opaque' + b;
$(this).attr({"href": c , "rel":"ytb-" + $(this).parents(".post").attr("id") }).next().attr("src","http://i3.ytimg.com/vi/" + az + "/0.jpg").before(d)
});
$(".iconPlayer").fancybox({
width: 853,
height: 480,
openEffect: 'none',
closeEffect: 'none',
nextEffect: 'none',
prevEffect: 'none',
tpl: {
next: '<a title="Next" style="right:-50px;width:50px" class="fancybox-nav fancybox-next" href="javascript:;"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

',
prev: '<a title="Previous" style="left:-50px;width:50px" class="fancybox-nav fancybox-prev" href="javascript:;"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

'
},
beforeShow: function () {
var id = $.fancybox.inner.find('iframe').attr('id');
var player = new YT.Player(id, {
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
})
}
})
}
function fmviyoutube() {
var a = prompt("Nhập liên kết video youtube vào đây!", "");
if ("" != a && null != a && /www\.youtube\.com\/watch\?/.test(a)) {
comm._HTML('[youtube]' + a, '[/youtube]')
}
}
$(function () {
$("body").append('<div id="qLoverlay"><div id="qLbar">

Unknown end tag for &lt;/div&gt;

<div id="qLtip">0%

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').queryLoader2();
$("a[href*='?showpost=']").fancybox({
type: 'iframe',
openEffect: 'none',
closeEffect: 'none',
width: 1000,
minHeight: 250,
autoResize: true,
fitToView: true,
scrolling: 'no',
helpers: {
title: {
type: 'inside'
}
},
beforeLoad: function () {
this.title = '<p style="text-align:center"><a onclick="$.fancybox.close()" href="' + this.href.replace('?showpost=', '#') + '">Xem toàn trang

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;

'
}
});
$("#message-box .toolbar2:first").prepend('<img title="Insert video youtube" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="fmviyoutube()" class="button" src="http://illiweb.com/fa/wysiwyg/logo_youtube.gif" />');
if ($(".iconPlayer").length) {
var yt = document.createElement("script");
yt.type = "text/javascript";
yt.async = true;
yt.src = "http://www.youtube.com/player_api";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(yt, s)
}
if (/Gecko|WebKit/.test(navigator.userAgent)) {
var bv = '<li><a class="btnFullscreen" title="Toggle fullscreen" href="javascript:;" onclick="fullscreenFancy()">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

'
} else {
var bv = ''
}
$("#eazy-main .post").each(function () {
var $k = $(this);
$k.find("a[rel^='prettyPhoto']").each(function (z) {
if (!/\/images\/smilies\//g.test($(this).find("a[rel^='prettyPhoto']").attr("href"))) {
$(this).attr({"rel": "fancyImage" + $k.attr("id"), "caption": (z + 1) + " / "});
}
});
$k.find("a[rel='fancyImage']").attr("data-title-id", $k.find("a[rel='fancyImage']").length)
});
$("a[rel^='fancyImage']").fancybox({
fitToView: true,
prevEffect: 'elastic',
nextEffect: 'elastic',
autoSize: true,
closeClick: false,
openEffect: 'elastic',
closeEffect: 'elastic',
closeBtn: false,
helpers: {
title: {
type: 'over'
},
overlay: {
closeClick: false
},
buttons: {
position: 'bottom',
tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnPlay" title="Start slideshow" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnNext" title="Next" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnToggle" title="Toggle size" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

' + bv + '

Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

'
}
},
beforeLoad: function () {
if ($(this.element).attr('caption') != undefined) {
this.title = $(this.element).attr('caption') + $(this.element).data("title-id")
}
}
});
});
```


Bước 3: Sử dụng BBcode cho thành viên và khách
ACP >> MOD >> Thông báo chung:
Thêm BBcode javascript vào Nội dung thông báo

```

[javascript][/javascript]
```

Chỉnh Cấu hình thông báo chung:

> Hiện thông báo chung: Có
> Chỉ hiện thông báo chung ở trang chủ: Không
> Hiển thị thông báo khác tới khách: Có
> Hiện thông báo chung tới: Mọi người


Ghi chú:
Hiệu ứng xem ảnh bằng fancybox2 được nhận diện theo link ảnh prettyphoto trong BBcode IMG của Eazy, lược bỏ biểu tượng vui, chia từng slide theo bài viết. Nếu trong thời gian tới Eazy có thay đổi về BBcode IMG thì có thể không sử dụng được mod này.
Nếu không thích tiến trình tải trang bạn có thể xóa nó bằng cách mở file chipteam.js
Xóa từ dòng 44 cho đến 169

```

(function ($) {
if (!Array.prototype.indexOf) {
...
afterEach();
return this
}
})(jQuery);

```
và xóa dòng 1137

```

$("body").append('<div id="qLoverlay"><div id="qLbar">

Unknown end tag for &lt;/div&gt;

<div id="qLtip">0%

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').queryLoader2();
```

Đây là mod đầu tiên mình viết cho Eazy nên có lỗi hay thiếu sót gì các bạn vui lòng gửi trả lời ngay tại bài viết này hoặc thông báo nhanh qua yahoo baivong@ymail.com