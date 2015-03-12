Code mình cũng đã ko còn dùng và cũng ko cần dùng vì forum mình là forum lớp ^^

![http://np7.upanh.com/b3.s28.d3/a4205c1d102e04c397ab295622bba4bd_48474657.dienvietnam.jpg](http://np7.upanh.com/b3.s28.d3/a4205c1d102e04c397ab295622bba4bd_48474657.dienvietnam.jpg)

Ai làm được thì reply topic cho mình 1 cái demo sống nhé!

Tạo bbcode và phang hết đoạn này vào.


```

<script type="text/javascript" src="http://ajax.Googleapis.com/ajax/libs/jquery/1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">$(function(){$('<center><a href="link quảng cáo"><img src="link ảnh"/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;

').insertAfter(".forabg:first");});

Unknown end tag for &lt;/script&gt;



```

Trong đó

```

.forabg:first

```
Là vị trí đặt quảng cáo. Để di chuyển quảng cáo hoặc đặt quảng cáo vào vị trí khác, có các vị trí.
1/ Vị trí đầu tiên

```

.forabg:first
```

hoặc

```

.forabg:eq(0)

```
2/ Vị trí tiếp theo

```

.forabg:eq(1);
```

Và cứ như thế, thay vị trí thì thay con số 1

VD: vị trí thứ 2 thì có code

```

.forabg:eq(1)

```
Vị trí thứ 3:

```

.forabg:eq(2)

```

Vị trí được đếm từ trên xuống, nên viewsource để nắm rõ thứ tự.

we\_clearblue:

```

<script type="text/javascript" src="http://ajax.Googleapis.com/ajax/libs/jquery/1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">$(function(){$('<center><a href="link quảng cáo"><img src="link ảnh"/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;

').insertAfter(".forums-wrapper:first");});

Unknown end tag for &lt;/script&gt;




```
Xem thứ tự trên eazy style

Chèn thư viện jQuery nếu ai chưa chèn.

Ai dùng style khác mà ko làm dc, hay reply tại đây, mình sẽ làm cho style đó. Ai làm đc hãy nhấn thanks ;)