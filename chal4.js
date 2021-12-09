const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110]; 
var len=prices.length
console.log(add(prices,len))
function add(prices,len){
    var sum=0,mid=0;
    for(let i=0;i<len;i++){
        sum=sum+prices[i]
    }
    mid=sum/len
    return mid
}