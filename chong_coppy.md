Ver 1 :

> Mình Đi Dạo Vài Forum Thấy Code Này Cũng Khá Nhiều Người Dùng Nên Mình Viết Tạm Sang jQuery Vì jQuery Ngắn Gọn Nhẹ Hơn Javadcript Rất Nhiều

> Tạo 1 Thẻ BBcode Với Mã HTML Là :
```

<script type="text/javascript">$(document).ready(function(){$(document).bind("contextmenu",function(){alert('Không Được Click Chuột Phải');return false;});});

Unknown end tag for &lt;/script&gt;



```

> Lưu ý Eazy Đã Add Thư Viện jQuery Vào Forum Nên Các Bạn Chỉ Cần Chèn Code Trên Là Chạy Được

> P/s : Tùy Biến Thế Nào Là Tùy Mọi Người Nhé !

> Note Thêm : Mong Các "PRO" Không Dìm Hàng Là Mình Mừng Lắm Rồi Không Cần Tks Đâu

> Update Cách Của A Dothinh

> dothinh1105 đã viết:Thích không cho bôi đen thì đây

```

<script type="text/javascript">$(function(){$(".content").mousedown(function(){return false})});

Unknown end tag for &lt;/script&gt;



```
> Thích alert thì thêm vào.

> Sửa lại 1 tí cho SONGOKU nhé, chỉ cần ko click dc chuột phải ở bài viết để ko bị copy thôi.

```

<script type="text/javascript">$(function(){$(".content").contextmenu(function(){return false});});

Unknown end tag for &lt;/script&gt;



```
> Thế này thôi là đủ ko click phải dc rồi, còn thích alert thì thêm vào.




> Viết bởi SONGOKU - Jokerteam



Code Dành Cho Chống Coppy 1 Phần Bài Viết

Cách Làm :
Cách sử dụng thẻ BBCode :
```

[coppytext]{TEXT}[/coppytext]
```
Mã HTML thay thế :

```

<div>{TEXT}

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">$(function(){$(".coppytext").parent().mousedown(function(){return false;}).contextmenu(function(){return false;});});

Unknown end tag for &lt;/script&gt;



```

Code Dành Cho Chống Coppy Cả Forum

Cách Làm :
Cách sử dụng thẻ BBCode :
```

[coppy-all][/coppy-all]
```
Mã HTML thay thế :

```

<script type="text/javascript">$(function(){$(document).mousedown(function(){return false;}).contextmenu(function(){return false;});});

Unknown end tag for &lt;/script&gt;



```

Update Log :

Ver 1.1

> Bỏ Alert Để Trình Duyệt Không Chặn Script