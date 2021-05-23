function main(){
    const step = 14;
    let block = document.getElementById("block");
    block.style.top = "0px";
    block.style.left = "0px";

    document.addEventListener("keydown", e => {
        let prevTop = Number.parseFloat(block.style.top);
        let prevLeft = Number.parseFloat(block.style.left);
        switch (e.key) {
            case "ArrowUp":
                 block.style.top = `${prevTop - step}px`;
                break;
        
            case "ArrowDown":
               block.style.top = `${prevTop + step}px`;
                break;

            case "ArrowLeft":
                block.style.left = `${prevLeft - step}px`;
                break;

            case "ArrowRight":
               block.style.left = `${prevLeft + step}px`;
                break;
        }
    });
}
main();