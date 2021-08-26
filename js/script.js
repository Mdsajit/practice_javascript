function myFunction(){
	document.getElementById("heading").innerHTML = "Hello Javascript";
}

function myFunctionOne(){
	document.getElementById("part").innerHTML = "Paragraph changed.";
}

document.getElementById("web").innerHTML = 5 + 6;



alert(5 + 6);

//activate debugger
console.log(5 + 6);

//windows print

//statement start
let x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("stateOne").innerHTML = "The value of z is " + z + "." ;

//statement two
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("stateTwo").innerHTML = c;

//statement three
function myFunctionFirst(){
	document.getElementById("demotwo").innerHTML = "Hello Sajid";
	document.getElementById("demothree").innerHTML = "How are you?";

}
//string first
document.getElementById("stringone").innerHTML = 'John Doe';

//string second
document.getElementById('stringtwo').innerHTML = 10.50;

//Expressions one
var d;
d = 5;
document.getElementById("stringeleven").innerHTML = d * 10;

//Expression two
document.getElementById("stringtwelve").innerHTML = 5 * 10;

//Fan on function
function onFan(){
	document.getElementById("fanImages").src ="./images/fanon.gif";
}
function offFan(){
  document.getElementById("fanImages").src ="./images/fanoff.jpg";	
}

//text change
function textChange(){
	document.getElementsByClassName('h2')[1].innerHTML = "Change to my portfolio";
}
// date change

function textChangeOne(){
	document.getElementById('h1').innerHTML = Date();
}
// font size exchange

function textChangeTwo(){
	document.getElementById('h1two').style.fontSize = "60px";

}
// border setup
function textChangeFour(){
	document.getElementById('h3four').style.border = "2px solid blue";

}
//font color change
function textChangeFive(){
	document.getElementById('h5five').style.color = "blue";

}
// image function

function imgNine(){
document.getElementById('img1').src = "images/one.jpg";
}

function imgTen(){
document.getElementById('img1').src = "images/two.jpg";
}

