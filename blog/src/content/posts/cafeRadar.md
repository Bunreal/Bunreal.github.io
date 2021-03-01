---
title: "用雷達圖紀錄咖啡味道"
date: 2021-03-01T21:01:47+08:00
draft: false
summary: "為了紀錄咖啡風味，練習用`<canvas>`做雷達圖，然後也試著搭配 Chart.js 做一個更好看的版本。"
categories: ["Code"]
tags: ["canvas", "Chart.js"]
comments: true
cover:
  image: "https://i.imgur.com/aMmPgZF.png" # image path/url
---

一直有喝手沖咖啡的習慣，但常常喝完了就過了，希望可以有工具幫助自己記錄味道或是簡易的鑑別咖啡，好方便找到自己喜歡的咖啡，並且記住他。簡單來說，就是想要更認真看待喝咖啡這件事。

由於我覺得能力圖的呈現很酷，簡單查詢後發現這類型的圖表名稱是「雷達圖」，因此隨手找到一個六邊形的咖啡風味圖片，此文是想要練習做一個雷達圖。

## 製作結果

連結在這：

[這是搭配 Chart.js 製作的版本](https://bunreal.github.io/coffeeRadar/)

## 製作筆記

一開始是想要用純粹的 `<canvas>`做做看，但是因為製作方法很笨，做好後發現很難用而且能調整的東西很有限，於是另外使用了 Chart.js 搭配`<canvas>`製作，雖然還有改善空間，但比較起來，效果好超級多！

### 版本 A：使用純粹 `<canvas>`做做看

#### 簡略需要做的事情

- 圖形跟端點的字需要分開製作
- 為了製作圖形，需要知道端點位置，而為了知道端點位置，需要透過三角函數去算出位置
- 為了製作端點的字，而且位置不要蓋到圖形，就不能直接使用端點的位置，而要適度的+-數字去微調
- 圓裡面各軸的直線要另外畫

#### 例圖

![JfavilM](https://i.imgur.com/JfavilM.png)

### 版本 B：搭配 Chart.js

#### 簡略需要做的事

- 瞭解圖表的程式碼架構，並且設定我要的參數

#### 例圖

![aMmPgZF](https://i.imgur.com/aMmPgZF.png)

## 製作後心得

一開始我使用純 `<canvas>`摸索，但需要完成的工作包括：用到三角函數、每個圖形元素都要個別製作等等，以致在製作前要精打細算，而且沒辦法輕鬆切換成不同邊形，結果，用 Chart.js 就輕鬆做到我原先做的事，更有效率且圖形更美！

回到最初的製作目的，本來是為了記錄咖啡風味，但做好之後這個使用習慣並沒有維持很久，原因是嘗試過一陣子後，發現幾個軸度的量化計分並沒有很適合我，就算換成了網路上其他版本亦然，也許我會再試試看質性的紀錄一陣子！