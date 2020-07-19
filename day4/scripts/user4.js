var a=prompt("enter the first number");
var b=prompt("enter the second number");
var num=parseInt(a);
var num2=parseInt(b);
var c=prompt("enter the symbol");
switch(c){
    case "+":{
        console.log(num+num2);
        break;
    }   
    case "-":{
        console.log(num-num2);
        break;
    } 
    case "*":{
        console.log(num*num2);
        break;
    }  
    case "/":{
        console.log(num/num2);
        break;
    } 
    case "%":{
        console.log(num%num2);
        break;
    }
    case "sq":{
        var s=prompt("enter the number to square");
        var snum=parseInt(s);
        console.log(snum*snum);
        break;
    }
    default:{
        console.log("enter the correct symbol");
    }
   
    
}

