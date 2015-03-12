Như các bạn đã biết, khi tạo 1 bbcode mới mà để cho nó hiện ở thanh toolbar thì nó sẽ bị lỗi cái ảnh ở đó, vì vậy đa phần các bạn sẽ phải nhớ mà ko thể để nó lên thanh toolbar, vừa ko biết nó là nút gì vừa mất thẩm mĩ.

Cách thay link ảnh:
Bước 1: Trong tab Gửi bài -> Tuỳ biến thẻ BBcode
Xem ở cột Thẻ BBcode cái tên của BBcode mới.
Ví dụ

```

[note][/note]
```

Thì tên của BBcode này này note.
Bước 2: Tạo 1 bbocde mới rồi chèn vào mod thông báo chung. Nhớ chèn thư viện jQuery nếu chưa chèn!

```

<script stype="text/javascript">$(function(){$(".toolbar img[alt='tên BBcode']").attr('src','link ảnh');});

Unknown end tag for &lt;/script&gt;


```

-> Done

Muốn thêm hình cho 1 code mới thì thêm 1 đoạn

```

$(".toolbar img[alt='tên BBcode']").attr('src','link ảnh');
```

Và box Thư viện Eazy đã dc mở nút thanks >:D<