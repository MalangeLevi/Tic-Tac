var playerSign='';
var playercomputer=''
var playertruex = true;
var onOff = true;
var x = playerSign; 
var o = playercomputer;
var watch =0;
var xpoints = 0;
var pcpoints = 0;
var win2 = 0;
var win = 0;
var draw = true;
$(document).ready(function(){
	document.getElementById('first-p').onclick = onePlayer;
	document.getElementById('second-p').onclick = twoPlayer;
	document.getElementById('first-p').innerHTML = 'one player';
	document.getElementById('second-p').innerHTML ='two player';
});

function overFirstP(){
	document.getElementById('first-p').className='four';
	playerSign='X';
	x = playerSign; 
	playercomputer='O';
	o= playercomputer;
	
}
function leaveFirstP(){
	document.getElementById('first-p').className='';
	playerSign='X';
	x = playerSign; 
	playercomputer ='O';
	o = playercomputer;
}
function overSecondP(){
	document.getElementById('second-p').className='four';	
	playerSign='O';
	x = playerSign; 
	playercomputer='X';
	o= playercomputer;
}
function leaveSecondP(){
	document.getElementById('second-p').className='';
    playerSign='O';
	x = playerSign; 
	playercomputer='X';
	o = playercomputer;
}

function clickBack(){
	document.getElementById('title').innerHTML='How do you want to play?';
	document.getElementById('title').className='';
	document.getElementById('first-p').className='';
	document.getElementById('second-p').className='';
	document.getElementById('first-p').innerHTML='one player';
	document.getElementById('second-p').innerHTML='two player';
	document.getElementById('first-p').onclick = onePlayer;
}

function onePlayer(){
	
	document.getElementById('first-p').onclick = firstPx;	
	document.getElementById('title').innerHTML='Would you like to be x or o?';
	document.getElementById('title').className='tamanho';
	document.getElementById('first-p').className = 'tamanho';
	document.getElementById('second-p').className = 'tamanho';
	document.getElementById('first-p').innerHTML='X';
	document.getElementById('second-p').innerHTML='O';
	document.getElementById('second-p').onclick = firstPx;
	createback();
}

function twoPlayer(){
	document.getElementById('title').innerHTML='Player 1 : Would you like to be x or o?';
	document.getElementById('title').className='tamanho2';
	document.getElementById('first-p').className = 'tamanho';
	document.getElementById('second-p').className = 'tamanho';
	document.getElementById('second-p').onclick = firstPx;
	document.getElementById('first-p').innerHTML='X';
	playerSign = document.getElementById('second-p').innerHTML='O';
	document.getElementById('trio').style.visibility ='visible';
}

function resetGame(){
	if(onOff === true){
	document.getElementById("xturn").innerHTML="Your Turn";
	document.getElementById('one').innerHTML="";
	document.getElementById('two').innerHTML="";
	document.getElementById('three').innerHTML="";
	document.getElementById('four').innerHTML="";
	document.getElementById('five').innerHTML="";
	document.getElementById('six').innerHTML="";
	document.getElementById('seven').innerHTML="";
	document.getElementById('eight').innerHTML="";
	document.getElementById('nine').innerHTML=""; }
	else{
	 document.getElementById("xturn").innerHTML ="Computer";
	 document.getElementById('one').innerHTML="";
	document.getElementById('two').innerHTML="";
	document.getElementById('three').innerHTML="";
	document.getElementById('four').innerHTML="";
	document.getElementById('five').innerHTML="";
	document.getElementById('six').innerHTML="";
	document.getElementById('seven').innerHTML="";
	document.getElementById('eight').innerHTML="";
	document.getElementById('nine').innerHTML=""; 
	win = setInterval(function(){myturn();}, 3000);
	}
	clearInterval(win2);
}

function myturn(){
	if(document.getElementById('five').innerHTML===""){
		document.getElementById('five').innerHTML= playercomputer;
		
	}
	onOff = true;
	clearInterval(win);
	document.getElementById('xturn').innerHTML='Your turn';
}

