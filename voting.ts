function isEligible(age:number){
    if(age>18){
        return true;
    }else if(age>14&&age<18){
        return `You are a kid`
    }else{
        return false;
    }
}


console.log(isEligible(16));
