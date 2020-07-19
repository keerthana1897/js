let salary=prompt("enter your salary");
salary=parseInt(salary);
let sales=prompt("enter the sales made");
sales=parseInt(sales);
if(sales >0 && sales<=5000){
    let pay=parseInt(salary/100)*2;
    console.log(pay);

}
if(sales >5000 && sales<=10000){
    let pay=parseInt(salary/100)*5;
    console.log(pay);
    
}
if(sales >10001 && sales<=20000){
    let pay=parseInt(salary/100)*7;
    console.log(pay);
    
}
if(sales >20000){
    let pay=parseInt(salary/100)*10;
    console.log(pay);
}