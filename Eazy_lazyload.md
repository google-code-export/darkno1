Nếu đã có, mod xoá dùm.

Trước tiên, phải giới thiệu cái đã. Lazyload là hiệu ứng hiện ảnh khi cuộn chuột đến. Tức là nếu có 1 topic với hàng trăm img, thì bạn phải chờ nó load lâu, rất lâu. Nhưng với lazyload, nó sẽ ko load tấm nào nếu bạn ko cuộn đến nó, trước khi dc load nó sẽ dc thay thế bằng 1 ảnh rất nhẹ, ảnh trống hoặc là 1 ảnh loading nho nhỏ nào đó cho đẹp. Cái này mà kết hợp với hiệu ứng loading mình đã share ở topic: viewtopic.php?f=67&t=20147 thì tuyệt ;;) ;;) ;;) ;;)

Tất nhiên là phải đề mô cái đã: http://12b6.eazy.vn/viewtopic.php?f=27&t=7 (Cuôn chuột từ từ xuống để nhìn kỹ hơn nhé ;)
Thêm cái demo nữa cho bạn trẻ nào hiếu kỳ: http://12b6.eazy.vn/viewtopic.php?f=27&t=6 ;))

Cách làm: Tạo BBcode rồi quăng cả cái này vào trong, hiệu quả mọi style.

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="javascript">(function($){$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options)}var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear")}else{if(counter++>settings.failurelimit){return false}}});var temp=$.grep(elements,function(element){return!element.loaded});elements=$(temp)})}this.each(function(){var self=this;if(undefined==$(self).attr("original")){$(self).attr("original",$(self).attr("src"))}if("scroll"!=settings.event||undefined==$(self).attr("src")||settings.placeholder==$(self).attr("src")||($.abovethetop(self,settings)||$.leftofbegin(self,settings)||$.belowthefold(self,settings)||$.rightoffold(self,settings))){if(settings.placeholder){$(self).attr("src",settings.placeholder)}else{$(self).removeAttr("src")}self.loaded=false}else{self.loaded=true}$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))[settings.effect](settings.effectspeed);self.loaded=true}).attr("src",$(self).attr("original"))}});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear")}})}});$(settings.container).trigger(settings.event);return this};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop()}else{var fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft()}else{var fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).scrollTop()}else{var fold=$(settings.container).offset().top}return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).scrollLeft()}else{var fold=$(settings.container).offset().left}return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">$(function(){
$(".content img").lazyload({
effect: "fadeIn",
placeholder: "http://illiweb.com/fa/empty.gif",
overflow: scroll
});
});

Unknown end tag for &lt;/script&gt;



```
Ai đã chèn thư viện jQuery thì bỏ đoạn này ra.

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```
Ở đây mình thay ảnh chưa load bằng 1 ảnh trống, ai ko thích có thể thay đổi bằng 1 ảnh loading nho nhỏ, nhưng nhẹ thôi nhé :|
Tìm và thay thế link ảnh:

```

http://illiweb.com/fa/empty.gif

```

Ai làm dc thì nhấn nút thanks nho nhỏ bên trên dùm nhé ;)