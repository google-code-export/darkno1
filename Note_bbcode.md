Đây là 1 mẹo để làm nổi bật nội dung bạn muốn trong bài viết. Style designed by Việt K - http://www.c3zone.net

Demo: http://12b6.eazy.vn/viewtopic.php?f=30&t=42 Đăng nhập mới thấy dc nhé!

Code này sẽ tích hợp 1 nút như bbcode trên thanh công cụ gửi bài.

Bắt đầu nào.

-- Update ver 2.0 với 5 loại note mới. Design by http://fmvi.vn --

+ Bước 1: Tạo 1 bbcode
mới.
Cách sử dụng BBcode:

```

[note={SIMPLETEXT}]{TEXT}[/note]
```

HTML thay thế:

```

<table class="{SIMPLETEXT}"><tr><td>{TEXT}

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


```

Hiện trên trang gửi bài: Không

+ Bước 2: Chèn vào kiểu dáng bạn đang sử dụng:

```

/*BBnote*/
.noteclassic,.noteimportant,.notewarning,.notetip,.notehelp,.noteinfo,.notesuccess,.noteerror,.notevalidation,.notesuggest{width:95%;border-radius:10px 10px;-moz-border-radius:10px 10px;-webkit-border-radius:10px 10px;-webkit-box-shadow:2px 2px 3px #999;-moz-box-shadow:2px 2px 3px #999;min-height:40px;height:40px;overflow:visible;position:relative;top:6px;left:5px;border:1px solid #999999;background-position:20px 50%;background-repeat:no-repeat;text-align:justify;margin:10px 0px 15px 5px;padding:25px 20px 15px 80px}
.noteclassic{background-color:#EEF;background-image:url(http://i20.servimg.com/u/f20/14/50/49/34/note10.png);background-repeat:no-repeat}
.noteimportant{background-color:#FFC;background-image:url(http://i20.servimg.com/u/f20/14/50/49/34/import10.png);background-repeat:no-repeat}
.notewarning{background-color:#FDD;background-image:url(http://i20.servimg.com/u/f20/14/50/49/34/warnin10.png);background-repeat:no-repeat}
.notetip{background-color:#E4F6F8;background-image:url(http://i20.servimg.com/u/f20/14/50/49/34/tip10.png);background-repeat:no-repeat}
.notehelp{background-color:#D8F3C9;background-image:url(http://i20.servimg.com/u/f20/14/50/49/34/help10.png);background-repeat:no-repeat}
.noteinfo{background-color:#BDE5F8;background-image:url(http://i48.servimg.com/u/f48/16/28/30/49/knob_i10.png);background-repeat:no-repeat}
.notesuccess{background-color:#DFF2BF;background-image:url(http://i48.servimg.com/u/f48/16/28/30/49/knob_v10.png);background-repeat:no-repeat}
.noteerror{background-color:#FFBABA;background-image:url(http://i48.servimg.com/u/f48/16/28/30/49/knob_r10.png);background-repeat:no-repeat}
.notevalidation{background-color:#FFCCBA;background-image:url(http://i48.servimg.com/u/f48/16/28/30/49/knob_c10.png);background-repeat:no-repeat}
.notesuggest{background-color:#F1AF84;background-image:url(http://i48.servimg.com/u/f48/16/28/30/49/knob_h10.png);background-repeat:no-repeat}
#hienr a {padding-left:10px;}#hienr {height:150px;overflow:scroll;border:1px solid #ccc;background:#fff;width:150px;}

```
+ Bước 3: Tạo BBcode mới:
Cách sử dụng bbcode:

```

[note][/note]

```
HTML thay thế:

```

<script src="http://code.jquery.com/jquery-latest.js">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">$(function(){$(".toolbar").append("<img original-title=\"BBnote\" id=\"clickd\" src=\"http://12b6.forum-viet.com/users/2611/10/63/87/album/inote10.gif\"  class=\"button\" onmouseover=\"overIcon(this)\" onmouseout=\"outIcon(this)\"  alt=\"note=\" />").after("<div id=\"hienr\" style=\"display:none;\"><div id=\"tatd\" style=\"float:right\"><a href=\"javascript:void(0);\" title=\"Tắt đi\">x

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<a title=\"Classic\" onclick=\"comm._HTML(\'[note=classic]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://12b6.forum-viet.com/users/2611/10/63/87/album/note10.png\">Classic note

Unknown end tag for &lt;/a&gt;

<a title=\"Tip\" onclick=\"comm._HTML(\'[note=tip]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://12b6.forum-viet.com//users/2611/10/63/87/album/tip10.png\">Tip note

Unknown end tag for &lt;/a&gt;

<a title=\"Warning\" onclick=\"comm._HTML(\'[note=warning]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://12b6.forum-viet.com/users/2611/10/63/87/album/warn10.png\">Warning note

Unknown end tag for &lt;/a&gt;

<a title=\"Important\" onclick=\"comm._HTML(\'[note=important]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://12b6.forum-viet.com/users/2611/10/63/87/album/imp10.png\">Important note

Unknown end tag for &lt;/a&gt;

<a title=\"Help\" onclick=\"comm._HTML(\'[note=help]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://12b6.forum-viet.com/users/2611/10/63/87/album/help10.png\">Help note

Unknown end tag for &lt;/a&gt;

<br/><a title=\"Info\" onclick=\"comm._HTML(\'[note=info]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://i48.servimg.com/u/f48/16/28/30/49/rsz_2k11.png\">Info note

Unknown end tag for &lt;/a&gt;

<a title=\"Success\" onclick=\"comm._HTML(\'[note=success]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://i48.servimg.com/u/f48/16/28/30/49/rsz_2k13.png\">Success note

Unknown end tag for &lt;/a&gt;

<a title=\"Error\" onclick=\"comm._HTML(\'[note=error]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://i48.servimg.com/u/f48/16/28/30/49/rsz_2k12.png\">Error note

Unknown end tag for &lt;/a&gt;

<a title=\"Validation\" onclick=\"comm._HTML(\'[note=validation]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://i48.servimg.com/u/f48/16/28/30/49/rsz_kn10.png\">Validation note

Unknown end tag for &lt;/a&gt;

<a title=\"Suggest\" onclick=\"comm._HTML(\'[note=suggest]\',\'[/note=]\');\" href=\"javascript:void(0);\"><img src=\"http://i48.servimg.com/u/f48/16/28/30/49/rsz_2k10.png\">Suggest note

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

");$("#clickd, #tatd").click(function(){$("#hienr").slideToggle("fast");});});

Unknown end tag for &lt;/script&gt;


```

Sau đó dán vào mod thông báo chung -> done.