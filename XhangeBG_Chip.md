Đây là Code change background bằng link đây là code pro nhưng chưa hẳng là pro vì nó chưa áp dụng được chức năng lưu cookie , nên đây chỉ là bản trial cho mọi người thôi ^^ team sẽ cố gắn tiếp tục phát triển code .

Bản Quyền : ChipTeam - Byn.Pro ( http://forum.ckip.us )


Code Và Css :

Code :

```

<script type="text/javascript">
//ChangeBgChip
$(function () {
$("#custom_submit").click(function () {
var chipbg = $("#custom_input").val();
$("body").css("background-image", "url('" + chipbg + "')");
});
});

Unknown end tag for &lt;/script&gt;



<div class="bodycb"><div id="custom_url"><input type="text" id="custom_input" value="Link Image…" onclick="if(this.value=='Link Image…')this.value='';" onblur="if(this.value=='')this.value='Link Image…';"><strong id="custom_submit">Change

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



```


Css :

```

/* Tùy chọn hình nền - ChipTeam */

#custom_url{clear:left;padding:5px;;text-align:center}

#custom_input{
background: white;
border: 1px solid #D7D7D7;
font-style: italic;
color: #999;
font-size: 13px;
box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
-webkitbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
border-radius: 2px 0 0 2px;
-moz-border-radius: 2px 0 0 2px;
-webkit-border-radius: 2px 0 0 2px;
font-family: Calibri,'Trebuchet MS',Verdana,Geneva,Arial,Helvetica,sans-serif;
outline: none;
padding: 6px;
}

#custom_submit{
cursor: pointer;
background: #F1F1F1 url('http://www.4tvn.com/styles/uniform/xenforo/gradients/category-23px-light.png') repeat-x top;
border: 1px solid #D7D7D7;
border-radius: 0 2px 2px 0;
-moz-border-radius: 0 2px 2px 0;
-webkit-border-radius: 0 2px 2px 0;
color: #999;
padding: 6px;
font-family: Calibri,'Trebuchet MS',Verdana,Geneva,Arial,Helvetica,sans-serif;
font-size: 13px;
margin-right: -2px;
border-left: none;
}

.bodycb {
margin: 10px;
box-shadow: 0 0 5px rgba(0,0,0,0.1);
background-color: #fff;
width: 720px;
padding: 10px;
}
```