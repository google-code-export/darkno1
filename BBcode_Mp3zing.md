Xem qua một số bbcode media trên eazy, mình thấy các bạn làm trải rộng nhiều host, nhiều... khi chẳng dùng bao giờ.
Hiện nay zing đang dẫn đầu về ứng dụng nghe nhạc và video clip ở Việt Nam và trong các bbcode media mình đã xem thì chỉ khai thác được bbcode bài hát, bbcode này sẽ hỗ trợ thêm video và playlist trên mp3 zing.

Bản quyền: Mod by fmvi - chipteam (http://chip.eazy.vn/)

Demo:
![http://i15.servimg.com/u/f15/16/58/89/73/1-17-210.png](http://i15.servimg.com/u/f15/16/58/89/73/1-17-210.png)
http://design.eazy.vn/viewtopic.php?f=78&t=112

Hướng dẫn:

Bước 1: Tạo BBcode zing:
ACP >> Gửi bài viết >> Tùy biến thẻ BBCode >> Tạo thẻ BBcode mới
Cách sử dụng thẻ BBCode:

```

[zing({NUMBER1},{NUMBER2},{NUMBER3})]{INTTEXT}[/zing]
```

Mã HTML thay thế:
```

<div align="center"><object width="{NUMBER1}" height="{NUMBER2}"><param name="movie" value="http://static.mp3.zdn.vn/skins/mp3_main/flash/embed/zing_mp3_embed_v1.3.swf?xmlURL=http://mp3.zing.vn/play/?pid={INTTEXT}||{NUMBER3}?autoplay=false&wmode=transparent" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="{NUMBER1}" height="{NUMBER2}" src="http://static.mp3.zdn.vn/skins/mp3_main/flash/embed/zing_mp3_embed_v1.3.swf?xmlURL=http://mp3.zing.vn/play/?pid={INTTEXT}||{NUMBER3}?autoplay=false&wmode=transparent" quality="high" wmode="transparent" type="application/x-shockwave-flash">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;



Unknown end tag for &lt;/div&gt;


```

Không check vào Hiện trên trang gửi bài
Mã sử dụng này gồm 4 thông số:
{NUMBER1}: Chiều rộng
{NUMBER2}: Chiều cao
{NUMBER3}: Mã video(6), bài hát(4), playlist(1)
{INTTEXT}: PID
Nhìn có vẻ dài dòng, nhưng không vấn đề gì, bbcode tiếp theo sẽ làm đơn giản quá trình này.

Bước 2: Tạo BBcode zingjs
Cách sử dụng thẻ BBCode:

```

[zingjs][/zingjs]

```
Mã HTML thay thế:

```

<script type="text/javascript">function fmvizing() {
var a = prompt("Nhập liên kết mp3zing vào đây!", "");
if ("" != a && null != a && /mp3\.zing\.vn/.test(a)) {
var b = a.match(/\/(\w{8})\./)[1];
/\/album\/|\/playlist\//.test(a) ? comm._HTML("[zing(640,295,1)]" + b, "[/zing]") : /\/video-clip\//.test(a) ? comm._HTML("[zing(640,393,6)]" + b, "[/zing]") : /\/bai-hat\//.test(a) && comm._HTML("[zing(640,75,4)]" + b, "[/zing]")
}
}
$(function () {
$("#message-box .toolbar2:first").prepend('<img title="[zing(width,height,code)]PID[/zing]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="fmvizing()" class="button" src="http://static.me.zing.vn/v3/images/smilley/default/79.jpg" />')
});

Unknown end tag for &lt;/script&gt;


```

Không check vào Hiện trên trang gửi bài

Bước 3: Sử dụng BBcode cho thành viên và khách
ACP >> MOD >> Thông báo chung:
Thêm BBcode zingjs vào Nội dung thông báo

```

[zingjs][/zingjs]

```
Chỉnh Cấu hình thông báo chung:

  * Hiện thông báo chung: Có
  * Chỉ hiện thông báo chung ở trang chủ: Không
  * Hiển thị thông báo khác tới khách: Có
  * Hiện thông báo chung tới: Mọi người


Ghi chú:
Nếu các bạn có sử dụng một file javascript chung cho 4rum thì bạn nên đặt javascript trong BBcode zingjs vào đó, tránh đặt nhiều javascript nội tuyến.
Nếu bạn chưa thay thế file javascript sử dụng trong bài này viewtopic.php?f=97&t=21696 thì không cần làm bước 2 và 3 vì mình đã thêm vào rồi.