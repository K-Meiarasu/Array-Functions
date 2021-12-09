const mixedArr = [63, 122, 'Audi', 61, true, 'Volvo', '20', 'Lamborghini', 38, 156];
var len=mixedArr.length
console.log(add(mixedArr,len))
function add(mixedArr,len){
    var sum=0;
    for(let i=0;i<len;i++)
    {
        if(typeof mixedArr[i] === 'number')
        {
            sum+=mixedArr[i]
        }
        else if(typeof mixedArr[i] === 'boolean')
        {
            if(mixedArr[i])
            {
                sum+=1
            }
        }
        else if(typeof mixedArr[i] === 'string')
        {
            sum+=mixedArr[i].length
        }
    }
    return sum
}