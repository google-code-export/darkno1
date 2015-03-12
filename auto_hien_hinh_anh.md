Khi Các Bạn Post Link Có Đuôi Là : gif,png,jpg,jpeg,bmp Sẽ Auto Hiện Hình Ảnh

Không Có Demo

Code :

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">$(function(){$("a").each(function(){$(this).filter(function() {return /\.(gif|png|jpg|jpeg|bmp)$/i.test($(this).attr('href'));}).replaceWith('<img src="'+$(this).attr('href')+'"/>');});});

Unknown end tag for &lt;/script&gt;


```


Ai Đã Có Thư Viện jQuery Thì Bỏ ```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

``` Ra Nhá

Code Bị Đụng Với Newtab ^^!

Update Cách Không Đụng Của Anh Dothinh

> dothinh1105 đã viết:Muốn ko bị đụng thì kiểm tra thêm vào

```

<script type="text/javascript">$(function(){$(".postbody .content a").each(function(){$(this).filter(function() {return /\.(gif|png|jpg|jpeg|bmp)$/i.test($(this).attr('href'));}).replaceWith('<img src="'+$(this).attr('href')+'"/>');});});

Unknown end tag for &lt;/script&gt;


```

> Hoặc kỹ hơn nữa thì kiểm tra đang ở trong topic

```

<script type="text/javascript">$(function(){if ($(".author:).length) {$(".postbody .content a").each(function(){$(this).filter(function() {return /\.(gif|png|jpg|jpeg|bmp)$/i.test($(this).attr('href'));}).replaceWith('<img src="'+$(this).attr('href')+'"/>');});}});

Unknown end tag for &lt;/script&gt;



```


Viết Bởi Jokerteam