const levels = [22, 16, 9, 10, 7, 14, 11, 9]; 
var len=levels.length
console.log(add(levels,len))
function add(levels,len){
    var sum=0,avg=0;
    for(let i=0;i<len;i++){
        sum=sum+levels[i]
    }
    avg=sum/len
    return avg
}