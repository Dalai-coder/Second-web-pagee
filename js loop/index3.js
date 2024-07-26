let n=Number(prompt("Enter n digit"));
let a=0;
for(let i=1; i<=n; i++){
    if(i%2==0){
        a+=i;
    }
}
alert(a);