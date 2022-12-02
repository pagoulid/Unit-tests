function sum_min_max(arr){ 
    let max=-9999999
    let min=9999999
    let sum=0

    for(let el of arr){
        sum=sum+el

        if(el>max){
            max=el
        }

        if(el<min){
            min=el
        }
    }
    return [sum,min,max]
}

function getAvg(sum,length){

    let average=sum/length

    if(average.toString().includes('.')){ // check for possible floating point
        let floating_point=average.toString().split('.')
        floating_point=floating_point[1]
        let fp_length=floating_point.length

        if(fp_length>3){ //  fix numeric part after floating point according to its length
            average=average.toFixed(3)
        }
        else{
            average=average.toFixed(fp_length)
        }
        average=parseFloat(average) 
    }

    return average

}
function analyzeArray(arr){
    
    let length=arr.length
   const [sum,min,max] = sum_min_max(arr);
   const average = getAvg(sum,length);
    

    return {average,min,max,length}
}
module.exports=analyzeArray