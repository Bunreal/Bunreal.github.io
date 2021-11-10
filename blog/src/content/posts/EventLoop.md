---
title: "究竟什麼是 Event Loop"
date: 2021-11-10T23:41:24+08:00
draft: false
summary: "exercise"
categories: ["Code"]
comments: true
---

# 究竟什麼是 Event Loop？

## 資料來源

[所以說 event loop 到底是什麼玩意兒？| Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=emb_title)
[到底 Event Loop 關我啥事？](https://medium.com/infinitegamer/why-event-loop-exist-e8ac9d287044)
[Javascript 的事件循環 (Event Loop)、事件佇列 (Event Queue)、事件堆疊 (Call Stack)：排隊](https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625)

## 示意圖與流程

![juzOVMy](https://i.imgur.com/juzOVMy.png)

整個流程如上，

- Heap：你在程式中宣告、定義變數、函式…等的記憶體位置
- Stack：程式中要執行的函式堆進來 (pop in) 的地方，一次執行一個，完成後便跳出 (pop out)。
- WebAPIs：當你要執行的程式為非同步 WebAPIs，瀏覽器即會和你的程式一起開始執行，當他執行完了，也不會把結果隨便丟回你的程式中，他會去排隊，排進 Callback Queue 裡面。
- Callback Queue / Task Queue：這裡就是儲放 callback function 的地方，等著被丟進 Stack 被執行。
- Event Loop：Event Loop 會持續查看 Stack 空下來了沒有，如果已經空了，就把 Callback Queue 裡面的任務丟進 Stack 讓他去執行。

## Call Stack and Stack

![IFcvm3H](https://i.imgur.com/IFcvm3H.png)

- Stack，就是當一個 function 出現，不斷呼叫，就是一層一層的在 stack 裡面堆疊上去，然後最上面的執行完後，就會消失，慢慢就回到第一層，讓第一層也消失。

### 堆疊爆炸的例子：

（無限循環）

```js
function foo() {
  return foo();
}

foo();
```

## Blocking

- 堆疊區的東西塞住了，以至其他東西進不來。

### setTimeout

```js
console.log("hi");

setTimeout(function () {
  console.log("three");
}, 5000);

console.log("JSConfEu");
```

- 在 stack，`setTimeout()`不會直接把後面的`console.log('three')`推到 stack 的上面去，反而是自己消失了，等到`console.log('JSConfEu')`，然後定時時間到後，才出現`console.log('three')`
- 因為我們不只是有 Runtime，還有 WebAPIs，所以會有一種非同步的效果
- 從 webapis 跑完的東西，會先回到 task queue（任務佇列）。event loop 的工作室查看堆疊，並查看任務佇列。如果堆疊清空，才會把從任務佇列那邊拿東西放過去。

#### setTimeout 定時 0 秒

- 就算如此，還是會跑到任務佇列，然後再透過 event loop 進入堆疊。

```js
setTimeout(function () {
  console.log("delay 0 sec");
}, 0);
console.log("Hello!");
```

輸出：

```console
Hello!
delay 0 sec
```

## Render and Callback

![VNbkO47](https://i.imgur.com/VNbkO47.png)

- 顯示這樣的呼叫就像是回調
- 顯示的優先級別高於回調
