const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
var l=words.length;
console.log(findScaryWord(words,l))
function findScaryWord(words,l){ 
    var len=0;
    var i,ind;
    for(i=0;i<l;i++)
    {
        if(words[i].length>len)
        {
            len=words[i].length;
            ind=i;
        }
    }
    return words[ind]
}