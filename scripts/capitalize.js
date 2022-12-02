function capital(str){
    let counter=0
    let char=''
    let pattern=/[A-Za-z]/
    let cpattern=/[a-z]/
    let old=''
    while(counter<=str.length){
        char=str.charAt(counter);
        counter=counter+1;
        if(pattern.test(char)){ // if is letter
            if(cpattern.test(char)){ // if is not already capital else return string  
                char=char.toUpperCase()
            }
            else{ // If first charachter is already capital just return the same string
                return str
            }
            break;
        }  
    }
    
    if(counter-1!=0){// Store substring of previous non-letter charachters if any part of str
        old=str.slice(0,counter-1)
    }

    return old+char+str.slice(counter);
}

module.exports=capital