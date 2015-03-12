Demo: http://nguyendat.eazy.vn/viewtopic.php?f=2&t=2

Tạo bbcode và cho vào mod thông báo chung. Lưu ý là phải chèn thư viện jQ nếu chưa chèn. Hiệu quả mọi style.

```

<script type="text/javascript">$(function(){$(".author:first").each(function(){$(".content").each(function(){var $baivietquadai=$(this);if($(this).height()>500){$(this).css({'overflow':'hidden','max-height':'300px'});$('<hr/><span class="dai3"><b>Bài viết đã được thu gọn

Unknown end tag for &lt;/b&gt;

: 

Unknown end tag for &lt;/span&gt;

<a href="javascript:void(0);" class="dai1" title="Xem đầy đủ">Xem đầy đủ

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" class="dai2" style="display:none;" title="Thu gọn">Thu gọn

Unknown end tag for &lt;/a&gt;

').insertAfter(this);$('.dai1').click(function(){$baivietquadai.css({'overflow':'hidden','max-height':'100%'});$(".dai3").hide();$(this).hide();$(".dai2").show()});$('.dai2').click(function(){$baivietquadai.css({'overflow':'hidden','max-height':'300px'});$(".dai3").show();$(this).hide();$(".dai1").show()})}});});});

Unknown end tag for &lt;/script&gt;



```
Có thể chỉnh sửa cho đẹp mắt ;)
Code tự động thu gọn bài viết dài quá 500px, làm cho ngắn lại 300px và thêm dòng Bài viết đã được thu gọn, chỉ cần click vào nút Xem đầy đủ là hiện hết. Cũng như thế, click vào nút thu gọn thì nó sẽ thu gọn còn 300px.

Các chỉ số có thể thay đổi:
-- 500px : Độ dài tối đa, nếu bài viết dài quá con số này thì bài viết sẽ dc thu gọn
-- 300px : Độ dài sau khi được thu gọn, nên để nguyên.

Còn hiệu ứng khi đóng/mở thì các bạn tự nghiên cứu nhé ;))