function firstPx(){
var z = 0;
var t =0;
var event =[clickone,clicktwo,clickthree,clickfour,clickfive,clicksix,clickseven,clickeight,clicknine];
var names = ['one1','two2','three3','four4','five5','six6','seven7','eight8','nine9'];
var namestwo = ['one','two','three','four','five','six','seven','eight','nine'];

var ip = document.getElementById('new');
document.getElementById('hide-main-div').style.visibility ='hidden';
	for(var i =1; i <=3;){
	var newdiv = document.createElement('div');
	newdiv.className = 'row';
for(var x =1; x <=3; x++){
	var newdivs = document.createElement('div');
	newdivs.className='col-md-4';
	var factortwo = document.createElement('div');
	factortwo.id = names[t];
	factortwo.className ="x-factor-two";
	factortwo.onclick = event[t];
	var p = document.createElement('p');
	p.className ='x';
	p.id = namestwo[z];
	ip.appendChild(newdiv);
	newdiv.appendChild(newdivs);
	newdivs.appendChild(factortwo);
	factortwo.appendChild(p);
	t +=1;
	z +=1; }
var br = document.createElement('br');
ip.insertBefore(br, newdiv);
i++; } headingtitle(); createReset(); createyou(); createPc(); createYouPoints(); createPcPoints(); yourPointNow();}

function headingtitle(){
  var newpp = document.getElementById("computer");
	for(var v =1; v <=1; v++){
	var newmode = document.createElement('div');
	newmode.className ="floating-box";
	var p = document.createElement('p');
	p.id="xturn";	
	newmode.appendChild(p);
	newpp.appendChild(newmode); }
document.getElementById("xturn").innerHTML="You first...";
}

function createReset(){
var newp = document.getElementById("newreset");
for(var c =1; c <=1; c++){
    var newrow = document.createElement('div');
	newrow.className = 'row';
	var newdivmove = document.createElement('div');
	newdivmove.className ="'col-md-4";
	var pp = document.createElement('p');
	pp.id="xturn";
	pp.className ="box-reset";
	pp.innerHTML ="Reset";
	pp.onclick= resetGame;
	newp.appendChild(newrow);
	newrow.appendChild(newdivmove);
	newdivmove.appendChild(pp);
	} 
	onOff =true; }
	
function yourPointNow(){
var newp = document.getElementById("newpoints");
for(var c =1; c <=1; c++){
    var newrow = document.createElement('div');
	newrow.className = 'row';
	var newdivmove = document.createElement('div');
	newdivmove.className ="'col-md-4";
	var pp = document.createElement('p');
	pp.id="xturn";
	pp.className ="box-reset";
	pp.innerHTML ="Points";
	pp.onclick= resetGame;
	newp.appendChild(newrow);
	newrow.appendChild(newdivmove);
	newdivmove.appendChild(pp);} }
function createyou(){
var newyou = document.getElementById("you");
for(var c =1; c <=1; c++){
	var pyou = document.createElement('p');
	newyou.className ="box-points";
	pyou.id="pointyou";
	pyou.innerHTML ="You";
	newyou.appendChild(pyou);} }
	
function createPc(){
var newyou = document.getElementById("PC");
for(var c =1; c <=1; c++){
	var pyou = document.createElement('p');
	newyou.className ="box-points";
	pyou.id="pointPc";
	pyou.innerHTML ="PC";
	newyou.appendChild(pyou);} }
	
function createYouPoints(){
var newyou = document.getElementById("yourpoints");
for(var c =1; c <=1; c++){
	var pyou = document.createElement('p');
	newyou.className ="box-points";
	pyou.id="point1";
	pyou.innerHTML =xpoints;
	newyou.appendChild(pyou);} }
	
function createPcPoints(){
var newyou = document.getElementById("pcpoints");
for(var c =1; c <=1; c++){
	var pyou = document.createElement('p');
	newyou.className ="box-points";
	pyou.id="point2";
	pyou.innerHTML =pcpoints;
	newyou.appendChild(pyou);} }
	
