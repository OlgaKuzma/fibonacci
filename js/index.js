var n = Number(prompt('..'));
document.write('n-ne fib recursion = ' + fib(n) + '<br>');

function fib(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

n = Number(prompt('..'));
var array_fib = [1, 1];
document.write('n-ne fib array = ' + fibArray(n));

function fibArray(n) {
    for (var i = 1; i < n - 1; i++) {
       array_fib.push(array_fib[i] + array_fib[i - 1]);
    }
    return array_fib[array_fib.length - 1];
}