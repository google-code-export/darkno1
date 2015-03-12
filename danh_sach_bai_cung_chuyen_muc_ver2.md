http://nq4.upanh.com/b4.s29.d2/ed1384392227368fefcbf30e89755c27_49021564.demo.bmp

**Lưu ý đây là code đã chỉnh lại cho đẹp, code dưới đây đơn giản chỉ là cái list thôi, ai ko thích thì tự edit lại nhé!** Chỉ chạy trên Eazy style.
**Cách làm:
-- Tạo bbcode mới rồi nhét vào mod thông báo chung!!!**

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">$(function(){
var sobaiviet = 10;
if ($(".first").not(".first:contains('Re: ')").length) {$(".content:first").after('<br/><hr/><b>Các bài viết cùng chuyên mục

Unknown end tag for &lt;/b&gt;

<ol start="1" id="cungchuyenmuc">

Unknown end tag for &lt;/ol&gt;

');$.getJSON('/eazy-api.php?get=topic&num='+sobaiviet+'&forum='+$("a.left-box").attr('href').slice(18)+'&sortf=date&sorto=desc', function (items) {var container = $('#cungchuyenmuc');$(items.output).each(function (i, item) {var html = '<li><a class="nganlai" href="/viewtopic.php?f=' + item.forum_id + '&t=' + item.topic_id + '">' + item.topic_title + '

Unknown end tag for &lt;/a&gt;

 gửi bởi <a href="/memberlist.php?mode=viewprofile&u=' + item.user_id + '" style="color:#' + item.user_colour + '" class="username-coloured">' + item.username + '

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

';container.append(html);$("a.nganlai").each(function(){if ($(this).text().length > 40) {$(this).text($(this).text().slice(0, 39));$(this).append('...');}});});});}});

Unknown end tag for &lt;/script&gt;


```

Ai đã có thư viện jQuery rồi thì bỏ đoạn này ra:

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;




```
**Thêm vào kiểu dáng đang sử dụng:**

```

#cungchuyenmuc {margin-left:20px;}

```

**Hướng dẫn chỉnh sửa:**

  * Ai ko thích đánh số thì đoạn:

```

<ol start="1" id="cungchuyenmuc">.....

Unknown end tag for &lt;/ol&gt;


```

> Sửa lại thành:

```

<div id="cungchuyenmuc">....

Unknown end tag for &lt;/div&gt;



```
> Tìm tiếp:

```

<li>...

Unknown end tag for &lt;/li&gt;


```

> Sửa thành:

```

<div>....

Unknown end tag for &lt;/div&gt;


```


  * Giải thích code rút ngắn link: Ở code trên, đoạn:

```

if ($(this).text().length > 40
```

> Số 40 là độ dài tối đa cho link, nếu link nào dài quá 40 ký tự, sẽ tự động dc rút ngắn xuống 39 ký tự và thêm dấu "...", tương ứng với đoạn:

```

slice(0, 39)

```
> Như vậy, thay đổi số 40 sẽ thay đổi độ dài tối đa cho link, và số 39 sẽ là số ký tự hiển thị sau khi dc rút ngắn, ngoài ra ko cần chỉnh sửa gì thêm.

  * Thay đổi số bài viết theo ý muốn: Tìm đoạn:

```

var sobaiviet = 10;

```
> Thay số 10 thành số bài viết mà bạn muốn hiển thị -> Done



**Update log:**```

* ver 2.0: Chỉ hiện ở first post, sang trang 2 cũng ko hiện.
* Ver 2.1:
-- Rút gọn link quá dài.
-- Đánh số thứ tự.
-- Cho phép thay đổi số bài viết theo ý muốn.

```

Hãy chia sẻ các style do mình tự chỉnh sửa để làm phong phú thêm cho TUT này, và để cho mọi người có thêm nhiều lựa chọn!!!