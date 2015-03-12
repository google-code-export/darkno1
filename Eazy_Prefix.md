```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
var prefixes = ["Mediafire", "Hotfile", "Megaupload", "Torrent"]; //danh sach cac prefix
/* Topic prefixes - Copyright © 2011 by Viet K - chinhphuc.info */
function toMenu(a) {
var htmlpre = '<select style="margin-right:5px" id="prefix" size="1"><option value="">(None)

Unknown end tag for &lt;/option&gt;

';
for (i in a)
htmlpre += '<option value="' + a[i] + '">' + a[i] + '

Unknown end tag for &lt;/option&gt;

';
htmlpre += '

Unknown end tag for &lt;/select&gt;

';
return htmlpre;
}

function checkpre(ar, input) {
for (i in ar) {
var p = new RegExp("\\" + ar[i], "g");
var title = input.substr(0, input.indexOf(']'));
if (p.test(title)) return ar[i];
}
return "";
}
$(function () {
if (/mode=post/.test(location.search)) {
$(toMenu(prefixes)).insertBefore("input[name='subject'][type='text']");
var mw = $("#prefix").width() + 5;
$("input[name='subject']").css("width", $("input[name='subject']").width() - mw);
var t = $("[name='subject']").val();
var cur = checkpre(prefixes, t);
if (cur != "") {
$("[value=" + cur + "]").attr("selected", "selected");
$("input[name='subject']").val(t.replace('[' + cur + ']', '').trim())
}
$("input[name='post']").click(function () {
var sub = $("input[name='subject']").val().trim();
if (sub != "" && $("#prefix").val() != "") $("input[name='subject']").val("[" + $("#prefix").val() + "] " + sub)
})
}
});


Unknown end tag for &lt;/script&gt;




```
Dòng này là tuỳ chỉnh code tuỳ theo 4rum

```

var prefixes = ["Mediafire", "Hotfile", "Megaupload", "Torrent"]; //danh sach cac prefix

```

Copyright by Viet K - chinhphuc.info xin đừng xoá topic =)) =)) =))
Đã được anh Viet K cho post lên nên chắc không vi phạm quyền sở hữu trí tuệ
Nguồn đây :http://diendan.chinhphuc.info/t20181-prefix