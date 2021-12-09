const items = [ 'bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt' ]; 
var len=items.length
console.log(add(items,len))
function add(items,len){
    var sum=0,avg=0;
    for(let i=0;i<len;i++){
        sum=sum+items[i].length
    }
    avg=sum/len
    return avg
}