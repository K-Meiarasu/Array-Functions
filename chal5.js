const items = [ 'bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt','egg','flour' ];
console.log(uniqueArray(items))
function uniqueArray(items){
    let uniqueChars = [...new Set(items)];
    return uniqueChars
}