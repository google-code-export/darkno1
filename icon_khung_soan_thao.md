![http://nu6.upanh.com/b4.s34.d2/11950394c5eba012796dab79cb92065e_53021916.demo1.png](http://nu6.upanh.com/b4.s34.d2/11950394c5eba012796dab79cb92065e_53021916.demo1.png)


Do khi mới tạo BBcode mình muốn hiện các BBcode ẩn nhưng tích vào ô hiện thì nó lại hiện IMG mất link nên bài viết này sẽ hướng dẫn các bạn tạo các icon trong khung soạn thảo bài viết đẹp mắt hơn.

Tạo BBcode vào dán vào Thông Báo Chung

BBcode:
```

<!------------------------------------>
<!---Icon Khung soạn thảo bài viết---->
<!---ChipTeam code by Jakub Lombard--->
<!------------------------------------>
<script type="text/javascript">
$(function () {
$(".toolbar").prepend('<img title="[zippyshare]sever , mã bài hát[/zippyshare]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[zippyshare]\', \'[/zippyshare]\')" class="button" src="http://www.megapic.vn/images/89395162451203858139.png" />&nbsp;<img title="[soundcloud]mã số bài hát[/soundcloud]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[soundcloud]\', \'[/soundcloud]\')" class="button" src="http://www.megapic.vn/images/44116643321084798224.png" />&nbsp;<img title="[zing=chiều rộng,chiều cao]Linh nhạc[/zing]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[zing=chiềurộng,chiềucao]\', \'[/zing]\')" class="button" src="http://www.megapic.vn/images/48808526977242733452.png" />&nbsp;<img title="Chèn link youtube có khung, chỉ lấy dòng chữ đằng sau link" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[youtube]\', \'[/youtube]\')" class="button" src="http://illiweb.com/fa/wysiwyg/logo_youtube.gif" />&nbsp;<img title="[mp3]Tất cả audio có đuôi .mp3[/mp3]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[mp3]\', \'[/mp3]\')" class="button" src="http://www.megapic.vn/images/72185123024199218338.png" /> <img src="http://12b6.eazy.vn/images/editor/seperator.gif"/>&nbsp;<img title="[khung=Link hình ảnh nhỏ,Nguồn bài viết]Nội dung bài viết[/khung]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[khung=Link hình ảnh nhỏ,Nguồn bài viết]\', \'[/khung]\')" class="button" src="http://www.megapic.vn/images/53013604313209672731.png" />')
});

Unknown end tag for &lt;/script&gt;


```

```


title="[khung]Nội dung bài viết[/khung]"```

Cái chỗ này là khi di chuột vào icon nó sẽ hiện ra hướng dẫn...

Các bạn chỉ chỉnh chỗ
(\'[khung](khung.md)\', \'[/khung]\')
Thay bằng tên BBcode của bạn....

Ngoài ra: Có một số icon mình đã làm và lấy trên mạng. nhớ là khi chèn vào kích cỡ là 16 x 16px nhé.
![http://www.megapic.vn/images/89395162451203858139.png](http://www.megapic.vn/images/89395162451203858139.png)
![http://www.megapic.vn/images/44116643321084798224.png](http://www.megapic.vn/images/44116643321084798224.png)
![http://illiweb.com/fa/wysiwyg/logo_youtube.gif](http://illiweb.com/fa/wysiwyg/logo_youtube.gif)

Cái ảnh này là ảnh ngăn cách giống |
![http://12b6.eazy.vn/images/editor/seperator.gif](http://12b6.eazy.vn/images/editor/seperator.gif)
Hình ảnh

Ví dụ có 2 icon hay nhiều icon nhưng các bạn ko muốn mất diện tích của code trên thì chỉ việc lặp chỗ img. Ví dụ: BBcode khung và BBcode Zippyshare
```

<img title="[khung]Nội dung bài viết[/khung]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[khung]\', \'[/khung]\')" src="http://www.megapic.vn/images/53013604313209672731.png" />&nbsp;<img title="[zippyshare]sever , mã bài hát[/zippyshare]" width="16" height="16" onmouseout="outIcon(this)" onmouseover="overIcon(this)" onclick="comm._HTML(\'[zippyshare]\', \'[/zippyshare]\')" class="button" src="http://www.megapic.vn/images/89395162451203858139.png" />&nbsp;
```
Cái này &nbsp; là dấu cách.