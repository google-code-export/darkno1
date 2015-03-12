Demo: http://12b6.eazy.vn vào 1 topic bất kỳ. Vì là khung reply nên tất nhiên phải đăng nhập mới thấy dc.

Với TUT này bạn sẽ ko cần phải click vào nút Trả lời nhanh nữa mà khung trả lời nhanh sẽ hiện ra luôn. Vĩnh biệt nút Trả lời nhanh nhé ;)

Cách làm: Tạo bbcode mới rồi bỏ vào mod thông báo chung, nhớ chèn thư viện jQ!

```

<script type="text/javascript">$(function(){$("#qr_editor_div").removeAttr('style');$(".content .submit-buttons input[value='Trả lời nhanh']").each(function(){$(this).parent().parent().parent().remove();});});

Unknown end tag for &lt;/script&gt;


```

Ai thích bỏ luôn chữ Ẩn trả lời nhanh để tránh nhấn nhầm thì dùng đoạn này:

```

<script type="text/javascript">$(function(){$("#qr_editor_div").removeAttr('style');$(".content .submit-buttons input[value='Trả lời nhanh']").each(function(){$(this).parent().parent().parent().remove();});$(".right-box").remove();});

Unknown end tag for &lt;/script&gt;



```
Code test tốt trên eazy style, các style khác nếu ko sử dụng dc, hãy rep tại đây. Và hãy để nút thanks có tác dụng!!!

---

Update cách 2:

```

<script>$(function(){if($(".author:first").length) {$(".panel").removeAttr('style');}});

Unknown end tag for &lt;/script&gt;


```

Với cách này thì có nhấn vào nút Ẩn trả lời nhanh thì cũng ko sao ;))

---

Cách của anh Việt K:

> Việt K đã viết:

```

<script>$(function(){hide_qr(1)});

Unknown end tag for &lt;/script&gt;


```

> hoặc kỹ hơn thì kiểm tra đang ở trong topic

```

<script>$(function(){if ($("[name='show_qr']").length) hide_qr(1)});

Unknown end tag for &lt;/script&gt;




```
> một cách khác:

```

<script>$(function(){$("form .panel").toggle();});

Unknown end tag for &lt;/script&gt;




```