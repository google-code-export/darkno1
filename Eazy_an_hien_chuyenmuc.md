```

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript" src="http://www.coo.vn/out/users/c3zone/js/eazycollapse.js">

Unknown end tag for &lt;/script&gt;


```

> Nếu đã có sẵn jquery thì chỉ cần dòng này thôi :

```

<script type="text/javascript" src="http://www.coo.vn/out/users/c3zone/js/eazycollapse.js">

Unknown end tag for &lt;/script&gt;


```

> Bước 2:
> Vào Giao diện => Kiểu dáng => Sửa style, thêm vào cuối :

```

.c3inv{display:none!important}.c3zone{float:right;padding:5px}
.c3zone i{display:block;cursor:pointer;
width:13px;height:13px;background:url(http://www.qhonline.info/forum/qh_img/buttons/collapse_40b.png)}
.c3zone i.c3show{background:url(http://www.qhonline.info/forum/qh_img/buttons/collapse_40b_collapsed.png)}


```

Tùy chỉnh, tìm trong code và sửa tùy ý:

http://www.qhonline.info/forum/qh_img/b ... se\_40b.png
http://www.qhonline.info/forum/qh_img/b ... lapsed.png
/**Đây là link ảnh mở và đóng, thay lại bằng link của bạn, mình tách ra đây chứ không chèn trực tiếp để tiện chỉnh sửa và có thể dùng sprites nếu thích**/

width:13px;height:13px;
/**đây là chiều rộng, cao của ảnh, sửa lại cho phù hợp với ảnh của bạn**/

padding:5px
/**đây là khoảng cách từ ảnh đến lề. sửa cho phù hợp với chiều cao của thanh tiêu đề mỗi chuyên mục**/

P/s: Code chay chứ chưa test trên forum thật, test bằng tool thì thấy ổn. Ai thử dù được hay không cũng rep ở đây giúp mình nhá. Lỗi thì fix, ổn thì làm demo