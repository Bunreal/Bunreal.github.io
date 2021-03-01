var ctx = document.getElementById('myChart');
var num = [3,3,3,3,3,3]; 
draw();
var newNum, inputs;

function draw(){

    var texts = document.querySelectorAll('div span');

    if (!num){
      num = defaultnum;
    }
    for(var i=0;i<num.length;i++){
        texts[i].textContent=num[i];
    }



    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Fruity', 'Floral', 'Sweet', 'Nutty', 'Cocoa', 'Spices'],
            datasets: [{
                label: '風味表現',
                data: num,
                backgroundColor: ['rgba(47, 79, 79, 0.4)'],
                borderColor: ['rgba(47, 79, 79, 1)'],
                borderWidth: 2,
                lineTension: 0.3,
            }],
        },
        options: {
            /*title: {
              display: true,
              text: '咖啡風味圖',
              fontSize: 20,
              fontStyle: 'bold',
              fontColor: 'black'
            },*/
            scale: {
              ticks: {
                  suggestedMin: 1,
                  suggestedMax: 5,
                  stepSize: 1,
                  fontSize: 12,
                  fontColor: 'black',
              },
              pointLabels: {
                fontSize: 16,
                fontColor: 'black',
                fontStyle: 'bold'
              },
              angleLines: {
                color: 'black'
              },
              gridLines: {
                color: 'black'
              },
            },
        }
    });
}

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
    var img = ctx.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');
}

var all=document.querySelectorAll('input[type="range"]');
all.forEach(el=>el.addEventListener('change',update));

