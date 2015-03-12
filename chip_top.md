Code & CSS :


```

<button class="go-top">

Unknown end tag for &lt;/button&gt;


<script type="text/javascript">$(function($) {$(window).scroll(function(){
el = $('.go-top');
if($(window).scrollTop() == 0){
el.stop().animate({right:-70},400);
}else{
el.stop().animate({right:20},400);
}
});

$('.go-top').click(function(){
$('body,html').animate({scrollTop:0},500);
});

});

Unknown end tag for &lt;/script&gt;


```



Css :

```

.go-top {
border-radius: 3px;
box-shadow: 0 0 3px rgba(0,0,0,0.2);
width: 60px;
height: 60px;
background: url(http://img600.imageshack.us/img600/1706/gotop.png) no-repeat center center #fff;
display: block;
position: fixed;
bottom: 20px;
right: -70px;
z-index: 20;
cursor: pointer;
border: none;
}
```