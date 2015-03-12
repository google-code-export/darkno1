![http://img805.imageshack.us/img805/6559/nhchpmnhnh2013052117455.png](http://img805.imageshack.us/img805/6559/nhchpmnhnh2013052117455.png)

• Chức năng :
- Thay đổi Scrollbar
- Ứng dụng scrollbar toàn 4rum
- Không gây lag đâu nha vì code hoàn toàn làm bằng css ^^

```
    /* Scrollbar ChipTeam */::-webkit-scrollbar-thumb {background-color: rgba(0,0,0,.2);background-clip: padding-box;border: solid transparent;border-width: 1px 1px 1px 2px;min-height: 28px;padding: 100px 0 0;box-shadow: inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);}::-webkit-scrollbar-corner {background: transparent;}::-webkit-scrollbar-track {background-clip: padding-box;border: solid transparent;border-width: 0 0 0 4px;}::-webkit-scrollbar-button {height: 0;width: 0;}::-webkit-scrollbar {height: 16px;overflow: visible;width: 16px;}body::-webkit-scrollbar-track-piece {background-clip: padding-box;background-color: #f5f5f5;border-width: 0 0 0 3px;box-shadow: inset 1px 0 0 rgba(0,0,0,.14),inset -1px 0 0 rgba(0,0,0,.07);opacity: 0.80;}body::-webkit-scrollbar-corner {background-clip: padding-box;background-color: #f5f5f5;border-width: 3px 0 0 3px;box-shadow: inset 1px 1px 0 rgba(0,0,0,.14);opacity: 0.80;}```