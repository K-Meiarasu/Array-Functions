function greatestOfTwoNumbers(n1,n2){
    if(n1>n2){
        return n1
    }
    else if(n2>n1){
        return n2
    }
    else{
        return "Equal numbers";
    }
}
var n1=10
var n2=10
console.log(greatestOfTwoNumbers(n1,n2))