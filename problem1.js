let num=101;
let count=0
    for(i=10000000;i<=num;i++){
        if(num/i!=10000000){
            count+=count
        }
    }
    if(count!=2){
        console.log('Yes')
    }else{
        console.log('No')
    }