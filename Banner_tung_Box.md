```

Demo1: http://12b6.eazy.vn/viewforum.php?f=5
Demo2: http://12b6.eazy.vn/viewforum.php?f=6
```
Trong demo mình ko áp dụng làm banner mà mình dùng làm nội quy cho từng box.

Tạo bbcode và cho vào mod thông báo chung nhé:

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<scrip type="javascript">$(function(){$(".post-icon:first a[href*='/posting.php?mode=post&f=5']").each(function(){$('<br/><img src="link ảnh"/>').insertBefore(".topic-actions:first");});});

Unknown end tag for &lt;/script&gt;


```

Trong đó,

```

f=5

```
Thay số 5 thành số id của box muốn hiện là xong. Có thể ứng dụng làm nhiều thứ khác ;)