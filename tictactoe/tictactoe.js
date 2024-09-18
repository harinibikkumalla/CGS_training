window.onload=function(){
    var boxes=document.getElementsByClassName("box");
    for (const ele of boxes){
        ele.addEventListener("click",marker)
    }
    var palyer1="X"
    var palyer2="O"
    var board=[
        ["","",""],
        ["","",""],
        ["","",""]
    ]
}
function marker(e){
    if (e.target.innerText!=""){
        alert("Cant Mark")
        return
        }
    const cur=e.target
    var x,y;
    x=parseInt(cur.id/3);
    x=parseInt(cur.id%3);
    if(chance==1){
        e.target.innerText=palyer1
        board[x][y]=palyer1
        chance 2

    }
    else if (chance==2){
        e.target.innerText=palyer2
        board[x][y]=palyer2
        chance 1

    }
    
}
if(checkWinner()){
    var message=(chance==2?"player1":"player 2")+"won the game"
    setTimeout(function(){
        alert(message)
    },500)
    
}

function checkWinner(){
    var isWinner = false;
    for(let i=0;i<3;i++)
        if(board[i][0]==board[i][1]&&(board[i][1]==board[i][2]&&board[i][0]!=''))
            isWinner=true
        return true
}
for(let i=0;i<3;i++){
    if(board[0][i]==board[1][i]&&(board[1][i]==board[2][i]&&board[0][i]!=''))
        isWinner=true
    return true}
    {if(board[0][0]==board[1][1]&&board[2][2]==board[1][1]&&board[0][0]!='')
        return true
}






