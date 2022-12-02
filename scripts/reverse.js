function half(str,length){ // split string in half , return the two parts and its middle point ('' if odd)
    let fhalf=''
    let shalf=''
    let middle=''
    if(length%2==0){
        fhalf=str.slice(0,(length/2))
        shalf=str.slice((length/2))
    }
    else{
        fhalf=str.slice(0,(length/2))
        shalf=str.slice((length/2)+1)
        middle=str.charAt(length/2)
    }
    return [fhalf,shalf,middle]
}
function reverse(str,length){
    let rstr=''
    for(let k=length-1;k>=0;k--){
        rstr=rstr+str.charAt(k)
    }
    return rstr
}
function reverseStr(str){
    let res=''
    let length=str.length
    if(length==1){
        return str
    }
    else{
        
        let [fhalf,shalf,middle]=half(str,length);
        let rshalf=reverse(shalf,shalf.length)// reverse second part of str first

        if(fhalf==rshalf){// if string is palindrome
            res=str
        }
        else{
            let rfhalf=reverse(fhalf,fhalf.length)// reverse first part of str 
            res=rshalf+middle+rfhalf
        }
        
    }

    return res
}
module.exports=reverseStr