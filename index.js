var hittarget = 0;
var score = 0;
var timer = 60;
var hitrn = 0;

function newhittarget(){
 hitrn = Math.floor(Math.random()*10);
 document.querySelector("#hitid").textContent = hitrn;
}

function runtimer(){
 vartimer = setInterval( function(){
 if(timer>0){
 timer--;
 document.querySelector("#timerid").textContent = timer;
 }
 else{
 clearInterval(vartimer);
 document.querySelector("#pbtm").innerHTML = `<h1>"Game Over"</h1>`;
 } 
} , 1000 );
}

function increasescore(){
 score += 10;
 document.querySelector("#scoreid").textContent = score;
}

function makebubble(){
var cluster = "";
for(var i=1; i<=161; i++){
 var rn = Math.floor(Math.random()*10);
cluster+= `<h1 class="bubble">${rn}</h1>`;
}
document.querySelector("#pbtm").innerHTML = cluster;
}


document.querySelector("#pbtm").addEventListener( "click" , function(dets){
  clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn){
    increasescore();
    newhittarget();
    makebubble(); 
    }
} );



makebubble();
newhittarget();
runtimer();