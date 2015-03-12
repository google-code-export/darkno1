- Các bạn đang sở hữu Style XenBB
- Các bạn muốn nó trở nên sinh động hơn và 1 cái banner là điều tuyệt vời :D

Demo:
![http://i79.servimg.com/u/f79/17/61/77/59/anh_ch14.png](http://i79.servimg.com/u/f79/17/61/77/59/anh_ch14.png)

Hướng Dẫn:

B1: Vào ACP >> Kiểu Dáng >> Tìm đoạn:
```

.headerbar {
color: #444;
height: 244px;
background: rgba(0, 0, 0, 0.52);
padding-top: 13px;
margin-top: -13px;
}
```


Một số forum sẽ có thông số khác nhưng ko sao chỉ cần tìm đoạn đó là được

B2: Thay đổi link ảnh trên đó bằng cách tìm:

```

background: rgba(0, 0, 0, 0.52);

```

của đoạn code trên

Chỗ:
```

rgba(0, 0, 0, 0.52);

```

Sửa lại thành:

```

url(Link Ảnh) no-repeat top center;
```


Thay
```

Link Ảnh
```
trên bằng link ảnh của bạn

B3: Chỉnh kích thước banner (Lưu ý: Chiều rộng phải là 1024px, Chiều cao thì tùy các bạn !)

Chỗ

```

height: 244px;
```
các bạn sửa lại thành Chiều Cao Banner Của Bạn