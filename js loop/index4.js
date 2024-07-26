let n=Number(prompt("Enter a n digit"));
let a=0;
for(let i=1; i<=n; i++){
    if(i%3==0 || i%5==0){
        a+=i;
    }
} 
alert(a);