const fibonacci = function(count) {
const fib = [0,1];
if (count == 0) return 0;
if(count > 0){
for (let i =2; i <= count; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

return fib[count];
}else{
    return "OOPS";
}
return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
