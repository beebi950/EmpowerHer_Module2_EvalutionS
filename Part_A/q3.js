function sumAll(...numberss){
    let sum=0;
    for(const numbers of numberss){
        sum+=numbers
    }
    return sum;
}
console.log(sumAll(1,2,3,4,5));