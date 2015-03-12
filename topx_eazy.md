Dựa trên dữ liệu lấy từ Eazy API(phiên bản đầu tiên), kTopx sẽ tạo ra cho forum bạn 1 mục thống kê chuyên nghiệp giống các forum VBB.
Demo : ![http://a.imageshack.us/img842/9797/chiplovebiz13062012b.jpg](http://a.imageshack.us/img842/9797/chiplovebiz13062012b.jpg)
Demo online: http://designs.eazy.vn
Cài đặt :
Truy cập vào http://plugin.hnsv.com/sinhvat/stat/create.html và điền các mục như sau :(các hướng dẫn bên dưới có thể xem tại trang trên bằng cách rê chuột lên từng ô)
![http://a.imageshack.us/img225/443/chiplovebiz13062012m.jpg](http://a.imageshack.us/img225/443/chiplovebiz13062012m.jpg)
- Tên forum : Nhập tên forum bạn
- Chuyên mục không thống kê: Nhập ID của các chuyên mục bạn không muốn hiện trên kTopx, nếu nhiều chuyên mục thì phân cách bằng dấu phẩy (,)
- Chuyên mục không thống kê: Nhập ID của các thành viên bạn không muốn hiện trên kTopx, nếu nhiều thành viên thì phân cách bằng dấu phẩy (,)
- Số lượng: Chọn số lượng mặc định
- Chỉ hiện ở trang chủ: Chọn có nếu muốn thống kê chỉ hiện ở trang chủ
- Tùy biến tabs(tạo thống kế cho từng box riêng, như các mục thông báo, học tập trong demo):
+ Trên 1 hàng bạn nhập ô đầu tiên là ID, nếu nhiều thì phân cách bằng dấu phẩy như trên
+ Ô thứ 2 là tên của Tabs, bạn thích đặt gì thì tùy :)
- Bấm Tạo kTopx
- Sẽ xuất hiện 2 khung
+ BBCODE: tạo bbcode mới [ktopx](ktopx.md)[/ktopx] với nội dung trong khung rồi dán vào MOD thông báo chung
• trong code có đoạn

```

var ktopx_insert='.inner:eq(0)';
var ktopx_hide='.inner:eq(0)';
```

Thay 2 số tăng dần 2 giá trị của 2 số 0 đến khi tìm được giá trị phù hợp cho forum bạn
• ý nghĩa :
+ Số 0 đầu tiên : Vị trí chèn của kTopx trên trang chủ
+ Số 0 cuối cùng: Vị trí của Topx có sẵn (thay đổi tới khi Topx cũ bị mất)
• Với subsilver thì là cặp 0-0
• Eazy Style(test trên lab.eazy.vn) là 1-1

+ CSS: thêm vào cuối phần kiểu dáng của bạn đoạn code trong khung
bạn có thể tùy biến phần này cho hợp với forum của mình
![http://a.imageshack.us/img716/6890/chiplovebiz13062012d.jpg](http://a.imageshack.us/img716/6890/chiplovebiz13062012d.jpg)
-- Lưu ý : Không dùng cho forum HNSV
-- Lấy ID của chuyên mục :
+ Link chuyên mục là http://designs.eazy.vn/viewforum.php?f=4 ==> ID=4
+ Chuyên mục, không phải là nhóm chuyên mục nha
-- Lấy ID của thành viên:
+ Trang cá nhân của thành viên là http://designs.eazy.vn/memberlist.php?m ... file&u=328 ==> ID: 328
-- Phải có đủ khả năng mới edit lại code. Mình không chịu trách nhiệm cho bất cứ sự sai sót nào từ việc edit của các bạn
Hết . Chúc các bạn thành công

```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script src="http://plugin.hnsv.com/sinhvat/stat/main.js">

Unknown end tag for &lt;/script&gt;


<script>
var ktopx_insert='.inner:eq(0)';
var ktopx_hide='.inner:eq(0)';


Unknown end tag for &lt;/script&gt;


<style>
#ktopx{text-align:left; background: #fff}
#ktopx td{white-space:nowrap}
#ktopx #box_3 tr > td{padding:8px}
#ktopx .line{background:none repeat-x scroll 0 0 #E9E9E9;border-top:1px solid #CECECE;color:#3E3E3E;height:5px;padding:4px 10px}
#ktopx .line a{color:#3E3E3E}
#ktopx .active a{color:red}
#ktopx #box_1 tr > td,#box_2 tr > td{padding:0}
#ktopx .list tr > td{border-bottom:1px dashed #CFCFCF}


Unknown end tag for &lt;/style&gt;


<div id="ktopx">
<div>
<h2>
<table class="tablebg" width="100%">
<tbody>
<tr class="cat">
<td width="100%">
<b>Thống kê điễn đàn Designs.Eazy.Vn

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/td&gt;


<td style="font-size:10px">
Số lượng
<select id="soluong" title="Result">
<option value="05">05

Unknown end tag for &lt;/option&gt;

<option value="10">10

Unknown end tag for &lt;/option&gt;

<option value="15">15

Unknown end tag for &lt;/option&gt;

<option value="20">20

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;


&nbsp;<b><a href="javascript:kthongke.reload();">Tải lại

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<table width="100%">
<tbody>
<tr>
<td class="line">Thành viên mới

Unknown end tag for &lt;/td&gt;


<td id="list" class="line">
<span><a title="Thành viên mới" class="active" href="javascript:kthongke.topic('10','./eazy-api.php?get=topic&sortf=date&sorto=desc&num=');">Bài mới

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


| <span><a href="javascript:kthongke.topic('10','./eazy-api.php?get=topic&sortf=views&sorto=desc&num=');">Xem nhiều

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


| <span><a href="javascript:kthongke.topic('10','./eazy-api.php?get=topic&sortf=date&sorto=desc&forum=4&num=');">Thông báo

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


| <span><a href="javascript:kthongke.topic('10','./eazy-api.php?get=topic&sortf=date&sorto=desc&forum=42,28&num=');">Học tập

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td width="200px" valign="top">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tbody style="display:none" id="loading_box_1"><tr><td>Đang tải...

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody id="box_1">

Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;


<td valign="top" style="padding: 6px; border-left: 1px dashed #c1c1c1;" rowspan="3">
<table width="100%" height="198" cellspacing="0" cellpadding="4" border="0">
<tbody class="list">
<tr height="1">
<td><i>Bài viết

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/td&gt;


<td><i>Gửi bởi

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/td&gt;


<td><i>Trả lời

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/td&gt;


<td><i>Xem

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/td&gt;


<td><i>Chuyên mục

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;


<tbody valign="top" style="display:none" id="loading_box_3"><tr><td>Đang tải...

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody valign="top" id="box_3">

Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="line">Thành viên tích cực

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td width="200px" valign="top">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tbody style="display:none" id="loading_box_2"><tr><td>Đang tải...

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody id="box_2">

Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;

```