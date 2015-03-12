Demo :http://nq4.upanh.com/b4.s29.d2/ed1384392227368fefcbf30e89755c27_49021564.demo.bmp
Hình ảnh

Lưu ý đây là code đã chỉnh lại cho đẹp, code dưới đây đơn giản chỉ là cái list thôi, ai ko thích thì tự edit lại nhé!

Tạo bbcode mới rồi nhét vào mod thông báo chung!!! Nhớ chèn thư viện jQ nhé!

```

<script type="text/javascript">$(function(){if ($(".first").not(".first:contains('Re: ')").length) {$(".content:first").after('<br/><hr/><b>Các bài viết cùng chuyên mục

Unknown end tag for &lt;/b&gt;

<div id="cungchuyenmuc">

Unknown end tag for &lt;/div&gt;

');$.getJSON('/eazy-api.php?get=topic&num=10&forum='+$("a.left-box").attr('href').slice(18)+'&sortf=date&sorto=desc', function (items) {var container = $('#cungchuyenmuc');$(items.output).each(function (i, item) {var html = '<div> -- <a href="/viewtopic.php?f=' + item.forum_id + '&t=' + item.topic_id + '">' + item.topic_title + '

Unknown end tag for &lt;/a&gt;

 gửi bởi <a href="/memberlist.php?mode=viewprofile&u=' + item.user_id + '" style="color:#' + item.user_colour + '" class="username-coloured">' + item.username + '

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

';container.append(html);});});}});

Unknown end tag for &lt;/script&gt;



```
Và hãy để nút thanks có tác dụng!!!

Update log:

  * ver 2.0: Chỉ hiện ở first post, sang trang 2 cũng ko hiện.



Hãy chia sẻ các style do mình tự chỉnh sửa để làm phong phú thêm cho TUT này, và để cho mọi người có thêm nhiều lựa chọn!!!