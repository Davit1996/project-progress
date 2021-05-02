function insert(m){
    document.getElementById("display").innerHTML+=m;
}
function remove(){
    document.getElementById("display").innerHTML="";
}
function equal(){
    document.getElementById("display").innerHTML=eval(document.getElementById("display").innerHTML);
}