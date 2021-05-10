let B=document.getElementById("box");
document.addEventListener("keydown",(event)=>{
      let x=event.key;
            switch(x){
                case "ArrowDown":
                    B.style.top+=parseInt(B.style.top+10)+'px';
                    break;
                case "ArrowUp":
                    B.style.top+=parseInt(B.style.top-10)+'px';
                    break;  
                case "ArrowRight":
                    B.style.left+=parseInt(B.style.left+10)+'px';
                    break;
                case "ArrowLeft":
                    B.style.right+=parseInt(B.style.left-10)+'px';
                  break;  
            }
});