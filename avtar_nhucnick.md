![http://i79.servimg.com/u/f79/17/61/77/59/anh_ch20.png](http://i79.servimg.com/u/f79/17/61/77/59/anh_ch20.png)
Code sử dụng trên Giao Diện EazyStyle Sidebar :D

B1: ACP >> Giao Diện >> Kiểu Dáng >> tìm:
```

.eazy-avatar:hover {
-webkit-transform: scale(1.2, 1.2);
-moz-transform: scale(1.2, 1.2);
-o-transform: scale(1.2, 1.2);
-ms-transform: scale(1.2, 1.2);
transform: scale(1.2, 1.2);
}

```

xóa nó đi

B2: Thêm vào đoạn code vừa xóa đoạn code sau:

```

eazy-avatar {
max-width:110px;
background-color:beige;
border:1px solid #FFCC33;
-moz-border-radius:5px;
-webkit-border-radius:5px;
border-radius:5px;
padding:8px;
-webkit-transform: rotate(-4deg);
-moz-transform: rotate(-4deg);
transform: rotate(-4deg);
-moz-box-shadow:2px 2px 10px rgba(0,0,0,0.2);
-webkit-box-shadow:2px 2px 10px rgba(0,0,0,0.2);
box-shadow:2px 2px 10px rgba(0,0,0,0.2);
}

eazy-avatar:hover {
-webkit-transform: rotate(0deg);
-moz-transform: rotate(0deg);
transform: rotate(0deg);
}


.eazy-avatar img {
max-width:110px;
background-color:beige;
border:1px solid #FFCC33;
-moz-border-radius:5px;
-webkit-border-radius:5px;
border-radius:5px;
padding:8px;
-webkit-transform: rotate(-4deg);
-moz-transform: rotate(-4deg);
transform: rotate(-4deg);
-moz-box-shadow:2px 2px 10px rgba(0,0,0,0.2);
-webkit-box-shadow:2px 2px 10px rgba(0,0,0,0.2);
box-shadow:2px 2px 10px rgba(0,0,0,0.2)
}
.eazy-avatar img:hover{
-webkit-transform: rotate(0deg);
-moz-transform: rotate(0deg);
transform: rotate(0deg)}
```


Xong rồi đấy . Chúc các bạn vui vẻ ;)