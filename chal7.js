const words = [ 'machine', 'matter', 'subset', 'trouble', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter' ]; 
var ele='matter'
console.log(howManyTimesElementRepeated(words,ele))
function howManyTimesElementRepeated(words,ele){
    var len=words.length
    var count=0
    for(let i=0;i<len;i++){
        if(ele==words[i]){
            count=count+1
        }
    }
    return count
}