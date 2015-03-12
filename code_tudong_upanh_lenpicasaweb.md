Hiện tại Photobucket đã thay đổi không còn cho up ảnh mà vẫn giữ nguyên tên file ảnh nữa. Do đó dịch vụ up ảnh picasa của google là lựa chọn tốt nhất

Ưu điểm:
- Nhanh (Chắc là nhanh nhất trong các dịch vụ up ảnh miễn phí)
- Cho phép up ảnh nhưng vẫn giữ nguyên tên file ảnh
- Có công cụ upload và quản lý ảnh riêng
- Dễ dàng đăng ký và sử dụng
- Không giới hạn số lượng ảnh up (1G lưu trữ) và lưu lượng sử dụng
....

Nhược điểm
- Khó lấy link ảnh
...

Và hôm này mình share một code sưu tầm được trên mạng giúp các bạn giải quyết được vấn đề đó với nhiều ưu điểm
- Up ảnh trực tiếp lên picasa từ máy tính hoặc URL
- Không cần đăng nhập
- Lấy link ảnh trực tiếp (BBcode, html, direct link, ...)
- Có thể làm trang up ảnh diễn đàn
- Có đóng dấu ảnh

Demo:

> http://code.lieuclub.com/upanh





Và code đây:



> http://www.mediafire.com/?6v7v284a162wcpd



Hướng dẫn:

- Kiếm 1 host Free và đăng ký 1 nick của riêng bạn (host hỗ trợ php nhá )

- Vào https://picasaweb.google.com/ đăng nhập bằng nick google, tạo 1 album ảnh và set public cho tất cả mọi người






https://lh4.googleusercontent.com/-vpx7XwthpeA/UHza7h6N7RI/AAAAAAAAAO8/8A4cW40iQKw/Lieuclub.com-1.JPG

![https://lh5.googleusercontent.com/-E85oFjEvxAQ/UHza9iGGELI/AAAAAAAAAPI/7OrbFr8x9LA/Lieuclub.com-2.jpg](https://lh5.googleusercontent.com/-E85oFjEvxAQ/UHza9iGGELI/AAAAAAAAAPI/7OrbFr8x9LA/Lieuclub.com-2.jpg)




Tiếp theo lấy ID album ảnh bằng RSS





![https://lh6.googleusercontent.com/-PIgOGepcXTg/UHza_APZdsI/AAAAAAAAAPM/zWrCkdqNm8M/Lieuclub.com-3.jpg](https://lh6.googleusercontent.com/-PIgOGepcXTg/UHza_APZdsI/AAAAAAAAAPM/zWrCkdqNm8M/Lieuclub.com-3.jpg)

![https://lh6.googleusercontent.com/-_3qDYoE2VgA/UHzbliIr4EI/AAAAAAAAAPk/Wk2qYHDEC4o/s1024/Lieuclub.com-4.jpg](https://lh6.googleusercontent.com/-_3qDYoE2VgA/UHzbliIr4EI/AAAAAAAAAPk/Wk2qYHDEC4o/s1024/Lieuclub.com-4.jpg)

![https://lh6.googleusercontent.com/-cpbroU2EfGM/UHzbkAQBiMI/AAAAAAAAAPg/rxkug-2WHAI/s1024/Lieuclub.com-5.jpg](https://lh6.googleusercontent.com/-cpbroU2EfGM/UHzbkAQBiMI/AAAAAAAAAPg/rxkug-2WHAI/s1024/Lieuclub.com-5.jpg)


![https://lh4.googleusercontent.com/-TVEWTxc7Q4E/UHza6YkeoJI/AAAAAAAAAO4/KtUp-9R2Qik/Lieuclub.com-6.jpg](https://lh4.googleusercontent.com/-TVEWTxc7Q4E/UHza6YkeoJI/AAAAAAAAAO4/KtUp-9R2Qik/Lieuclub.com-6.jpg)







Cuối cùng sửa file config cho đúng với site bạn

```

set_time_limit(0);
define('DIR', dirname(__FILE__));
$user = "lieuclub";//dia chi email cua ban
$pass = "123456";//password email cua ban
$albumId = "15454245484";//Album ID
$sitename = 'Lieuclub.com';
$images_in_slide = 25;
$max_images_size = 10; //Dung luong toi da co the upload
?>
```


- Sau khi sửa up tất cả file trong thư mục upanh lên
- Vào thử và cảm nhận

Chúc vui