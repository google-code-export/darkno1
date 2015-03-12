ode này sẽ cho bạn 1 cái menu khi click vào tên thành viên trong bài viết giống vbb, hoạt động trên eazy style.

Demo: http://cntt.eazy.vn/viewtopic.php?f=557 ... 1302#p1302

Tạo BBcode với html thay thế:

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script>$(function(){$(".postprofile dt center a").each(function(){var htmlavt = $(this).parent().parent().parent().parent().children("a").html();var htmlname = $(this).parent().html();var name = $(this).text();var linkname = $(this).attr('href').replace('./memberlist.php?mode=viewprofile&u=','');$(this).append(' <img src="http://illiweb.com/fa/invision/menu_action_down.gif"/>');$(this).after('<div class="drop"><table width="90%"><tr><td vlign="top" class="resizeavt">' + htmlavt + '

Unknown end tag for &lt;/td&gt;

<td><table><tr><td>' + htmlname + '<hr/><img src="http://hitskin.com/themes/18/09/33/i_icon_profile.png"/><a href="/memberlist.php?mode=viewprofile&u=' + linkname + '">Lý lịch

Unknown end tag for &lt;/a&gt;

<hr/><img src="http://hitskin.com/themes/18/09/33/i_icon_pm.png"/><a href="/ucp.php?i=pm&mode=compose&u=' + linkname + '">Gửi tin nhắn

Unknown end tag for &lt;/a&gt;

<hr/>

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td><img src="http://hitskin.com/themes/18/09/33/i_icon_msnm.png"/><a href="/ucp.php?i=zebra&add=' + name + '">Thêm bạn thân

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td><img src="http://12b6.forum-viet.com/users/1214/94/30/93/album/wall10.png"/><a href="/ucp.php?i=zebra&mode=foes&add=' + name + '">Thêm kẻ thù

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td style="padding-right:5px;" colspan="2"><hr/>

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td><img src="http://hitskin.com/themes/18/09/33/i_icon_email.png"/><a href="/memberlist.php?mode=email&u=' + linkname + '">Gửi mail

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td><img src="http://12b6.forum-viet.com/users/1214/94/30/93/album/icon_s10.png"/><a href="/search.php?author_id=' + linkname + '&sr=posts">Xem bài viết

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

');$(this).click(function(){$(this).next().toggle();});$(this).attr('href','javascript:void(0);');});});


Unknown end tag for &lt;/script&gt;

```



Cho vào kiểu dáng các bạn đang sử dụng:

```

.drop {position:absolute;display:none;border:1px solid #ccc; border-radius:3px;background: #fff;width:220px}
.resizeavt img{max-height:50px;max-width:50px;}
```


Tự sửa lại cho đẹp nhé!