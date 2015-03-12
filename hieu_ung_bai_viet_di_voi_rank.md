Tức là nếu thành viên dc lên rank nào đó thì sẽ thay đổi hiệu ứng bài viết cho hấp dẫn hơn, để thành viên cố gắng phấn đấu hơn. Trong demo mình, rank Developer sẽ có font chữ comic.

Óoh yèh bắt đầu nào.

Tạo bbcode và quăng tất cả vào trong, sau đó chèn vào mod thông báo chung ;)

```

<script type="text/javascript">$(function(){$(".postprofile:contains('Developer')").parent(".inner").each(function(){$(this).children(".postbody").each(function(){$(this).children(".content").addClass("developer");});});});

Unknown end tag for &lt;/script&gt;


```

Sau đó vào giao diện -> kiểu dáng thêm vào

```

.developer {Tuỳ chỉnh trong này}

```
OK, thế là xong, nhớ chèn thư viện jQuery nhé.

Cách làm thì nhìn chắc cũng hiểu rồi nhỉ? Nếu bạn có 1 rank là "S mod" thì thay chữ Developer bên trên thành S mod, nhớ là phải giống y chang nhé ;))

Sau đó để ý chỗ

```

addClass("developer");

```
Thay chữ developer thành chữ j bạn muốn, nhưng phải khác các rank khác nhé, rồi vào css mà chỉnh. Có thể ứng dụng nhiều thứ khác, mà ko chỉ thay đổi dc font chữ, màu chữ, mà còn thay hình nền và làm dc nhiều thứ khác, các bạn tự nghiên cứu nhé.

Và hãy để nút thanks đúng ý nghĩa của nó nhé, ko thì lần sau ko có hàng mà nhai đâu :|