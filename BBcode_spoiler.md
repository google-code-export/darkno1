Lâu rồi ko có code free nhỉ?

Demo: viewtopic.php?f=14&t=67

Có sử dụng cookie của trình duyệt, phân chia theo id của topic. Style by RozeX.

Cách làm:
**Thêm vào kiểu dáng đang sử dụng:**

```

/* Spoilerbox */
/* Code block */
dl.spoilerbox {
padding: 3px;
background-color: #FFFFFF;
border: 1px solid #dbdbdb;
font-size: 1em;
border-radius: 4px;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
overflow: hidden;
background: #F8F8F8 url('http://web.eazy.vn/images/styles/eazystyle-rolex/category-23px-light.png') repeat-x 0 22px;
margin: 0.5em 10px 10px 10px;
}

dl.spoilerbox dt {
text-transform: none;
margin: -3px -3px 3px -3px;
padding: 2px 5px 2px 2px;
font-size: 0.8em;
font-weight: bold;
display: block;
background: #E7E7E7 url('http://web.eazy.vn/images/styles/eazystyle-rolex/form-button-white-25px.png') repeat-x top;
border-bottom: 1px solid #D4D4D4;
}
dl.spoilerbox spoiler {
overflow: auto;
display: none;
height: auto;
max-height: 200px;
white-space: normal;
padding: 3px 5px;
font: 0.9em Monaco, "Andale Mono","Courier New", Courier, mono;
line-height: 1.3em;
color: #8b8b8b;
margin: 2px 0;
}
dl.spoilerbox dt a {float:right}

```
Tạo bbcode mới:
Cách sử dụng thẻ BBcode:

```

[spoiler]{TEXT}[/spoiler]
```

HTML thay thế:

```

<dl><dt>Nội dung đã được ẩn: <a class="show-spoiler" href="#">Hiện nội dung

Unknown end tag for &lt;/a&gt;

<a class="hide-spoiler" style="display:none" href="#">Ẩn nội dung

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/dt&gt;

<dd><spoiler>{TEXT}

Unknown end tag for &lt;/spoiler&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


```

**Tạo BBcode mới và cho toàn bộ đoạn này vào**

```

<script type="text/javascript">function setCookie(e,a,b){var c=new Date;c.setDate(c.getDate()+b);a=escape(a)+(null==b?"":"; expires="+c.toUTCString());document.cookie=e+"="+a}function getCookie(e){var a,b,c,d=document.cookie.split(";");for(a=0;a<d.length;a++)if(b=d[a].substr(0,d[a].indexOf("=")),c=d[a].substr(d[a].indexOf("=")+1),b=b.replace(/^\s+|\s+$/g,""),b==e)return unescape(c)}$(function(){$("dl.spoilerbox").each(function(index){$(this).attr('id', 'spoiler'+$(".reply-icon a").attr('href').split("=").pop()+index);var spoid = $(this).attr('id');if (getCookie(spoid) == 1) {$(this).children("dd").children("spoiler").show();$(this).children("dt").children("a.show-spoiler").hide();$(this).children("dt").children("a.hide-spoiler").show();}$(this).children("dt").children("a.show-spoiler").click(function(){setCookie(spoid, 1);$(this).next().show();$(this).hide();$(this).parent().parent().children("dd").children("spoiler").show();return false});$(this).children("dt").children("a.hide-spoiler").click(function(){setCookie(spoid, null);$(this).prev().show();$(this).hide();$(this).parent().parent().children("dd").children("spoiler").hide();return false});});});

Unknown end tag for &lt;/script&gt;




```
Viết bởi dothinh1105 - Joker Team