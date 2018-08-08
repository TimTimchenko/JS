"use strict";

function isPrime(n)
{
    if (n < 2) return false;

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

var min = prompt("enter min number",);
var max = prompt("enter max number",);


    for (var i = min; i <= max; i++) {

        if (isPrime(i)) {

            console.log(i)
        }

    }




