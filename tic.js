console.log("Welcome to tic tac toe")

let aturn=new Audio("tap.wav")
let at=new Audio("win.wav")
let dra=new Audio("draw.wav")
let gameover=false
let turn="X"
// Function to change the turn 
const changeturn=()=>{
    return turn==="X"?"0":"X"
}

// Function to check for win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2,5,5,0,10,10,0],
        [3,4,5,5,15,0,10,30,0],
        [6,7,8,5,25,0,10,50,0],
        [0,3,6,-5,15,90,-10,30,90],
        [1,4,7,5,15,90,10,30,90],
        [2,5,8,15,15,90,30,30,90],
        [0,4,8,5,15,45,10,30,45],
        [2,4,6,5,15,135,10,30,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText+" Won";
            gameover=true;
            let query=window.matchMedia("(max-width:850px)");
            j++;
            if(query.matches){
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='280px'
                document.querySelector('.line').style.width="40vw";
                document.querySelector('.line').style.transform=`translate(${e[6]}vw,${e[7]}vw) rotate(${e[8]}deg)`
            }
            else{
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='280px'
                document.querySelector('.line').style.width="20vw";
                document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)` 
            }
            if(j===1){
            at.play();
            }}
    })    
}

// to get the id of the function
function getid(btn){
    return btn.id;
}
var i,j=0,k=0;

// Game logic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            aturn.play();
            checkwin();
            i=getid(boxtext);//to get the id
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
            checkdraw();            
        }      

    });
})

// logic for undo operation in only one time
undo.addEventListener('click',()=>{ 
    if(i>0 && i<=9){
    document.getElementsByClassName("boxtext")[Math.ceil(i)-1].innerText= "";
    turn==="X"?turn="0":turn="X"
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
    document.querySelector('.line').style.width="0vw";
    i=0;
    j=0;
    k=0;
    }
});

// logic for reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText= ""
    });
    turn="X";
    gameover=false;
    i=0;
    j=0;
    k=0;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
    document.querySelector('.line').style.width="0vw";
})

// function to check the draw
const checkdraw=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
    ]
        if((boxtext[wins[0][0]].innerText!=="")&&(boxtext[wins[0][1]].innerText!=="")&&(boxtext[wins[0][2]].innerText!=='')&&((boxtext[wins[2][0]].innerText!=="")&&(boxtext[wins[2][1]].innerText!=="")&&(boxtext[wins[2][2]].innerText!==''))&&((boxtext[wins[1][0]].innerText!=="")&&(boxtext[wins[1][1]].innerText!=="")&&(boxtext[wins[1][2]].innerText!==''))){
           k++; 
           if(k===1 && gameover===false){
            document.getElementsByClassName("info")[0].innerText="Match Draw ";
            dra.play();
        }    
}}