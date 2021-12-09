const words = [ 'door', 'window', 'ceiling', 'roof', 'plinth', 'tiles', 'ceiling', 'flooring' ]; 
var ele='tilces'
console.log(searchElement(words,ele))
function searchElement(words,ele){
    var flag=false
    for(let i=0;i<words.length;i++)
    {
        if(ele==words[i]){
            return true
        }
    }
    return false
}