function createback(){
	var newback = document.getElementById("trio");
	for(var g =1; g <= 1; g++){
	var pt = document.createElement('p');
	pt.id = "x";
	pt.onclick = clickBack;
	newback.appendChild(pt);}
	}

  function validateComputerClick(){ 
	  if(document.getElementById('one').innerHTML === x || document.getElementById('two').innerHTML ===x ||
	  document.getElementById('three').innerHTML===x || document.getElementById('four').innerHTML ===x ||
	  document.getElementById('five').innerHTML === x || document.getElementById('six').innerHTML===x ||
	  document.getElementById('seven').innerHTML===x || document.getElementById('eight').innerHTML===x ||
	  document.getElementById('nine').innerHTML=== x) 
	  {
		if(document.getElementById('one').innerHTML === o && document.getElementById('three').innerHTML ===o &&
		document.getElementById('two').innerHTML ===''){
	  document.getElementById('two').innerHTML = playercomputer;
	  validateScoreO();}	
	else {
		  if(document.getElementById('one').innerHTML ===o && document.getElementById('two').innerHTML ===o &&
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  
	  else {
		  if(document.getElementById('two').innerHTML ===o && document.getElementById('one').innerHTML ===o &&
		  document.getElementById('three').innerHTML ==='') {
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('two').innerHTML ===o && document.getElementById('three').innerHTML ===o &&
		  document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===o && document.getElementById('one').innerHTML ===o &&
		  document.getElementById('two').innerHTML ===''){
	  document.getElementById('two').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===o && document.getElementById('two').innerHTML ===o &&
		  document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===o && document.getElementById('seven').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer; 
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===o && document.getElementById('six').innerHTML ===o &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO(); }
	  else {
		  if(document.getElementById('three').innerHTML ===o && document.getElementById('nine').innerHTML ===o &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('two').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('two2').innerHTML ===o && document.getElementById('eight').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===o && document.getElementById('four').innerHTML ===o &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===o && document.getElementById('seven').innerHTML ===o &&
		  document.getElementById('four').innerHTML ===''){
	  document.getElementById('four').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===o && document.getElementById('nine').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('four').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('four').innerHTML ===o && document.getElementById('six').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('five').innerHTML ===o && document.getElementById('four').innerHTML ===o &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('five').innerHTML ===o && document.getElementById('six').innerHTML ===o &&
		  document.getElementById('four').innerHTML ===''){
	  document.getElementById('four').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('six').innerHTML ===o && document.getElementById('four').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('six').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('four').innerHTML ===''){
	  document.getElementById('four').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('one').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('eight').innerHTML ===o &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('seven').innerHTML ===o &&
		  document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('eight').innerHTML ===o && document.getElementById('nine').innerHTML ===o &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('eight').innerHTML ===o && document.getElementById('seven').innerHTML ===o &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('three').innerHTML ===o &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('six').innerHTML ===o && 
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===o && document.getElementById('seven').innerHTML ===o &&
		  document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	else {
		  if(document.getElementById('seven').innerHTML ===o && document.getElementById('five').innerHTML ===o &&
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('seven').innerHTML ===o && document.getElementById('three').innerHTML ===o &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}	 
         else {
		  if(document.getElementById('six').innerHTML ===o && document.getElementById('three').innerHTML ===o &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();}	
	  else {
		  if(document.getElementById('six').innerHTML ===o && document.getElementById('nine').innerHTML ===o &&
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else{		  
		  if(document.getElementById('one').innerHTML === x && document.getElementById('three').innerHTML ===x &&
		document.getElementById('two').innerHTML ===''){
	  document.getElementById('two').innerHTML = playercomputer;
	  validateScoreO();}	
	else {
		if(document.getElementById('one').innerHTML ===x && document.getElementById('five').innerHTML ===''){
			document.getElementById("five").innerHTML = playercomputer;
			validateScoreO();}
		else
		{
			if(document.getElementById('three').innerHTML ===x && document.getElementById('five').innerHTML ===''){
			document.getElementById("five").innerHTML = playercomputer;
			validateScoreO();}
		else{
			if(document.getElementById('seven').innerHTML === x && document.getElementById('five').innerHTML ===''){
			document.getElementById("five").innerHTML = playercomputer;
			validateScoreO();}
		else{
			if(document.getElementById('nine').innerHTML ===x && document.getElementById('five').innerHTML ===''){
			document.getElementById("five").innerHTML = playercomputer;
			validateScoreO();}
		else{
		  if(document.getElementById('one').innerHTML ===x && document.getElementById('two').innerHTML ===x &&
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}	  
	  else {
		  if(document.getElementById('two').innerHTML ===x && document.getElementById('one').innerHTML ===x &&
		  document.getElementById('three').innerHTML ==='') {
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('two').innerHTML ===x && document.getElementById('three').innerHTML ===x &&
		  document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML === x && document.getElementById('one').innerHTML ===x &&
		  document.getElementById('two').innerHTML ===''){
	  document.getElementById('two').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===x && document.getElementById('two').innerHTML ===x &&
		  document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===x && document.getElementById('seven').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===x && document.getElementById('six').innerHTML ===x &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('three').innerHTML ===x && document.getElementById('nine').innerHTML ===x &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('two').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('two').innerHTML ===x && document.getElementById('eight').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===x && document.getElementById('four').innerHTML ===x &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===x && document.getElementById('seven').innerHTML ===x &&
		  document.getElementById('four').innerHTML ===''){
	  document.getElementById('four').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===x && document.getElementById('nine').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('one').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('four').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('four').innerHTML ===x && document.getElementById('six').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('five').innerHTML ===x && document.getElementById('four').innerHTML ===x &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('five').innerHTML ===x && document.getElementById('six').innerHTML ===x &&
		  document.getElementById('four').innerHTML ===''){
	  document.getElementById('four').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('six').innerHTML ===x && document.getElementById('four').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('six6').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('four4').innerHTML ===''){
	  document.getElementById('four4').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('one').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('eight').innerHTML ===x &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('seven').innerHTML ===x &&
		  document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('eight').innerHTML ===x && document.getElementById('nine').innerHTML ===x &&
		  document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('eight').innerHTML ===x && document.getElementById('seven').innerHTML ===x &&
		  document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('three').innerHTML ===x &&
		  document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('six').innerHTML ===x && 
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('nine').innerHTML ===x && document.getElementById('seven').innerHTML ===x &&
		  document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	else {
		  if(document.getElementById('seven').innerHTML ===x && document.getElementById('five').innerHTML ===x &&
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('seven').innerHTML ===x && document.getElementById('three').innerHTML ===x &&
		  document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}	 
         else {
		  if(document.getElementById('six').innerHTML ===x && document.getElementById('three').innerHTML ===x &&
		  document.getElementById('nine').innerHTML ===''){
		 document.getElementById('nine').innerHTML = playercomputer;
		 validateScoreO();}
	  else {
		  if(document.getElementById('six').innerHTML ===x && document.getElementById('nine').innerHTML ===x &&
		  document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else{	 
		  if(document.getElementById('one').innerHTML ===''){
	  document.getElementById('one').innerHTML = playercomputer;
	  validateScoreO();}
	  else{ 
		  if(document.getElementById('two').innerHTML ===''){
	  document.getElementById('two').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		    if(document.getElementById('three').innerHTML ===''){
	  document.getElementById('three').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('four').innerHTML ===''){
	  document.getElementById('four').innerHTML = playercomputer;
	  validateScoreO();}
	  else{
		  if(document.getElementById('five').innerHTML ===''){
	  document.getElementById('five').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('six').innerHTML ===''){
	  document.getElementById('six').innerHTML = playercomputer;
	  validateScoreO();}
	  else{
		  if(document.getElementById('seven').innerHTML ===''){
	  document.getElementById('seven').innerHTML = playercomputer;
	  validateScoreO();}
	  else {
		  if(document.getElementById('eight').innerHTML ===''){
	  document.getElementById('eight').innerHTML = playercomputer;
	  validateScoreO();}
	  else{
		  if(document.getElementById('nine').innerHTML ===''){
	  document.getElementById('nine').innerHTML = playercomputer;
	  validateScoreO();} 
	  } } }}} } }}}}}} }}} }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
	clearInterval(watch);} 
  
  function validateScoreO(){
	if(document.getElementById('one').innerHTML === playercomputer && document.getElementById('two').innerHTML === playercomputer &&
		document.getElementById('three').innerHTML === playercomputer){
		document.getElementById("xturn").innerHTML= 'Computer Won...'; 
		onOff=false;
		pcpoints++;
		document.getElementById("point2").innerHTML = pcpoints;
		win2 = setInterval(function(){resetGame();},2000);}
		else{	
	if(document.getElementById('one').innerHTML === playercomputer && document.getElementById('four').innerHTML === playercomputer &&
		  document.getElementById('seven').innerHTML === playercomputer) {
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			  onOff=false;
			  pcpoints++;
			  document.getElementById("point2").innerHTML = pcpoints;
			  win2 = setInterval(function(){resetGame();},2000);}
	else{	
	if(document.getElementById('one').innerHTML === playercomputer && document.getElementById('five').innerHTML === playercomputer &&
		  document.getElementById('nine').innerHTML === playercomputer){
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			onOff=false;
			pcpoints++;
			document.getElementById("point2").innerHTML = pcpoints;
			win2 = setInterval(function(){resetGame();},2000);}
   else{
   if(document.getElementById('three').innerHTML === playercomputer && document.getElementById('five').innerHTML === playercomputer &&
		  document.getElementById('seven').innerHTML === playercomputer){
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			  onOff=false;
			  pcpoints++;
			  document.getElementById("point2").innerHTML = pcpoints;
			  win2 = setInterval(function(){resetGame();},2000);}
	else{
	if(document.getElementById('four').innerHTML === playercomputer && document.getElementById('five').innerHTML === playercomputer &&
		  document.getElementById('six').innerHTML === playercomputer){
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			  onOff=false;
			  pcpoints++;
		  document.getElementById("point2").innerHTML = pcpoints;}
	else{
	if(document.getElementById('two').innerHTML === playercomputer && document.getElementById('five').innerHTML === playercomputer &&
		  document.getElementById('eight').innerHTML === playercomputer){
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			  clearInterval(watch);
			  onOff=false;
			  pcpoints++;
		  document.getElementById("point2").innerHTML =pcpoints;
		  win2 = setInterval(function(){resetGame();},2000);}			  
			  else{	
	if(document.getElementById('three').innerHTML === playercomputer && document.getElementById('six').innerHTML === playercomputer &&
		  document.getElementById('nine').innerHTML === playercomputer){
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			  clearInterval(watch);
			  onOff=false;
			  pcpoints++;
			  document.getElementById("point2").innerHTML = pcpoints;
			  win2 = setInterval(function(){resetGame();},2000);}
else{	
	if(document.getElementById('seven').innerHTML === playercomputer && document.getElementById('eight').innerHTML === playercomputer &&
		  document.getElementById('nine').innerHTML === playercomputer){
			  document.getElementById("xturn").innerHTML= 'Computer Won...';
			  onOff = false;
			  pcpoints++;
			  document.getElementById("point2").innerHTML = pcpoints;
			  win2 = setInterval(function(){resetGame();},1000);
			  }
		  else{itDraw();
			  if(draw === true){
			 onOff = true;
		  document.getElementById("xturn").innerHTML= 'You...';}}
  }}}}}}}}

  function itDraw(){
	  if(document.getElementById('one').innerHTML === ''){onOff = false;}
		  else{
		  if(document.getElementById('two').innerHTML === ''){onOff = false;}
			  else{
			  if(document.getElementById('three').innerHTML === ''){onOff = false;}
				  else{
				  if(document.getElementById('four').innerHTML === ''){onOff = false;}
					  else{
					  if(document.getElementById('five').innerHTML === ''){onOff = false;}
						  else{
						if(document.getElementById('five').innerHTML ===''){onOff = false;}
							else{
							if(document.getElementById('seven').innerHTML === ''){onOff = false;}
								else{
							if(document.getElementById('eight').innerHTML === ''){onOff = false;}
								else{
							if(document.getElementById('nine').innerHTML === ''){onOff = false;}
	  else{draw = false;
		  document.getElementById('xturn').innerHTML ='It's a draw...';
	  win2 = setInterval(function(){resetGame();},2000);}
  }}}}}}}}}
  
  function validateScoreX(){
	 	if(document.getElementById('one').innerHTML === playerSign && document.getElementById('two').innerHTML === playerSign &&
		document.getElementById('three').innerHTML === playerSign){ 
		document.getElementById('xturn').innerHTML ='You won..';
			onOff=true;
			xpoints++;
			document.getElementById("point1").innerHTML = xpoints; 
			win2 = setInterval(function(){resetGame();},3000);
			}
		else{	
	if(document.getElementById('one').innerHTML === playerSign && document.getElementById('four').innerHTML === playerSign &&
		  document.getElementById('seven').innerHTML === playerSign) {
			  document.getElementById('xturn').innerHTML ='You won..';
			onOff=true;
			xpoints++;
			document.getElementById("point1").innerHTML = xpoints;
			win2 = setInterval(function(){resetGame();},3000);
			}
	else{	
	if(document.getElementById('one').innerHTML ===playerSign && document.getElementById('five').innerHTML === playerSign &&
		  document.getElementById('nine').innerHTML ===playerSign){
			  document.getElementById('xturn').innerHTML ='You won..';
			onOff=true;
			xpoints++;
	document.getElementById("point1").innerHTML = xpoints;
	win2 = setInterval(function(){resetGame();},3000);
	 }
   else{
   if(document.getElementById('three').innerHTML === playerSign && document.getElementById('five').innerHTML === playerSign &&
		  document.getElementById('seven').innerHTML ===x){
			  document.getElementById('xturn').innerHTML ='You won..';
			onOff=true
			xpoints++;
		document.getElementById("point1").innerHTML = xpoints;
		win2 = setInterval(function(){resetGame();},3000); }
  	else{
	if(document.getElementById('four').innerHTML ===playerSign && document.getElementById('five').innerHTML ===playerSign &&
		  document.getElementById('six').innerHTML ===playerSign){
			  document.getElementById('xturn').innerHTML ='You won..';
			onOff=true;
			xpoints++;
	document.getElementById("point1").innerHTML = xpoints; 
win2 = setInterval(function(){resetGame();},3000);	}
	
	else{		
	if(document.getElementById('two').innerHTML === playerSign && document.getElementById('five').innerHTML ===playerSign &&
		  document.getElementById('eight').innerHTML ===x){
			  document.getElementById('xturn').innerHTML ='You won..';
			onOff=true;
			xpoints++;
			document.getElementById("point1").innerHTML = xpoints;
			win2 = setInterval(function(){resetGame();},3000); }
else{	
	if(document.getElementById('three').innerHTML ===playerSign && document.getElementById('six').innerHTML ===playerSign &&
		  document.getElementById('nine').innerHTML ===playerSign){
			  document.getElementById('xturn').innerHTML ='You won..';
			onOff=true;
			xpoints++;
			document.getElementById("point1").innerHTML = xpoints;
			win2 = setInterval(function(){resetGame();},3000);}
else{	
	if(document.getElementById('seven').innerHTML ===playerSign && document.getElementById('eight').innerHTML ===playerSign &&
		  document.getElementById('nine').innerHTML ===playerSign){
			  document.getElementById('xturn').innerHTML ='You won..';
		onOff=true;
		xpoints++;
		  document.getElementById("point1").innerHTML = xpoints;
		  win2 = setInterval(function(){resetGame();},3000);}
		else{
			itDraw();
			if(onOff === false){
			document.getElementById("xturn").innerHTML= 'Computer';
			onOff=false;}		
  }}}}}}}}}
  
 function clickone(){
	if(onOff === true){
	var ele = document.getElementById('one');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('one').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	watch = setInterval(function(){validateComputerClick();},1000); }
} else{} }
 
  function clicktwo(){
	if(onOff === true){
	var ele = document.getElementById('two');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('two').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	watch = setInterval(function(){validateComputerClick();},1000);}
} else{} }
 
 function clickthree(){
		if(onOff === true){
	var ele = document.getElementById('three');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('three').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	 watch = setInterval(function(){validateComputerClick();},1000);}
} else{} }
 
  function clickfour(){
	if(onOff === true){
	var ele = document.getElementById('four');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('four').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	 watch = setInterval(function(){validateComputerClick();},1000);}
} else{} }	
 	 
 function clickfive(){
	if(onOff === true){
	var ele = document.getElementById('five');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('five').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	 watch = setInterval(function(){validateComputerClick();},1000);}
} else{} }
 
  function clicksix(){
		if(onOff === true){
	var ele = document.getElementById('six');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('six').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	watch = setInterval(function(){validateComputerClick();},2000);}
} else{} }

  function clickseven(){
	if(onOff === true){
	var ele = document.getElementById('seven');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('seven').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	 watch = setInterval(function(){validateComputerClick();},2000);}
} else{} }
	
  function clickeight(){
	if(onOff === true){
	var ele = document.getElementById('eight');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('eight').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	 watch = setInterval(function(){validateComputerClick();},2000);}
} else{} }
	 
  function clicknine(){
		if(onOff === true){
	var ele = document.getElementById('nine');
	if(ele.innerHTML===''){
		ele = playerSign;
	document.getElementById('nine').innerHTML = ele;
	 validateScoreX(); }
	 if(onOff===false){
	watch = setInterval(function(){validateComputerClick();},2000);}
  } else{} }