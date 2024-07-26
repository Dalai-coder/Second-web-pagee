let number=Number(prompt("enter a 4 digit of number"));
let a;
let b;
let c;
let d;
d=number%10;
number-=d
c=number%100/10;
number-=c*10
b=number%1000/100;
number-=b*100
a=number/1000
d=String(d);
a=String(a);
c=String(c);
b=String(b);
let tongoroh;
tongoroh=d+c+b+a
console.log(tongoroh);