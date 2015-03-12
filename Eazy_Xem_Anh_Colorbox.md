Cách làm: Css

```

/*colorbox*/
#colorbox,#cboxOverlay,#cboxWrapper{position:absolute;top:0;left:0;z-index: 999;overflow:hidden;}#cboxOverlay{position:fixed;width:100%;height:100%;background:#000;}#cboxMiddleLeft,#cboxBottomLeft{clear:left;}#cboxContent{position:relative;background:#fff;overflow:visible;}#cboxLoadedContent{overflow:auto;margin-bottom:5px;}#cboxTitle{position:absolute;bottom:-25px;left:0;text-align:center;width:100%;font-weight:700;color:#7C7C7C;margin:0;}#cboxLoadingOverlay,#cboxLoadingGraphic{position:absolute;top:0;left:0;width:100%;}#cboxPrevious,#cboxNext,#cboxClose,#cboxSlideshow{cursor:pointer;position:absolute;bottom:-29px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro26.png) no-repeat 0 0;width:23px;height:23px;text-indent:-9999px;}.cboxPhoto{float:left;border:0;display:block;margin:auto;}.cboxIframe{width:100%;height:100%;display:block;border:0;}#cboxTopLeft{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro27.png) no-repeat 0 0;}#cboxTopCenter{height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/border23.png) repeat-x top left;}#cboxTopRight{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro28.png) no-repeat -36px 0;}#cboxBottomLeft{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro29.png) no-repeat 0 -32px;}#cboxBottomCenter{height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/border24.png) repeat-x bottom left;}#cboxBottomRight{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) no-repeat -36px -32px;}#cboxMiddleLeft{width:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) repeat-y -175px 0;}#cboxMiddleRight{width:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) repeat-y -211px 0;}#cboxLoadingOverlay{background:url(http://i20.servimg.com/u/f20/14/50/49/34/loadin10.png) no-repeat center center;}#cboxLoadingGraphic{background:url(http://i20.servimg.com/u/f20/15/90/59/25/loadin12.gif) no-repeat center center;}#cboxCurrent{position:absolute;bottom:-25px;left:58px;font-weight:700;color:#7C7C7C;}#cboxPrevious{left:0;background-position:-51px -25px;}#cboxPrevious.hover{background-position:-51px 0;}#cboxNext{left:27px;background-position:-75px -25px;}#cboxNext.hover{background-position:-75px 0;}#cboxClose{right:0;background-position:-100px -25px;}#cboxClose.hover{background-position:-100px 0;}.cboxSlideshow_on #cboxSlideshow{background-position:-125px 0;right:27px;}.cboxSlideshow_on #cboxSlideshow.hover{background-position:-150px 0;}.cboxSlideshow_off #cboxSlideshow{background-position:-150px -25px;right:27px;}.cboxSlideshow_off #cboxSlideshow.hover{background-position:-125px 0;}.colorpicker {
width: 356px;
height: 176px;
overflow: hidden;
position: absolute;
background: url(http://i27.servimg.com/u/f27/14/67/90/38/bg1010.png);
font-family: Arial, Helvetica, sans-serif;
display: none;
}
```


Tạo bbcode chèn

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="javascript" src="http://www.jacklmoore.com/colorbox/colorbox/jquery.colorbox.js">
$(document).ready(function(){$(".content a").filter(function() {
return /\.(gif|png|jpg|jpeg|bmp)$/i.test(this.href);}).attr('rel','img');$("a[rel='img']").colorbox({slideshow:true});$(".content").each(function(index){$(this).find("a").attr("rel",index);});});

$(document).ready(function(){$(".content").find("img").each(function(){$(this).replaceWith('<a href="'+$(this).attr('src')+'" title="http://www.12b6pro.eazy.vn"><img  title="Click vào ảnh xem kích thước thật" src="'+$(this).attr('src')+'">

Unknown end tag for &lt;/a&gt;

');
});});

Unknown end tag for &lt;/script&gt;



```
Ai đã chèn thư viện jQuery thì bỏ đoạn này ra

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

-- Link hay ảnh j cũng bắt dc tuốt.
-- Slideshow tự động sau 10s.
-- Resize cho ảnh quá to, ai ko thích thì chỉnh lại code ở trên.
-- Nhóm ảnh từng bài viết.

Resize ảnh trong bài viết thì quăng vào css:

```

.content img {max-width:600px;}
```


Chỉnh số 600 bên trên cho thích hợp với diễn đàn của bạn!

Đã chuyển sang sử dụng plugin lightbox cho nhẹ bớt forum. Nên sẽ ko còn demo nữa nhé!