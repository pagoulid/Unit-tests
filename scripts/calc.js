module.exports=class Calculator{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    add(){
        return this.x+this.y;
    }

    sub(){
        return this.x-this.y;
    }

    mul(){
        return this.x*this.y;
    }
    div(){
        let res=0;
        if(this.y==0){
            if(this.x==0){
                res='Non-defined';
            }
            else{
                res='Error: Division by zero';
            }   
        }
        else{
            if(this.x==0){
                res=0;
            }
            else{
                res=(this.x/this.y).toFixed(3);
                res=parseFloat(res)
            }
            
        }
        return res;
    }
}

