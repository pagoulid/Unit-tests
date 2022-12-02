function toUpperCase(char){
    char=char.toUpperCase()
    return char
}
function toLowerCase(char){
    char=char.toLowerCase()
    return char
}
function regex_match(char,pattern){
    return pattern.test(char);
}
function shift_char(char,shift){
    const map = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let encryption=(map.indexOf(char)+shift)%26
    return map[encryption];
}
//pattern.test(findVal) upattern.test(findVal)
function ceasarCipher(str,shift){
    let strArray=str.split('')
    let findVal='' // store char on iteration
    let upperFlag=false;
    for(let index=0;index<=strArray.length-1;index++){
        findVal=strArray[index]
        if(regex_match(findVal,/[A-Za-z]/)){ // if letter
            
            if(regex_match(findVal,/[A-Z]/)){
                findVal=toLowerCase(findVal) // if capital , lower to find in map , set flag to capitaluze the shifted letter
                upperFlag=true
            }

            strArray[index]=shift_char(findVal,shift);

            if(upperFlag){// if origin letter was capital , convert shifted letter to uppercase
                strArray[index]=toUpperCase(strArray[index])
                upperFlag=false;
            }
        } 
    }
    str=strArray.join('') // convert array of shifted chars back to string again
    return str
}
module.exports=ceasarCipher;