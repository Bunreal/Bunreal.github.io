// 預設
var num = [3,3,3,3,3,3]; // 果香味、花香味、甜味、果仁味、可可味、香辛味
draw();

//Part1.圖形...
function draw(){
//畫前準備
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.height = 400;
    canvas.width = 600;    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var dot = {x:300,y:170}; // 圓心
    var h = 25; // 間隔
    var c = 5; // 總共幾圈
    
    // 畫出裡面的圖形
    
    var nsin30 = Math.sin(Math.PI/6);
    var ncos30 = Math.cos(Math.PI/6);
    
    //單位位移
    var unit = [
        {x:0,y:-h},
        {x:h*ncos30,y:-h*nsin30},
        {x:h*ncos30,y:h*nsin30},
        {x:0,y:h},
        {x:-h*ncos30,y:h*nsin30},
        {x:-h*ncos30,y:-h*nsin30}
    ]
    
    //全部位移
    var total=[];
    for(var i=0; i<num.length; i++){
        total.push({x:num[i]*unit[i].x,y:num[i]*unit[i].y});
    }
    
    //用圓心與全部位移，算出絕對位置
    var final=total.map(obj => {
        var newobj = {};
        newobj.x = dot.x+obj.x;
        newobj.y = dot.y+obj.y;
        return newobj;
    });
    
    //drawing
    ctx.beginPath();
    ctx.moveTo(final[0].x,final[0].y);
    ctx.lineTo(final[1].x,final[1].y);
    ctx.lineTo(final[2].x,final[2].y);
    ctx.lineTo(final[3].x,final[3].y);
    ctx.lineTo(final[4].x,final[4].y);
    ctx.lineTo(final[5].x,final[5].y);
    ctx.closePath()
    
    ctx.strokeStyle = 'rgb(204, 102, 0)';
    ctx.stroke();
    ctx.fillStyle = 'rgb(204, 102, 0)';
    ctx.fill();
    
    //在六邊形的各個角畫出一個小圓，表示點
    ctx.fillStyle='black';
    for(var i=0;i<num.length;i++){
        ctx.beginPath();
        ctx.arc(final[i].x,final[i].y,3,0,Math.PI*2);
        ctx.fill();
    }
    
    // 畫出同心圓
    ctx.strokeStyle='black';
    for(var i=1;i<c+1;i++){
        ctx.beginPath();
        ctx.arc(dot.x,dot.y,h*i,0,Math.PI*2);
        ctx.stroke();
    }

    // 圓裡面的直線
    ctx.strokeStyle='black';
    ctx.beginPath();
    ctx.moveTo(dot.x,dot.y-c*h);
    ctx.lineTo(dot.x,dot.y+c*h);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(dot.x-c*h*ncos30,dot.y+c*h*nsin30);
    ctx.lineTo(dot.x+c*h*ncos30,dot.y-c*h*nsin30);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(dot.x-c*h*ncos30,dot.y-c*h*nsin30);
    ctx.lineTo(dot.x+c*h*ncos30,dot.y+c*h*nsin30);
    ctx.stroke();
    
    //字的位置
    var wordPosition = unit.map(obj=>{
        var posi = {};
        posi.x = dot.x+c*obj.x;
        posi.y = dot.y+c*obj.y;
        return posi;
    })

    // 把字畫出來
    ctx.font = "15pt Verdana";
    ctx.textAlign = 'center';
    ctx.fillStyle='black';
    ctx.fillText("果香味 (Fruity)", wordPosition[0].x, wordPosition[0].y-10);
    ctx.fillText("果仁味 (Nutty)", wordPosition[3].x, wordPosition[3].y+25);
    ctx.textAlign = 'left';
    ctx.fillText("花香味(Floral)", wordPosition[1].x+10, wordPosition[1].y);
    ctx.fillText("甜味(Sweet)", wordPosition[2].x+10, wordPosition[2].y);
    ctx.textAlign = 'right';
    ctx.fillText("可可味(Cocoa)", wordPosition[4].x-10, wordPosition[4].y);
    ctx.fillText("香辛味(Spices)", wordPosition[5].x-10, wordPosition[5].y);

    // 右邊的數字
    var texts = document.querySelectorAll('div span');
    for(var i=0;i<num.length;i++){
        texts[i].textContent=num[i];
    }
}

//Part2.bar的部分...
//取得所有的滾軸的控制，換成一個nodelist，只要在滾軸上面移動，就update
var all=document.querySelectorAll('input[type="range"]');
all.forEach(el=>el.addEventListener('change',update));
all.forEach(el=>el.addEventListener('mousemove',update));


var newNum, inputs;

function update() {
    newNum = [];//新的分數，用以重構圖形
    inputs = document.querySelectorAll('input[type="range"]'); // 為了取得所有滾軸的值
    inputs.forEach(input => {
        newNum.push(parseInt(input.value)); //把所有的值丟進newNum
    })
    num = newNum; //因為原本的draw裡面是num，所以要把num的內容設定為newNum
    draw(); //重新更新圖形
}

function save(){
    var img = canvas.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');
}
