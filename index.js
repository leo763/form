var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var div = document.getElementById("div");
var number = document.getElementById("number");
var sl = document.getElementById("sl");
var sc = document.getElementById("sc");
var bl = document.getElementById("bl");
var length = document.getElementById("length");
var same = document.getElementById("same");


password.addEventListener("focus", () => {
  div.style.display = "block";
  number.style.color = "red";
  sl.style.color = "red";
  sc.style.color = "red";
  bl.style.color = "red";
  length.style.color = "red";
});

cpassword.addEventListener("focus", () => {
  div1.style.display = "block";
  same.style.color = "red";
  
});

cpassword.addEventListener("keyup", () => {
  if (password.value == cpassword.value) {
    same.style.color = "green";
    document.getElementById("cp").innerHTML = "&#10004";
  } else {
    same.style.color = "red";
    document.getElementById("cp").innerHTML = "&#10006";
  }
})

password.addEventListener("keyup", () => {
  if (password.value.match(/[0-9]/)) {
    number.style.color = "green";
    document.getElementById("sn").innerHTML = "&#10004";
  } else {
    number.style.color = "red";
    document.getElementById("sn").innerHTML = "&#10006";

  }

  if (password.value.match(/[a-z]/)) {
    sl.style.color = "green";
    document.getElementById("ssl").innerHTML = "&#10004";
  } else {
    sl.style.color = "red";
    document.getElementById("ssl").innerHTML = "&#10006";
  }

  if (
    password.value.match(/[-,_,+,=,.,/,',",;,:,!,#,%,&,(,),`,~,@,{,}]/)
  ) {
    sc.style.color = "green";
    document.getElementById("ssc").innerHTML = "&#10004";
  } else {
    sc.style.color = "red";
    document.getElementById("ssc").innerHTML = "&#10006";
  }

   if (
    password.value.match(/[A-Z]/)
  ) {
    bl.style.color = "green";
    document.getElementById("sbl").innerHTML = "&#10004";
  } else {
    bl.style.color = "red";
    document.getElementById("sbl").innerHTML = "&#10006";
  }

  if (
    password.value.length >= 8
  ) {
    length.style.color = "green";
    document.getElementById("slength").innerHTML = "&#10004";
  } else {
    length.style.color = "red";
    document.getElementById("slength").innerHTML = "&#10006";
  }

  if (password.value == cpassword.value) {
    same.style.color = "green";
    document.getElementById("cp").innerHTML = "&#10004";
  } else {
    same.style.color = "red";
    document.getElementById("cp").innerHTML = "&#10006";
  }
});

document.getElementById("seen").addEventListener("click", ()=>{
        document.getElementById("password").type = "text";
        document.getElementById("seen").style.display = "none";
        document.getElementById("unseen").style.display = "block";  
})

document.getElementById("unseen").addEventListener("click", ()=>{
        document.getElementById("password").type = "password";
        document.getElementById("seen").style.display = "block";
        document.getElementById("unseen").style.display = "none";  
})

