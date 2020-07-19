let num=prompt("enter the number");
let num1=parseInt(num);
for(let i=1;i<=num;i++){
    let count=0;
    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            count++;
            break;
        }
    }
    if(count==0 &&i!=1)
{
    console.log(i);
}
}