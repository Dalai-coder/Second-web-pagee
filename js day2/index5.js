let speed=Number(prompt("Enter your speed"));
let point=5;
let hetersenhurd;
if(speed<=80){
    console.log("erh hasagdaagu");
}else{
     let hetersenhurd=speed-80;
     let hetersenonoo=hetersenhurd / 5;
     if(hetersenonoo<=4){
        console.log(hetersenonoo+ " onoo hasagdaj erh hasagdaagui")
     }
     else if(hetersenonoo>=5){
        console.log( hetersenonoo+" onoo hasagdaj erh hasagdsan");
     }
}