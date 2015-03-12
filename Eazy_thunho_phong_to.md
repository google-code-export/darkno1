```

<script type="text/javascript">
$(function(){$(".postbody .content img").click(function(){$(this).toggleClass("c3resize")})});

Unknown end tag for &lt;/script&gt;


```

> Bước 2: Vào Giao diện => Kiểu dáng => Sửa style, thêm vào cuối :

```

.postbody .content img{max-width:300px}
.postbody .content img.c3resize{max-width:100%}

```
sửa 300px tùy ý
```


Mã: Chọn tất cả
<script type="text/javascript">$(function(){$(".postbody .content img").each(function(){if ($(this).height() > 600 || $(this).width() > 600) {$(this).css({'max-width' : '400px', 'max-height' : '400px'});$(this).before('<a href="javascript:void(0);" class="phongto">Click để xem kích thước thật

Unknown end tag for &lt;/a&gt;

');}});$(".phongto").click(function(){$(this).next().css({'max-width' : '100%', 'max-height' : '100%'});});});

Unknown end tag for &lt;/script&gt;

```