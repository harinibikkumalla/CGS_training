
var btn1= document.getElementById("btn1");
var btn2= document.getElementById("btn2");
var btn3= document.getElementById("btn3");
var btn4= document.getElementById("btn4");
function incrementscore(e){
    var button=e.target
    var Sid=button.getAttribute("ds");
    var score=document.getElementById(Sid)
    var currentscore=parseInt(score.innerText)
    score.innerText=currentscore+1

}



btn1.addEventListener("click",incrementscore);
btn2.addEventListener("click",incrementscore);
btn3.addEventListener("click",incrementscore);
btn4.addEventListener("click",incrementscore);


function result(){
    var S1= parseInt(document.getElementById("result").innerText);
    var S2= parseInt(document.getElementById("result").innerText);
    var S3= parseInt(document.getElementById("result").innerText);
    var S4= parseInt(document.getElementById("result").innerText);
    if (S1>S2 && S1>S3 && S1>S4 ){
        alert("Janasena")

    }
    else if(S2>S1 && S2>S3 && S2>S4 ){
        alert("BJP")
    }
    else if(S3>S1 && S3>S2 && S3>S4 ){
        alert("BRS")
    }
    else if(S4>S1 && S4>S2 && S4>S3 ){
        alert("CONGRESS")
    }
}


