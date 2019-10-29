function changeList(){
   var list = document.getElementsByClassName("u_list")[0];
   list.getElementsByClassName("food")[0].innerHTML = "Sushi";
}
function changeTag(){
   document.getElementsByTagName("ul")[0].setAttribute("class","green");
}
function addBackground() {
   var background = document.getElementById("div").querySelectorAll("ul");
   background[0].style.backgroundColor = "yellow";
}