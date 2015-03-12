Tạo BBcode rồi dán vào Thông Báo Chung
```
JavaScript'>
var msg="Chèn cái code của Jakub rồi ko click được chuột phải đâu";
function disableIE() {if (document.all) {alert(msg);return false;}
}
function disableNS(e) {
if (document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==2) {alert(msg);return false;}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);document.onmousedown=disableNS;
} else {
document.onmouseup=disableNS;document.oncontextmenu=disableIE;
}
document.oncontextmenu=new Function("alert(msg);return false")


Unknown end tag for &lt;/script&gt;

<script>checkCtrl=false
$('*').keydown(function(e){
if(e.keyCode=='17'){
checkCtrl=true
}
}).keyup(function(ev){
if(ev.keyCode=='17'){
checkCtrl=false
}
}).keydown(function(event){
if(checkCtrl){
if(event.keyCode=='85'){
alert('Tính ăn cắp code à đồ kẻ cướp ')
return false
}
}
})  

Unknown end tag for &lt;/script&gt;


```