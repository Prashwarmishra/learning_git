function findNthPrime(n){
    let i=1;
    let count=0;
    while(count!=n){
        i=i+1;
        for(let j=2;j<=i;j++){
            if(j == i){
                count++;
            }else if(i%j == 0){
                break;
            }
        }
    }

    return i;
}
let n = prompt("Enter the number:", 1);
let ans = findNthPrime(n);
console.log("The nth prime number is: "+ ans);