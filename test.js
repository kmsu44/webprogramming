//버튼 가져오기 
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");
const btn6 = document.getElementById("button6");
const btn7 = document.getElementById("button7");
const btn8 = document.getElementById("button8");
const btn9 = document.getElementById("button9");
const btn10 = document.getElementById("button10");
const btn11 = document.getElementById("button11");
const btn12 = document.getElementById("button12");
const btn13 = document.getElementById("button13");
const btn14 = document.getElementById("button14");
const btn15 = document.getElementById("button15");
const btn16 = document.getElementById("button16");
const btn17 = document.getElementById("button17");
const btn18 = document.getElementById("button18");
const btn19 = document.getElementById("button19");
const btn20 = document.getElementById("button20");
const btn21 = document.getElementById("button21");
const btn22 = document.getElementById("button22");
const btn23 = document.getElementById("button23");
const btn24 = document.getElementById("button24");
const btn25 = document.getElementById("button25");

//버튼안에 수 배열로 생성
const points = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

var cnt = 1;
function stopbtn_click(){
    stop();
}
function startbtn_click(){
    reset();
    points.sort(function(a, b){return 0.8 - Math.random()});
    cnt = 1;

    //초록색 배경으로 변경
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";
    btn4.style.backgroundColor = "white";
    btn5.style.backgroundColor = "white";
    btn6.style.backgroundColor = "white";
    btn7.style.backgroundColor = "white";
    btn8.style.backgroundColor = "white";
    btn9.style.backgroundColor = "white";
    btn10.style.backgroundColor = "white";
    btn11.style.backgroundColor = "white";
    btn12.style.backgroundColor = "white";
    btn13.style.backgroundColor = "white";
    btn14.style.backgroundColor = "white";
    btn15.style.backgroundColor = "white";
    btn16.style.backgroundColor = "white";
    btn17.style.backgroundColor = "white";
    btn18.style.backgroundColor = "white";
    btn19.style.backgroundColor = "white";
    btn20.style.backgroundColor = "white";
    btn21.style.backgroundColor = "white";
    btn22.style.backgroundColor = "white";
    btn23.style.backgroundColor = "white";
    btn24.style.backgroundColor = "white";
    btn25.style.backgroundColor = "white";

    //투명도 1로 설정
	btn1.style.opacity = "1";
	btn2.style.opacity = "1";
    btn3.style.opacity = "1";
	btn4.style.opacity = "1";
    btn5.style.opacity = "1";
	btn6.style.opacity = "1";
    btn7.style.opacity = "1";
	btn8.style.opacity = "1";
	btn9.style.opacity = "1";
    btn10.style.opacity = "1";
    btn11.style.opacity = "1";
    btn12.style.opacity = "1";
    btn13.style.opacity = "1";
    btn14.style.opacity = "1";
    btn15.style.opacity = "1";
    btn16.style.opacity = "1";
    btn17.style.opacity = "1";
    btn18.style.opacity = "1";
    btn19.style.opacity = "1";
    btn20.style.opacity = "1";
    btn21.style.opacity = "1";
    btn22.style.opacity = "1";
    btn23.style.opacity = "1";
    btn24.style.opacity = "1";
    btn25.style.opacity = "1";
    
    //랜덤으로 정렬된 배열을 순차적으로 버튼에 넣기
    btn1.innerText = points[0];
    btn2.innerText = points[1];
    btn3.innerText = points[2];
    btn4.innerText = points[3];
    btn5.innerText = points[4];
    btn6.innerText = points[5];
    btn7.innerText = points[6];
    btn8.innerText = points[7];
    btn9.innerText = points[8];
    btn10.innerText = points[9];
    btn11.innerText = points[10];
    btn12.innerText = points[11];
    btn13.innerText = points[12];
    btn14.innerText = points[13];
    btn15.innerText = points[14];
    btn16.innerText = points[15];
    btn17.innerText = points[16];
    btn18.innerText = points[17];
    btn19.innerText = points[18];
    btn20.innerText = points[19];
    btn21.innerText = points[20];
    btn22.innerText = points[21];
    btn23.innerText = points[22];
    btn24.innerText = points[23];
    btn25.innerText = points[24];
    start()
    if(cnt==25){
        stop();
    }
}
// 카운트 수 설정
function button1_click() {
    if(cnt == btn1.innerText){
        btn1.style.opacity = "0.8";
        btn1.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button2_click() {
    if(cnt == btn2.innerText){
        btn2.style.opacity = "0.8";
        btn2.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button3_click() {
    if(cnt == btn3.innerText){
        btn3.style.opacity = "0.8";
        btn3.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button4_click() {
    if(cnt == btn4.innerText){
        btn4.style.opacity = "0.8";
        btn4.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
    
}
function button5_click() {
    if(cnt == btn5.innerText){
        btn5.style.opacity = "0.8";
        btn5.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
    
}
function button6_click() {
    if(cnt == btn6.innerText){
        btn6.style.opacity = "0.8";
        btn6.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
    
}
function button7_click() {
    if(cnt == btn7.innerText){
        btn7.style.opacity = "0.8";
        btn7.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
    
}
function button8_click() {
    if(cnt == btn8.innerText){
        btn8.style.opacity = "0.8";
        btn8.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
    
}
function button9_click() {
    if(cnt == btn9.innerText){
        btn9.style.opacity = "0.8";
        btn9.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
    
}
function button10_click() {
    if(cnt == btn10.innerText){
        btn10.style.opacity = "0.8";   
        btn10.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }

}
function button11_click() {
    if(cnt == btn11.innerText){
        btn11.style.opacity = "0.8";   
        btn11.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button12_click() {
    if(cnt == btn12.innerText){
        btn12.style.opacity = "0.8";   
        btn12.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button13_click() {
    if(cnt == btn13.innerText){
        btn13.style.opacity = "0.8";   
        btn13.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button14_click() {
    if(cnt == btn14.innerText){
        btn14.style.opacity = "0.8";   
        btn14.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button15_click() {
    if(cnt == btn15.innerText){
        btn15.style.opacity = "0.8";   
        btn15.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button16_click() {
    if(cnt == btn16.innerText){
        btn16.style.opacity = "0.8";   
        btn16.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button17_click() {
    if(cnt == btn17.innerText){
        btn17.style.opacity = "0.8";   
        btn17.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button18_click() {
    if(cnt == btn18.innerText){
        btn18.style.opacity = "0.8";   
        btn18.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button19_click() {
    if(cnt == btn19.innerText){
        btn19.style.opacity = "0.8";   
        btn19.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button20_click() {
    if(cnt == btn20.innerText){
        btn20.style.opacity = "0.8";   
        btn20.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button21_click() {
    if(cnt == btn21.innerText){
        btn21.style.opacity = "0.8";   
        btn21.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button22_click() {
    if(cnt == btn22.innerText){
        btn22.style.opacity = "0.8";   
        btn22.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button23_click() {
    if(cnt == btn23.innerText){
        btn23.style.opacity = "0.8";   
        btn23.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}

function button24_click() {
    if(cnt == btn24.innerText){
        btn24.style.opacity = "0.8";   
        btn24.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}
function button25_click() {
    if(cnt == btn25.innerText){
        btn25.style.opacity = "0.8";   
        btn25.style.backgroundColor = "blue";
        cnt++;
        if(cnt==26)
            stop();
    }
}



var timer,
 i = 0,
 divide = 100;

function start(){
 timer = self.setInterval('increment()', (1000 / divide));
}

function increment(){
 i++;
 document.getElementById('timer').innerHTML = (i / divide);
}

function stop(){
 clearInterval(timer);
 timer = null;
}

function reset(){
 stop();
 i = 0
 document.getElementById('timer').innerHTML = (i / divide);
}
