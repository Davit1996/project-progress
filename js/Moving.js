let B=document.getElementById("box");
document.addEventListener("keydown",(event)=>{
      let x=event.key;
            switch(x){
                case "ArrowDown":
                    B.style.top+="50px";
                    break;
                case "ArrowUp":
                    B.style.top+="50px";
                    break;  
                case "ArrowRight":
                    B.style.left+="50px";
                    break;
                case "ArrowLeft":
                    B.style.right+="50px";
                    break;        
            }
});