Vừa viết xong bbcode mp3zing, tiện tay viết luôn bbcode nhaccuatui. Điểm đặc biệt ở đây là gì?

> Không quảng cáo.
> Không tự play.


Bản quyền: Mod by fmvi - chipteam (http://chip.eazy.vn/)

Demo:
![http://i15.servimg.com/u/f15/16/58/89/73/1-18-210.png](http://i15.servimg.com/u/f15/16/58/89/73/1-18-210.png)
http://design.eazy.vn/viewtopic.php?f=78&t=113

Hướng dẫn:

Bước 1: Tạo BBcode nct:
ACP >> Gửi bài viết >> Tùy biến thẻ BBCode >> Tạo thẻ BBcode mới
Cách sử dụng thẻ BBCode:

```

[nct({NUMBER},{SIMPLETEXT})]{URL}[/nct]

```
Mã HTML thay thế:

```

<div align="center"><div style="margin:0;padding:0;width:640px;height:{NUMBER}px;overflow:hidden"><div style="margin:{SIMPLETEXT} 0 0 0;padding:0"><object height="{NUMBER}" width="100%"><param value="{URL}" name="movie"><param value="high" name="quality" /><param value="&amp;autostart=false" name="flashvars" /><param value="transparent" name="wmode" /><param value="always" name="allowscriptaccess" /><embed height="{NUMBER}" width="100%" type="application/x-shockwave-flash" wmode="transparent" flashvars="&amp;autostart=false" quality="high" allowscriptaccess="always" src="{URL}" />

Unknown end tag for &lt;/object&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


```

Không check vào Hiện trên trang gửi bài
Chi tiết 3 thông số như sau:
Bài hát đơn:

```

95,-350
```

Playlist không có video:

```

195,-350
```

Playlist có video: (không tạo tự động, xem thêm ghi chú)

```

500,0

```
MV:

```

385,0

```
Nhìn có vẻ dài dòng, nhưng không vấn đề gì, bước tiếp theo sẽ làm đơn giản quá trình này.

Bước 2: Tạo BBcode nctjs
Cách sử dụng thẻ BBCode:

```

[nctjs][/nctjs]
```

Mã HTML thay thế:

```

<script type="text/javascript">function fmvinct() {
var a = prompt("Nh\u1eadp li\u00ean k\u1ebft nhaccuatui v\u00e0o \u0111\u00e2y!", "");
"" != a && (null != a && /www\.nhaccuatui\.com/.test(a)) && (/\/nghe\?M=/.test(a) ? comm._HTML("[nct(95,-305)]" + a.replace("nghe?M=", "m/"), "[/nct]") : /\/nghe\?L=/.test(a) ? comm._HTML("[nct(195,-350)]" + a.replace("nghe?L=", "l/"), "[/nct]") : /\/mv\//.test(a) && comm._HTML("[nct(385,0)]http://www.nhaccuatui.com/mv/xem-clip/" + a.match(/\.(\w*)\.html/)[1], "[/nct]"))
}
$(function () {
$("#message-box .toolbar2:first").prepend('<img title="[nct(number,number,number)]url[/nct]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="fmvinct()" class="button" src="http://i15.servimg.com/u/f15/16/58/89/73/www_nh10.png" />')
});

Unknown end tag for &lt;/script&gt;


```

Không check vào Hiện trên trang gửi bài

Bước 3: Sử dụng BBcode cho thành viên và khách
ACP >> MOD >> Thông báo chung:
Thêm BBcode nctjs vào Nội dung thông báo

```

[nctjs][/nctjs]
```

Chỉnh Cấu hình thông báo chung:

  * Hiện thông báo chung: Có
  * Chỉ hiện thông báo chung ở trang chủ: Không
  * Hiển thị thông báo khác tới khách: Có
  * Hiện thông báo chung tới: Mọi người


Ghi chú:
Ở bbcode cho playlist mình đã ẩn phần video nên nếu là playlist có video thì bạn sẽ không xem được, nên sau khi lấy bbcode bạn chỉnh 3 thông số:

```

195,-350

```
thành:

```

500,0

```
Nếu các bạn có sử dụng một file javascript chung cho 4rum thì bạn nên đặt javascript trong BBcode nctjs vào đó, tránh đặt nhiều javascript nội tuyến.
Nếu bạn chưa thay thế file javascript sử dụng trong bài này viewtopic.php?f=97&t=21696 thì không cần làm bước 2 và 3 vì mình đã thêm vào rồi.