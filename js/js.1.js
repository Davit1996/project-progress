/* Ex 1 */
function getFibonacci(number){
    let n=parseInt(number,10);
    if(Boolean(n)===false){
        console.log("incorrect data");
        return;
    }
   else{
       let a=0;
       let b=1;
       let c=0;
    for(let i=1;i<=n;i++){
        console.log(a);
        c=a+b;
        a=b;
        b=c;
    }
   }
}
/* Ex 2 */
function getTable(number){
    let n=parseInt(number,10);
    if(Boolean(n)===false){
        console.log("incorrect data");
        return;
    }
   else{
    for(let i=1;i<=10;i++){
        let sum=n*i;
        console.log(n+"*"+i+"="+sum);
    }
   }
   
}
/* Ex 3 */
function evenOrOdd(number){
    let n=parseInt(number,10);
    if(Boolean(n)===false){
        console.log("incorrect data");
        return;
    }
    else {
        if(n%2===1){
            /* console.log('number is odd ${n}") */
            console.log(n+" is odd")
        }
        else {
           /*  console.log("number is even"$(n)) */
           console.log(n+" is even")
        }
    }
}
evenOrOdd(21);